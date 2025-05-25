import { CalendarIcon, UserIcon } from "lucide-react";

interface PostMetaProps {
  category: string;
  date: string;
  author: string;
}

export default function PostMeta({ category, date, author }: PostMetaProps) {
  return (
    <div className="mb-4 text-sm text-muted-foreground">
      <span className="bg-primary/10 text-primary rounded-md px-2 py-1 text-xs font-medium">
        {category}
      </span>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
        <span className="flex items-center gap-1">
          <CalendarIcon className="h-4 w-4" />
          {date}
        </span>
        <span className="flex items-center gap-1">
          <UserIcon className="h-4 w-4" />
          {author}
        </span>
      </div>
    </div>
  );
}
