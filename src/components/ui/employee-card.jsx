import { Edit, Trash2 } from "lucide-react";

/*
 *
 *
 *@param {emlpoyee} name, email, department, phone
 *@retrun
 *
 *
 */

const EmployeeCard = ({ employee }) => {
  if (!employee) {
    return <></>;
  }
  return (
    <div className="px-5 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <p className="text-lg font-semibold text-slate-900">
              {employee.name}
            </p>
            <span className="inline-flex items-center px-2 py-0.5 text-sm font-medium rounded bg-blue-50 text-blue-7000 border border-blue-200 ml-3 text-blue-500">
              {employee.position}
            </span>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <span>이메일 : {employee.email}</span>
            <span className="text-slate-300">•</span>
            <span>전화번호 : {employee.phone}</span>
            <span className="text-slate-300">•</span>
            <span>부서 : {employee.department}</span>
          </div>
        </div>
        <div className="flex space-x-1 ml-4">
          <button className="p-2 text-emerald-600 hover:bh--emerald-50 rounded transition-colors">
            <Edit className="w-4 h-4" />
          </button>
          <button className="p-2 text-red-600 hover:bh--red-50 rounded transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
