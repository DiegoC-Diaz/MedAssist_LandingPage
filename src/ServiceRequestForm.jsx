import React, { useState } from 'react';
import { sendMessage } from './controller/whatsapp_controller';
import logo from './assets/LOGO.png'; // Asegúrate de que esta ruta es correcta

const ServiceRequestForm = () => {
  const [formData, setFormData] = useState({
    contact: "",
    firstName: "",
    lastName: "",
    service: "",
    location: "",
    latitude: null,
    longitude: null,
    time: ""
  });

  const [showPopup, setShowPopup] = useState(false);
  const [mapUrl, setMapUrl] = useState("");

  const services = [
    "Curación",
    "Conectar suero",
    "Inyección de medicamento",
    "Cambio/colocación de sonda",
    "Otros servicios médicos"
  ];

  const availableTimes = [
    "08:00 AM",
    "10:00 AM",
    "12:00 PM",
    "02:00 PM",
    "04:00 PM",
    "06:00 PM"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función para obtener la ubicación mediante Nominatim (OSM)
  const fetchLocation = async () => {
    if (formData.location) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(formData.location)}`
        );
        const data = await response.json();
        if (data && data.length > 0) {
          const { lat, lon, display_name } = data[0];
          const latitude = parseFloat(lat);
          const longitude = parseFloat(lon);
          setFormData({
            ...formData,
            location: display_name,
            latitude,
            longitude
          });
          // Calcular un pequeño bbox para centrar el mapa
          const offset = 0.005;
          const minLon = longitude - offset;
          const minLat = latitude - offset;
          const maxLon = longitude + offset;
          const maxLat = latitude + offset;
          setMapUrl(
            `https://www.openstreetmap.org/export/embed.html?bbox=${minLon},${minLat},${maxLon},${maxLat}&layer=mapnik&marker=${latitude},${longitude}`
          );
        } else {
          alert("No se encontró la ubicación. Intenta con otra dirección.");
        }
      } catch (error) {
        console.error("Error al buscar la ubicación:", error);
        alert("Error al buscar la ubicación.");
      }
    } else {
      alert("Por favor, ingresa una dirección.");
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const locString = `Lat: ${latitude}, Lng: ${longitude}`;
          setFormData({
            ...formData,
            location: locString,
            latitude,
            longitude
          });
          const offset = 0.005;
          const minLon = longitude - offset;
          const minLat = latitude - offset;
          const maxLon = longitude + offset;
          const maxLat = latitude + offset;
          setMapUrl(
            `https://www.openstreetmap.org/export/embed.html?bbox=${minLon},${minLat},${maxLon},${maxLat}&layer=mapnik&marker=${latitude},${longitude}`
          );
        },
        (error) => {
          console.error("Error obteniendo ubicación:", error);
          alert("No se pudo obtener la ubicación. Asegúrate de activar el GPS.");
        }
      );
    } else {
      alert("Tu navegador no soporta la geolocalización.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    await sendMessage(formData);
    setShowPopup(true);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Solicitar Servicio</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="contact"
          placeholder="Teléfono o correo electrónico"
          className="w-full p-3 border rounded-lg"
          pattern="(\d{8}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})"
          title="Ingrese un número de 8 dígitos o un correo válido"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="firstName"
          placeholder="Nombre"
          className="w-full p-3 border rounded-lg"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Apellido"
          className="w-full p-3 border rounded-lg"
          required
          onChange={handleChange}
        />

        <select
          name="service"
          className="w-full p-3 border rounded-lg"
          required
          onChange={handleChange}
        >
          <option value="">Seleccione un servicio</option>
          {services.map((service, index) => (
            <option key={index} value={service}>{service}</option>
          ))}
        </select>

        {/* Ubicación habilitada */}
        <div className="w-full p-3 border rounded-lg bg-gray-100">
          <p className="text-gray-700 font-semibold mb-2">Ubicación:</p>
          <input
            id="location-input"
            type="text"
            name="location"
            placeholder="Ingresa tu dirección"
            className="w-full p-2 border rounded-lg"
            onChange={handleChange}
          />
          <div className="flex space-x-2 mt-2">
            <button
              type="button"
              className="flex-1 p-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              onClick={getCurrentLocation}
            >
              Usar mi ubicación actual
            </button>
            <button
              type="button"
              className="flex-1 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={fetchLocation}
            >
              Buscar Ubicación
            </button>
          </div>

          {/* Mapa de OpenStreetMap */}
          {mapUrl && (
            <iframe
              className="w-full h-48 mt-2 rounded-lg border"
              src={mapUrl}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Mapa de ubicación"
            ></iframe>
          )}
        </div>

        <div>
          <p className="text-gray-700 font-semibold mb-2">Horarios disponibles:</p>
          <div className="grid grid-cols-3 gap-2">
            {availableTimes.map((time, index) => (
              <button
                key={index}
                type="button"
                className={`p-3 border rounded-lg hover:bg-blue-200 ${formData.time === time ? 'bg-blue-500 text-white' : ''}`}
                onClick={() => setFormData({ ...formData, time })}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Enviar Solicitud
        </button>
      </form>

      {/* Custom Popup Modal sin overlay oscuro */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <img src={logo} alt="Logo" className="w-24 mx-auto mb-4" />
            <p className="text-xl font-semibold">Gracias por escogernos</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => setShowPopup(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceRequestForm;
