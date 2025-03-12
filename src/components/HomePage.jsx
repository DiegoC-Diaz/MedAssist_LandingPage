import WhyChooseUsBanner from "./WhyChooseUsBanner";
import FeatureCard from "./FeatureCard";

import ActionBanner from "./ActionBanner";
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

const HomePage= () => {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <WhyChooseUsBanner />
      <ActionBanner /> {/* New banner with the button */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} image={feature.image} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
