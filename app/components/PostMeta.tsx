type PostMetaProps = {
  category: string;
  date: string;
  author: string;
};

export default function PostMeta({ category, date, author }: PostMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-white text-sm mt-4">
      {/* Category Badge */}
      <span className="bg-red-600 px-3 py-1 rounded font-semibold uppercase tracking-wide text-xs">
        {category}
      </span>

      {/* Date */}
      <span className="text-white text-sm">{date}</span>

      {/* Author Badge */}
      <span className="ml-auto flex items-center bg-neutral-800 rounded px-3 py-1 border border-neutral-700">
        <span className="text-gray-400 mr-1 uppercase text-xs font-medium">By:</span>
        <span className="font-bold text-white text-sm">{author}</span>
      </span>
    </div>
  );
}
