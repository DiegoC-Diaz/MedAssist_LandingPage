import { Link } from 'react-router-dom';
const ActionButton = () => {
    return (
      <div className="mt-6">
        <Link to="/service-request">
        <button className="px-6 py-3 bg-[#028789] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Solicitar Servicio
        </button>
      </Link>
      </div>
    );
  };
  
  export default ActionButton;
  