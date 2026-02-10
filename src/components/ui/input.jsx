const Input = ({ label, icon: Icon, className = "", ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
        )}
        <input
          className={`w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all hover:border-slate-400 ${
            Icon ? "pl-10" : ""
          } ${className}`}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
