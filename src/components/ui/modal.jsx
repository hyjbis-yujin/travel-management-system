import { X } from "lucide-react";
import { useLayoutEffect } from "react";

const Modal = ({ title, children, onClose, className }) => {
  useLayoutEffect(() => {
    const closeFn = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };

    window.addEventListener("keydown", closeFn);

    return () => {
      window.removeEventListener("keydown", closeFn);
    };
  }, [onClose]);

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }} // 뒷 배경 클릭 시 모달 닫기
      >
        <div
          className={`relative w-full max-w-md bg-white rounded-lg shadow-xl border border-slate-200 ${className}`}
        >
          <div className="flex justify-between items-center p-5 border-b border-slate-200 bg-slate-50 rounded-t-lg">
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <button
              className="text-slate-400 hover:text-slate-600 rounded p-1 transition-colors"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
