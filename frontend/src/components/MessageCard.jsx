import { User, Trash2 } from "lucide-react";

export default function MessageCard({
  post,
  isAdmin,
  isClubMember,
  handleDelete,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#071124] p-6 hover:border-violet-500/40 transition">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-lg leading-relaxed text-white">
          {post.title}
        </h3>

        {isAdmin && (
          <button
            onClick={() => handleDelete?.(post._id)}
            className="p-2 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>

      {/* Message */}
      <p className="mt-3 text-gray-400 text-sm">{post.text}</p>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <User size={16} />
          {isClubMember ? post.author.fullName : "Anonymous"}
        </div>

        <span>
          {isClubMember
            ? new Date(post.createdAt).toLocaleDateString()
            : "--:--"}
        </span>
      </div>
    </div>
  );
}
