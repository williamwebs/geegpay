import BarChat from "@/components/barchart/BarChat";
import Card from "@/components/card/Card";
import OrderLists from "@/components/orders/OrderLists";
import Range from "@/components/range/Range";
import { chartData, platformsData } from "@/constants/menuList";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* top containg the chart info */}
      <section className="flex flex-start flex-col md:flex-col lg:flex-row justify-between gap-4 w-full h-full mt-2">
        <div className="left_panel w-full h-full lg:w-3/5">
          <div className="barchart bg-white dark:bg-gray800 px-1 md:px-2 py-3 md:py-4 rounded-lg md:rounded-2xl">
            <div className="flex items-center justify-between px-2">
              <h4 className="font-semibold text-sm md:text-base text-gray900 dark:text-white">
                Sales Trends
              </h4>
              <div className="flex items-center gap-2">
                <p className="font-medium text-xs md:text-sm text-gray700 dark:text-white block">
                  Sort by:
                </p>
                <div className="px-[6px] md:px-2 py-1 rounded-full border dark:border-gray600 flex items-center">
                  <select
                    name="sort"
                    id="sort"
                    className="outline-none border-none cursor-pointer font-normal text-xs md:text-sm text-gray900 dark:text-white bg-transparent"
                  >
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
              </div>
            </div>
            <BarChat className="w-full" />
          </div>
        </div>
        <div className="right_panel w-full h-full lg:w-2/5">
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4">
            {chartData.map((i) => (
              <Card
                image={i.image}
                title={i.title}
                value={i.value}
                percentage={i.percentage}
                up={i.up}
              />
            ))}
          </div>
        </div>
      </section>

      {/* latest order */}
      <section className="flex flex-start flex-col sm:flex-row justify-between gap-4 w-full h-full mt-5">
        <div className="left_panel w-full h-full sm:w-3/5">
          <div className="bg-white dark:bg-gray800 px-2 py-4 rounded-2xl">
            <div className="flex items-center justify-between px-2">
              <h4 className="font-semibold text-sm md:text-base text-gray900 dark:text-white">
                Latest Orders
              </h4>
              <Link
                href="/dashboard/orders"
                className="text-success font-medium text-sm md:text-base"
              >
                Sell All
              </Link>
            </div>
            <OrderLists />
          </div>
        </div>
        {/* right panel */}
        <div className="right_panel w-full h-full sm:w-2/5">
          <div className="bg-white dark:bg-gray800 px-2 py-4 rounded-2xl">
            <div className="flex items-center justify-between px-2 mb-5">
              <h4 className="font-semibold text-sm md:text-base text-gray900 dark:text-white">
                Top Platform
              </h4>
              <Link
                href="/dashboard/platforms"
                className="text-success font-medium text-sm md:text-base"
              >
                Sell All
              </Link>
            </div>
            {/* range */}
            {platformsData.map((i) => (
              <Range
                name={i.name}
                percentage={i.percentage}
                value={i.value}
                amount={i.amount}
                color={i.color}
                key={i.name}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
