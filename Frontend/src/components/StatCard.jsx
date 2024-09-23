import { MdBorderHorizontal } from "react-icons/md";

const StatCard = ({ title, value, increase, color, icon: Icon }) => (
  <div className={`rounded-lg p-6 text-white ${color}`}>
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-4xl font-bold mt-2">{value}</p>
      </div>
      <div className="p-2 bg-white bg-opacity-30 rounded-lg">
        <Icon size={24} />
      </div>
    </div>
    <div className="flex justify-between items-center">
      <p className="text-sm">
        <span className="font-medium">+{increase}</span> Last Month
      </p>
      <button className="text-white">
        <MdBorderHorizontal size={20} />
      </button>
    </div>
  </div>
);

export default StatCard;