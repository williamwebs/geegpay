const Range = ({ name, percentage, value, amount, color }) => {
  return (
    <div className="flex flex-col gap-1 px-2 py-2">
      <h5 className="font-semibold text-sm md:text-base text-[#22242C] dark:text-white">
        {name}
      </h5>
      <input
        type="range"
        name={name}
        id={name}
        min={0}
        max={100}
        value={value}
        className={`w-full appearance-none outline-none rounded-full h-3 bg-bg`}
        style={{
          background: `linear-gradient(to right, ${color} 0%, ${color} 50%, #f5f5f5 50%, #f5f5f5 100%)`,
        }}
      />
      <div className="flex items-center justify-between">
        <p className="font-normal text-xs md:text-sm text-[#525252] dark:text-white">
          {amount}
        </p>
        <p className="font-normal text-xs md:text-sm text-[#525252] dark:text-white">
          {percentage}
        </p>
      </div>
    </div>
  );
};

export default Range;
