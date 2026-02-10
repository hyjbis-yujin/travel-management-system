import { create } from "zustand";
import { api } from "../api/config";

const usePackageStore = create((set) => ({
  packages: [],
  loading: false,
  error: null,

  fetchPackages: async () => {
    set({ loading: true, error: null });
    try {
      const packages = await api.get("/packages");
      set({ packages, loading: false });
    } catch (e) {
      set({ error: e.message || "API 요청 실패", loading: false });
    }
  },
}));

export default usePackageStore;
