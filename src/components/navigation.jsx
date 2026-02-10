import { Home, Users, Package, UserCheck, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation(); // 현재 라우트 위치 객체를 가져오는 훅
  const [currentLocation, setCurrentLocation] = useState(); // 현재 경로(pathname)를 저장해서 활성 메뉴 판단에 사용
  useEffect(() => {
    // location.pathname(현재 URL)가 바뀔 때마다 실행
    // URL 경로가 변경될 때마다 현재경로를 currentLocation에 업데이트함
    setCurrentLocation(location.pathname);
    // error가 뜨는 이유 : 의존성배열의 값이 useState에 업데이트되는 값이 동일하게 될 수 있는 경우가 생길 수 있기때문에 경고하는 것 -> (의존성배열과 동일할 경우 무한루프)
  }, [location.pathname]);

  const MenuButton = ({ title, icon, route }) => {
    // 부모가 넘겨준 props를 구조분해로 받음 (title, icon, route)
    const Icon = icon; //  // icon으로 전달된 "컴포넌트"를 Icon이라는 변수에 담아서 JSX에서 <Icon />처럼 사용하기 위함
    const isActive = route === currentLocation; // 이 버튼의 route와 현재 경로가 같으면 현재 선택된(활성) 메뉴로 판단
    return (
      <Link
        to={route} // 데이터 배열에 있는 route 값으로 이동
        className={`flex items-center px-4 py-2.5 rounded transition-all duration-150 text-slate-300 ${
          isActive // 현재 URL경로와 route가 동일하면 1번 아니면 2번
            ? "bg-blue-600 text-white shadow-sm"
            : "hover:bg-slate-700/50 hover:text-slate-100"
        }`}
      >
        <Icon className="w-4 h-4 mr-3 text-slate-400" />
        {/* 전달받은 아이콘 컴포넌트를 렌더링 */}
        <span className="text-sm font-medium">{title}</span>
      </Link>
    );
  };

  return (
    <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
      {menuData.map((data) => (
        <MenuButton //menuData 배열을 순회하며 각 항목(객체)으로 MenuButton을 렌더링한다.
          key={data.title} //리스트 항목을 식별하기 위한 고유 key (title 중복 가능하면 부적절함)
          title={data.title} // 메뉴명은 menuData에 있는 title을 전달
          icon={data.icon} // 아이콘은 menuData에 있는 icon을 전달
          route={data.route} // 이동할 경로는 menuData에 있는 route를 전달
        />
      ))}
    </nav>
  );
};

const menuData = [
  // 사이드바 메뉴 데이터 배열
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
