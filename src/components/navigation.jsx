import {
  Home,
  Users,
  Package,
  MapPin,
  UserCheck,
  Briefcase,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState();
  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location.pathname]);

  const MenuButton = ({ title, icon, route }) => {
    const Icon = icon;
    const isActive = route === currentLocation;
    return (
      <Link
        to={route}
        className={`flex items-center px-4 py-2.5 rounded transition-all duration-150 text-slate-300 ${
          isActive
            ? "bg-blue-600 text-white shadow-sm"
            : "hover:bg-slate-700/50 hover:text-slate-100"
        }`}
      >
        <Icon className="w-4 h-4 mr-3 text-slate-400" />
        <span className="text-sm font-medium">{title}</span>
      </Link>
    );
  };

  return (
    <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
      {menuData.map((data) => (
        <MenuButton
          key={data.title}
          title={data.title}
          icon={data.icon}
          route={data.route}
        />
      ))}
    </nav>
  );
};

const menuData = [
  {
    title: "대시보드",
    icon: Home,
    route: "/",
  },
  {
    title: "여행상품",
    icon: Package,
    route: "/packages",
  },
  {
    title: "직원관리",
    icon: Users,
    route: "/employees",
  },
  {
    title: "고객관리",
    icon: UserCheck,
    route: "/customers",
  },
  {
    title: "업무관리",
    icon: Briefcase,
    route: "/tasks",
  },
];

export default Navigation;

// 숙제
// taliwind 보고 오기
// 코드해석 주석
// 로고영역, 하단정보 컴포넌트로 분리해오기
// Git에 추가
