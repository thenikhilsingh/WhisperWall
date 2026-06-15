import {
  LayoutDashboard,
  Users,
  MessageSquare,
  ShieldCheck,
  Settings,
  Crown,
} from "lucide-react";
import { useState } from "react";

const users = [
  {
    id: 1,
    name: "Nikhil Singh",
    email: "nikhil@gmail.com",
    isClubMember: true,
    isAdmin: true,
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@gmail.com",
    isClubMember: true,
    isAdmin: false,
  },
  {
    id: 3,
    name: "Sarah Wilson",
    email: "sarah@gmail.com",
    isClubMember: false,
    isAdmin: false,
  },
];

const messages = [
  {
    id: 1,
    title: "Welcome to WhisperWall",
    author: "Nikhil Singh",
    date: "15 Jun 2026",
  },
  {
    id: 2,
    title: "Learning MERN Stack",
    author: "John Doe",
    date: "14 Jun 2026",
  },
  {
    id: 3,
    title: "Club Secret Meeting",
    author: "Sarah Wilson",
    date: "13 Jun 2026",
  },
];

const members = users.filter((user) => user.isClubMember);

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const stats = [
    {
      title: "Total Users",
      value: 26,
      icon: <Users size={28} />,
    },
    {
      title: "Club Members",
      value: 12,
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "Messages",
      value: 89,
      icon: <MessageSquare size={28} />,
    },
    {
      title: "Admins",
      value: 2,
      icon: <Crown size={28} />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#020817] text-white flex">
      {/* Sidebar */}
      <aside className="w-72 bg-[#071124] border-r border-slate-800 p-6">
        <h1 className="text-3xl font-bold mb-10">
          Whisper<span className="text-violet-500">Wall</span>
        </h1>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
              activeTab === "dashboard" ? "bg-violet-600" : "hover:bg-slate-800"
            }`}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </button>

          <button
            onClick={() => setActiveTab("users")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
              activeTab === "users" ? "bg-violet-600" : "hover:bg-slate-800"
            }`}
          >
            <Users size={20} />
            Users
          </button>

          <button
            onClick={() => setActiveTab("messages")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
              activeTab === "messages" ? "bg-violet-600" : "hover:bg-slate-800"
            }`}
          >
            <MessageSquare size={20} />
            Messages
          </button>

          <button
            onClick={() => setActiveTab("members")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
              activeTab === "members" ? "bg-violet-600" : "hover:bg-slate-800"
            }`}
          >
            <ShieldCheck size={20} />
            Members
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
              activeTab === "settings" ? "bg-violet-600" : "hover:bg-slate-800"
            }`}
          >
            <Settings size={20} />
            Settings
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {activeTab === "dashboard" && (
          <>
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>

            <div className="grid grid-cols-4 gap-6 mt-8">
              {stats.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#071124] border border-slate-800 rounded-2xl p-6"
                >
                  <div className="flex justify-between">
                    <div>
                      <p className="text-slate-400">{item.title}</p>
                      <h2 className="text-4xl font-bold mt-2">{item.value}</h2>
                    </div>

                    <div className="text-violet-400">{item.icon}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-[#071124] border border-slate-800 rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

                <div className="space-y-4 text-slate-300">
                  <p>📝 New message created</p>
                  <p>⭐ User joined club</p>
                  <p>🛡 New admin created</p>
                  <p>🗑 Message deleted</p>
                </div>
              </div>

              <div className="bg-[#071124] border border-slate-800 rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

                <div className="grid gap-3">
                  <button
                    onClick={() => setActiveTab("users")}
                    className="bg-violet-600 py-3 rounded-xl"
                  >
                    Manage Users
                  </button>

                  <button
                    onClick={() => setActiveTab("messages")}
                    className="bg-violet-600 py-3 rounded-xl"
                  >
                    View Messages
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "users" && (
          <div className="bg-[#071124] border border-slate-800 rounded-2xl p-6">
            <h1 className="text-3xl font-bold mb-6">Users</h1>

            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="text-left py-4">Name</th>
                  <th className="text-left py-4">Email</th>
                  <th className="text-left py-4">Member</th>
                  <th className="text-left py-4">Admin</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-slate-800">
                    <td className="py-4">{user.name}</td>
                    <td>{user.email}</td>

                    <td>
                      {user.isClubMember ? (
                        <span className="text-green-400">Yes</span>
                      ) : (
                        <span className="text-red-400">No</span>
                      )}
                    </td>

                    <td>
                      {user.isAdmin ? (
                        <span className="text-violet-400">Admin</span>
                      ) : (
                        <span>User</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "messages" && (
          <div className="bg-[#071124] border border-slate-800 rounded-2xl p-6">
            <h1 className="text-3xl font-bold mb-6">Messages</h1>

            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="text-left py-4">Title</th>
                  <th className="text-left py-4">Author</th>
                  <th className="text-left py-4">Date</th>
                  <th className="text-left py-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {messages.map((message) => (
                  <tr key={message.id} className="border-b border-slate-800">
                    <td className="py-4">{message.title}</td>

                    <td>{message.author}</td>

                    <td>{message.date}</td>

                    <td>
                      <button className="px-3 py-1 bg-red-500 rounded-lg">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "members" && (
          <div className="bg-[#071124] border border-slate-800 rounded-2xl p-6">
            <h1 className="text-3xl font-bold mb-6">Club Members</h1>

            <div className="grid md:grid-cols-3 gap-6">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="bg-[#020817] border border-slate-700 rounded-xl p-5"
                >
                  <h2 className="font-bold text-lg">{member.name}</h2>

                  <p className="text-slate-400">{member.email}</p>

                  <div className="mt-4">
                    <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-400">
                      Club Member
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="bg-[#071124] border border-slate-800 rounded-2xl p-6">
            <h1 className="text-3xl font-bold mb-6">Settings</h1>

            <div className="space-y-4">
              <input
                placeholder="Club Password"
                className="w-full p-3 rounded-xl bg-[#020817] border border-slate-700"
              />

              <input
                placeholder="Admin Password"
                className="w-full p-3 rounded-xl bg-[#020817] border border-slate-700"
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
