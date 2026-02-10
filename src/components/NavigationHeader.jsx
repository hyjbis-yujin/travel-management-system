import { Plane } from "lucide-react";

const NavigationHeader = () => {
  return (
    <div className="p-6 border-b border-slate-700">
      <div className="flex items-center space-x-3">
        <div className="p-2.5 bg-blue-600 rounded-lg shadow-sm">
          <Plane className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-slate-100 tracking-wide">
            TravelPro
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">관리 시스템</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;
