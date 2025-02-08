import logo from "../assets/LOGO.png"; // Import the logo

const WhyChooseUs = () => {
  const features = [
    {
      title: "Profesional",
      description: "Nuestras enfermeras tienen años de experiencia y habilidades excepcionales.",
      image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=2883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Cuidadoso",
      description: "Las necesidades de cada paciente son diferentes. Nuestras enfermeras se aseguran de que cada paciente reciba la atención que necesita.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Conveniente",
      description: "¿Necesita una enfermera en casa? No hay problema! Puede reservar una enfermera en cualquier momento y lugar con nuestra aplicación.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 text-center">
      {/* Semi-transparent container for logo and description */}
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

      {/* Cards outside the semi-transparent container */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 w-80">
            <img src={feature.image} alt={feature.title} className="rounded-lg mb-4 w-full h-40 object-cover" />
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
