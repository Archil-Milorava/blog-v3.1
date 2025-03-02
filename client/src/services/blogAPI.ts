import api from "@/config/apiConfig";
import { Blog } from "@/types/blogTypes";

export const getAllBlogs = async (): Promise<Blog[]> => {
  const response = await api.get("/api/v1/allBlogs");
  return response.data.blogs;
};
