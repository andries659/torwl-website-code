import { CalendarIcon, UserIcon, ClockIcon } from "lucide-react";

interface PostMetaProps {
  category: string;
  date: string;
  updated?: string; // Optional updated date
  author: string;
}

// Define your custom colors for known categories
const categoryColors: Record<string, string> = {
  website: "bg-blue-600 text-black",
  mod: "bg-purple-600 text-black",
  default: "bg-gray-100 text-gray-800",
};

export default function PostMeta({ category, date, updated, author }: PostMetaProps) {
  const normalized = category.toLowerCase();
  const badgeClass = categoryColors[normalized] || categoryColors.default;

  return (
    <div className="mb-4 text-sm text-muted-foreground">
      <span className={`rounded-full px-4 py-0.8 text-base font-semibold ${badgeClass}`}>
        {category}
      </span>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
        <span className="flex items-center gap-1">
          <CalendarIcon className="h-4 w-4" />
          {date}
        </span>
        {updated && (
          <span className="flex items-center gap-1">
            <ClockIcon className="h-4 w-4" />
            Updated: {updated}
          </span>
        )}
        <span className="flex items-center gap-1">
          <UserIcon className="h-4 w-4" />
          {author}
        </span>
      </div>
    </div>
  );
}
