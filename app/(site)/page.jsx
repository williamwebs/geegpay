import Link from "next/link";

const page = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="border rounded-2xl p-6">
        <Link href="/dashboard" className="bg-success border border-success hover:bg-transparent outline-none py-3 px-6 rounded-lg text-white hover:text-success text-sm transition-all duration-300">
          Login to view dashboard
        </Link>
      </div>
    </div>
  );
};

export default page;
