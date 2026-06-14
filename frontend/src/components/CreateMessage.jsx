import { MessageSquare } from "lucide-react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateMessage() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    author: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: formData.title,
      text: formData.text,
      author: user._id,
    };
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/messages/create`,
        payload,
      );
      if (response.status == 201) {
        setFormData({
          title: "",
          text: "",
          author: "",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[url('/WallBG.png')] bg-cover bg-center">
      <div className="min-h-screen bg-black/60 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl bg-[#071124] border border-slate-800 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="text-violet-400" size={28} />
            <h1 className="text-3xl font-bold text-white">Create Message</h1>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-300 mb-2">Title</label>
              <input
                type="text"
                placeholder="Enter a title..."
                className="w-full bg-[#020817] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                rows="6"
                placeholder="Share your thoughts..."
                className="w-full bg-[#020817] border border-slate-700 rounded-xl px-4 py-3 text-white resize-none focus:outline-none focus:border-violet-500"
                name="text"
                value={formData.text}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="px-6 py-3 border border-slate-700 text-white rounded-xl hover:border-slate-500 transition"
                onClick={() => navigate("/")}
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
