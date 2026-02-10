export const API_BASE_URL = "https://tlink-api.linus.kr";

export const api = {
  async get(endpoint) {
    const res = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "API 요청 실패");
    }
    return res.json();
  },

  async post(endpoint, data) {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "API 요청 실패");
    }
    return res.json();
  },
};

// 넘무 재미없고 어렵다
