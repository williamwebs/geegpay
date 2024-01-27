import Image from "next/image";

const Card = ({ image, title, value, percentage, up }) => {
  return (
    <div className="card w-full h-full lg:w-[239px] lg:h-[202px] bg-white dark:bg-gray800 p-2 md:p-4 rounded-lg md:rounded-2xl">
      <div className="flex flex-col gap-3 md:gap-0 md:justify-between h-full">
        <div className="image_detail flex items-between justify-between w-full">
          <div className="logo w-8 md:w-10 h-8 md:h-10 rounded-full border border-[#e5eaef] dark:border-gray600 flex items-center justify-center p-2">
            <Image src={image} width={100} height={100} alt="" />
          </div>
          <div className="chart flex items-center justify-center">
            <Image
              src={up ? "/images/up-chart.svg" : "/images/down-chart.svg"}
              width={100}
              height={100}
              alt="chart"
            />
          </div>
        </div>
        <div className="data">
          <h5 className="font-medium text-sm md:text-base text-[#898989] dark:text-gray100">{title}</h5>
          <p className="font-semibold text-base md:text-xl text-[#3a3f51] dark:text-white">{value}</p>
        </div>
        <div className="description flex items-center justify-between">
          <div
            className={`left flex items-center gap-1 px-2 py-1 rounded-md ${
              up ? "bg-[rgba(52,202,165,0.12)]" : "bg-red-100"
            }`}
          >
            <div className="icon w-3 h-3">
              <Image
                src={
                  up ? "/images/trending-up.svg" : "/images/trending-down.svg"
                }
                width={100}
                height={100}
                alt="chart"
              />
            </div>
            <div className="text">
              <p
                className={`font-medium text-[8px] md:text-xs ${
                  up ? "text-success" : "text-error"
                }`}
              >
                {percentage}
              </p>
            </div>
          </div>
          <div className="right">
            <p className="font-normal text-[9px] md:text-sm text-[#606060] dark:text-gray100">
              vs. previous month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
