import { LockKeyhole } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#020817] text-white">
      {/* CTA Section */}
      <div className="bg-[#020817] px-24 py-5 text-white">
        <div className="mt-12 rounded-3xl bg-linear-to-r from-[#17105A] to-[#0B1A4D] p-10 flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-bold">Ready to join the community?</h3>
            <p className="mt-3 text-gray-300">
              Create an account and become a member to see authors,
              <br />
              post your thoughts and connect with others.
            </p>
          </div>
          <button
            className="bg-violet-600 hover:bg-violet-500 px-8 py-4 rounded-xl font-semibold transition"
            onClick={() => navigate("/signup")}
          >
            Sign up now
          </button>
        </div>
      </div>

      <div className="mt-20 border-t border-slate-800 px-24 pt-10">
        <div className="grid md:grid-cols-5 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <LockKeyhole className="text-violet-400" />
              <span className="font-bold">WisperWall</span>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              A private space for honest thoughts and meaningful connections.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>How It Works</li>
              <li>Community</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>FAQ</li>
              <li>Guidelines</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#0A1328] flex items-center justify-center">
                {/* <Icon path={mdiGithub} size={18} /> */}
              </div>
              <div className="w-10 h-10 rounded-full bg-[#0A1328] flex items-center justify-center">
                {/* <Icon path={mdiChatOutline} size={18} /> */}
              </div>
              <div className="w-10 h-10 rounded-full bg-[#0A1328] flex items-center justify-center">
                {/* <Icon path={mdiTwitter} size={18} /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-500 text-sm">
          © 2026 WhisperWall. All rights reserved.
        </div>
      </div>
    </div>
  );
}
