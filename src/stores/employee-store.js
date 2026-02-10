import { create } from "zustand";
import { api } from "../api/config";

const useEmployeeStore = create((set) => ({
  employees: [],
  loading: false,
  error: null,

  fetchEmployees: async () => {
    set({ loading: true, error: null });
    const employees = await api.get("/employees");
    set({ employees, loading: false });
  },

  addEmployee: async (employeeData) => {
    set({ loading: true, error: null });
    const newEmployees = await api.post("/employees", employeeData);
    set((state) => ({
      employees: [...state.employees, newEmployees],
      loading: false,
    }));
    return newEmployees;
  },

  addEmployee: (employeeData) =>
    set((state) => ({
      employees: [
        ...state.employees,
        {
          id: Date.now().toString(),
          ...employeeData,
          createAt: new Date().toISOString,
        },
      ],
    })),
  upDateEmployee: (id, employeeData) =>
    set((state) => ({
      employees: state.employees.map((emp) =>
        emp.id === id
          ? { ...emp, ...employeeData, upDatedAt: new Date().toISOString() }
          : emp,
      ),
    })),
  delateEmployee: (id) =>
    set((state) => ({
      employees: state.employees.filter((emp) => emp.id !== id),
    })),
  getEmployee: (id) => {
    const state = useEmployeeStore.getState();
    return state.employees.find((emp) => emp.id === id);
  },
}));

export default useEmployeeStore;
