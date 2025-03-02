import { Blog } from "@/types/blogTypes";
import { Card, CardTitle } from "./card";

interface BlogGridItemProps {
  blog: Blog;
}

const BlogGridItem = ({ blog }: BlogGridItemProps) => {
  const truncateText =
    blog.content.split(" ").length > 10
      ? blog.content.substring(0, 200) + "..."
      : blog.content;

  return (
    <Card className="h-[22rem] w-full overflow-hidden py-1">
      <CardTitle className="h-1/6 w-full text-xl p-1 mb-3">
        {blog.title}
      </CardTitle>
      <div className="h-4/6 w-full">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-[20rem] object-cover"
        />
      </div>
      <p className="h-1/6 w-full text-sm font-light">{truncateText}</p>
    </Card>
  );
};

export default BlogGridItem;
