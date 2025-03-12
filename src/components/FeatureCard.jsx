const FeatureCard = ({ title, description, image }) => {
    return (
      <div className="bg-white shadow-lg rounded-xl p-6 w-80">
        <img src={image} alt={title} className="rounded-lg mb-4 w-full h-40 object-cover" />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    );
  };
  
  export default FeatureCard;
  