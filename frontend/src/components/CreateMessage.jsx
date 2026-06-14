import { MessageSquare } from "lucide-react";

export default function CreateMessage() {
  return (
    <div className="min-h-screen bg-[url('/WallBG.png')] bg-cover bg-center">
      <div className="min-h-screen bg-black/60 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl bg-[#071124] border border-slate-800 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="text-violet-400" size={28} />
            <h1 className="text-3xl font-bold text-white">Create Message</h1>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Title</label>
              <input
                type="text"
                placeholder="Enter a title..."
                className="w-full bg-[#020817] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                rows="6"
                placeholder="Share your thoughts..."
                className="w-full bg-[#020817] border border-slate-700 rounded-xl px-4 py-3 text-white resize-none focus:outline-none focus:border-violet-500"
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="px-6 py-3 border border-slate-700 text-white rounded-xl hover:border-slate-500 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-medium transition"
              >
                Post Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
