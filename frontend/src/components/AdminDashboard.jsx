import {
  LayoutDashboard,
  Users,
  MessageSquare,
  ShieldCheck,
  Settings,
  Crown,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../App";
import { Navigate } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

export default function AdminPanel() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [activeTab, setActiveTab] = useState("dashboard");
  const { user, token, isLoading } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState([]);
  const [allMessages, setAllMessages] = useState([]);
  const [allClubMembers, setAllClubMembers] = useState([]);
  const [allAdmins, setAllAdmins] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/admin/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllUsers(response.data.allUsers);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllMessages = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/admin/messages`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllMessages(response.data.allMessages);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllClubMembers = () => {
    const members = allUsers.filter((users) => {
      return users.isClubMember === true;
    });
    setAllClubMembers(members);
  };

  useEffect(() => {
    getAllUsers();
    getAllMessages();
  }, []);

  useEffect(() => {
    getAllClubMembers();
  }, [allUsers]);

  useEffect(() => {
    const Admins = allUsers.filter((admins) => {
      return admins.isAdmin === true;
    });
    setAllAdmins(Admins);
  }, [allUsers]);

  const stats = [
    {
      title: "Total Users",
      value: allUsers.length,
      icon: <Users size={28} />,
    },
    {
      title: "Club Members",
      value: allClubMembers.length,
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "Messages",
      value: allMessages.length,
      icon: <MessageSquare size={28} />,
    },
    {
      title: "Admins",
      value: allAdmins.length,
      icon: <Crown size={28} />,
    },
  ];

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/admin/messages/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllMessages((prev) => prev.filter((message) => message._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

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
              <div className="relative overflow-hidden bg-linear-to-br from-violet-600 via-indigo-600 to-blue-600 rounded-3xl p-8 border border-white/10 shadow-2xl">
                {/* Background Decoration */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <Crown size={16} />
                  <span className="text-sm font-medium">
                    Administrator Panel
                  </span>
                </div>

                {/* Main Content */}
                <div className="mt-6">
                  <h2 className="text-4xl font-bold tracking-tight">
                    Welcome Back 👋
                  </h2>

                  <p className="mt-3 text-white/80 text-lg max-w-md">
                    Manage users, moderate messages, and keep your community
                    running smoothly from one place.
                  </p>
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
                {allUsers.map((user) => (
                  <tr key={user.id} className="border-b border-slate-800">
                    <td className="py-4">{user.fullName}</td>
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
                  <th className="text-left py-4">Text</th>
                  <th className="text-left py-4">Author</th>
                  <th className="text-left py-4">Date</th>
                  <th className="text-left py-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {allMessages.map((message) => (
                  <tr key={message.id} className="border-b border-slate-800">
                    <td className="py-4">{message.title}</td>

                    <td className="py-4">{message.text}</td>

                    <td>{message.author.fullName}</td>

                    <td>
                      {new Date(message.createdAt).toLocaleString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </td>

                    <td>
                      <button
                        onClick={() => handleDelete(message._id)}
                        className="px-3 py-1 bg-red-500 rounded-lg"
                      >
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
              {allClubMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-[#020817] border border-slate-700 rounded-xl p-5"
                >
                  <h2 className="font-bold text-lg">{member.fullName}</h2>

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
      </main>
    </div>
  );
}
