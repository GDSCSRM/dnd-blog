import MockImage from "./mock-image";
import Round from "./round";

interface ArticleCardProps {
  title: string;
  category: string;
  content: string | null;
  author: string;
  publishedAt: Date;
}

export default function ArticleCard({ title, category, content, author, publishedAt }: ArticleCardProps) {
  return (
    <div className="flex flex-row gap-10 min-h-min">
      <MockImage />
      <div className="flex flex-col gap-4 w-2/3">
        <div className="flex gap-3">
          <p className="text-xl font-bold">
            {title}
          </p>
          <span className="px-3 py-0.5 bg-gray-100 border border-black rounded-md w-fit h-fit">
            {category}
          </span>
        </div>
        <p className="text-xs">
          {content}
        </p>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <Round />
            <span>{author}</span>
          </div>
          <p>{new Date(publishedAt).toLocaleDateString("en-IN")}</p>
        </div>
      </div>
    </div>
  );
}
