import { create } from "zustand";
import { api } from "../api/config";

const useCustomerStore = create((set) => ({
  customers: [],
  loading: false,
  error: null,

  fetchCustomers: async () => {
    set({ loading: true, error: null });
    try {
      const customers = await api.get("/customers");
      set({ customers, loading: false });
    } catch (e) {
      set({ error: e.message || "API 요청 실패", loading: false });
    }
  },
}));

export default useCustomerStore;
