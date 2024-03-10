import MockImage from "./mock-image";
import Round from "./round";

interface PopularCardProps {
  category: string;
  title: string;
  author: string;
  publishedAt: Date;
}

export default function PopularCard({ category, title, author, publishedAt }: PopularCardProps) {
  return (
    <div className="flex flex-col gap-3 w-72">
      <MockImage>
        <div className="px-3 py-0.5 bg-white border border-black rounded-md w-fit self-end">
          {category}
        </div>
      </MockImage>
      <p>
        {title}
      </p>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <Round />
          <span>{author}</span>
        </div>
        <p>{new Date(publishedAt).toLocaleDateString("en-IN")}</p>
      </div>
    </div>
  );
}
