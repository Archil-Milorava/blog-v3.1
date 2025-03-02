import BlogGridItem from "./components/ui/BlogGridItem";
import { useGetAllBlogs } from "./hooks/useBlog";

const App = () => {
  const { blogs, error, isLoading } = useGetAllBlogs();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div> {error.message}</div>;
  }

  return (
    <div className="p-10 w-full min-h-screen h-auto grid sm:grid-cols-4  gap-2">
      {blogs?.map((blog) => (
        <BlogGridItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default App;
