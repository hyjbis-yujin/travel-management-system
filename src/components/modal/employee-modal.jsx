import Input from "../ui/input";
import Button from "../ui/button";
import Modal from "../ui/modal";

export const EmployeeModal = ({ className, onClose }) => {
  const addEmployee = useEmployeeStore((state) => state.addEmployee);

  const handleSubmit = () => {};

  return (
    <Modal title={"직원 등록"} className={className} onClose={onClose}>
      <div
        className="fixed inset-0 bg-black/40 overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4"
        onClick={onClose} // 뒷 배경 클릭 시 모달 닫기
      >
        <div
          className={`relative w-full max-w-md bg-white rounded-lg shadow-xl border border-slate-200 ${className}`}
        >
          <div className="flex justify-between items-center p-5 border-b border-slate-200 bg-slate-50 rounded-t-lg">
            <h3 className="text-lg font-semibold text-slate-900">직원 등록</h3>
            <button
              className="text-slate-400 hover:text-slate-600 rounded p-1 transition-colors"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                label="이름 *"
                required
                type="text"
                name="name"
                value={undefined}
              />
              <Input
                label="이메일"
                type="text"
                name="email"
                value={undefined}
              />
              <Input
                label="전화번호"
                type="text"
                name="tel"
                value={undefined}
              />
              <Input label="부서" type="text" name="name" value={undefined} />
              <Input label="직책" type="text" name="name" value={undefined} />
            </form>
            <div className="flex justify-end space-x-2 pt-4 border-t border-slate-200">
              <Button type="button" variant="secondary" onClick={onClose}>
                취소
              </Button>
              <Button type="submit">등록</Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

// 숙제 : 탭별 스토어를 만들고 전체 목록조회를 하는 부분까지 구현 get
