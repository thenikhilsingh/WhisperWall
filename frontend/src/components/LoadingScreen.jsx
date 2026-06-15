export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#020817] flex flex-col items-center justify-center">
      <div className="w-10 h-10 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>

      <p className="mt-4 text-white text-xl font-medium animate-pulse">
        Loading...
      </p>
    </div>
  );
}
