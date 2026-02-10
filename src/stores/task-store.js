import { create } from "zustand";
import { api } from "../api/config";

const useTaskStore = create((set) => ({
  tasks: [],
  loading: false,
  error: null,

  fetchTasks: async () => {
    set({ loading: true, error: null });
    try {
      const tasks = await api.get("/tasks");
      set({ tasks, loading: false });
    } catch (e) {
      set({ error: e.message || "API 요청 실패", loading: false });
    }
  },
}));

export default useTaskStore;
