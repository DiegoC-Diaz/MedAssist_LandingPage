import logo from "../assets/LOGO.png"; // Import the logo

const WhyChooseUsBanner = () => {
  return (
    <div className="bg-gray-200 bg-opacity-50 rounded-xl p-8 max-w-5xl mx-auto">
      <div className="flex justify-center">
        <img src={logo} alt="Medassist Logo" className="w-64 h-auto mb-4" />
      </div>
      <h2 className="text-3xl font-bold text-gray-800">¿Por qué elegirnos?</h2>
      <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
        Con MEDASSIST, puede confiar en que su ser querido recibirá la mejor atención posible. 
        Nuestras enfermeras están capacitadas profesionalmente y se preocupan profundamente por cada paciente.
      </p>
    </div>
  );
};

export default WhyChooseUsBanner;