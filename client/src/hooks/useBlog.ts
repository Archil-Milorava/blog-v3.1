import { getAllBlogs } from "@/services/blogAPI";
import { useQuery } from "@tanstack/react-query";

export const useGetAllBlogs = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Blogs"],
    queryFn: getAllBlogs,
  });

  return { blogs, isLoading, error };
};
