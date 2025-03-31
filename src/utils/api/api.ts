import axiosInstance from "./axiosInstance";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/auth/login", { email, password });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const registerUser = async (email: string, password: string, name: string) => {
  try {
    const response = await axiosInstance.post("/auth/register", {
      email,
      password,
      name,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};
