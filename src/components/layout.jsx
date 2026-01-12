import Info from "./Info";
import Logo from "./logo";

import Navigation from "./navigation";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="flex">
        {/* 사이드바 */}
        <aside className="w-64 min-h-screen bg-slate-800 shadow-lg">
          <div className="flex flex-col h-full">
            {/* 로고 영역 */}
            <Logo />

            {/* 네비게이션 */}
            <Navigation />

            {/* 하단 정보 */}
            <Info />
          </div>
        </aside>

        {/* 메인 컨텐츠 영역 */}
        <main className="flex-1 min-h-screen bg-neutral-50">
          <div className="p-8">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
