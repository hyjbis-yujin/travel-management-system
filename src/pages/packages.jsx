import { Search, Plus, User } from "lucide-react";
import Button from "../components/ui/button";
import EmployeeCard from "../components/ui/employee-card";
import Input from "../components/ui/input";
import { useEffect, useState } from "react";
import { EmployeeModal } from "../components/modal/employee-modal";
import usePackageStore from "../stores/package-store";

const Packages = () => {
  const [isOpen, setIsOpen] = useState(false); // 모달 열림 상태 관리 (초기값 false)
  const packages = usePackageStore((state) => state.packages);
  const fetchPackages = usePackageStore((state) => state.fetchPackages);

  useEffect(() => {
    fetchPackages();
  }, []);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">
            여행상품 관리
          </h1>
          <p className="text-slate-600">여행상품 정보를 등록하고 관리하세요</p>
        </div>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
          className="bg-blue"
        >
          <Plus className="w-4 h-4 mr-2" />
          여행상품 등록
        </Button>
      </div>

      <div className="mb-5">
        <Input
          type="text"
          placeholder="이름, 이메일, 부서로 검색..."
          icon={Search}
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200">
        {packages.length < 1 ? (
          <div className="text-center py-16">
            <User className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500">등록한 여행상품이 없습니다.</p>
          </div>
        ) : (
          <ul className="divide-y divide-slate-200">
            {packages.map((data) => (
              <li className="hover:bg-slate-50 transition-colors">
                <EmployeeCard employee={data} />
              </li>
            ))}
          </ul>
        )}
      </div>

      {isOpen && <EmployeeModal onClose={onClose} />}
    </div>
  );
};

export default Packages;
