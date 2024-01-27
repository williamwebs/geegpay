const Profile = ({ toggleProfile }) => {
  return (
    <div
      className={`max-w-[180px] md:max-w-xs w-full ${
        toggleProfile ? "opacity-100 right-1" : "opacity-0 -right-20"
      } h-fit rounded-xl p-4 sm:p-6 bg-gray-900 dark:bg-white/30 text-white dark:text-white backdrop-blur absolute top-[12%] z-20 transition-all duration-1000`}
    >
      Profile
    </div>
  );
};

export default Profile;
// h-fit p-4 sm:p-6
