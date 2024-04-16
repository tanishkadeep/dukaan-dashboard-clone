import "./App.css";
import { RevenueCard } from "./components/RevenueCard";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { Button } from "./components/Button";
import { Table } from "./components/Table";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="overflow-y-auto flex-1 ml-56">
        <TopBar />
        <div className=" bg-[#FAFAFA] p-8">
          <div className="flex justify-between">
            <div className="font-semibold text-xl pb-7">Overview</div>
            <div className="flex items-center bg-white border-2 px-3 h-10 cursor-pointer">
              <div className="pr-3">This Month</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-evenly gap-5">
            <RevenueCard
              title={"Next Payout"}
              amount={"2,312.23"}
              orderCount={"23"}
              nextPayment={"yes"}
              bgcolor={"bg-[#146EB4]"}
              textcolor={"text-white"}
            />
            <RevenueCard
              title={"Amount Pending"}
              amount={"92,312.20"}
              orderCount={13}
              bgcolor={"bg-white"}
            />
            <RevenueCard
              title={"Amount Processed"}
              bgcolor={"bg-white"}
              amount={"23,92,312.19"}
            />
          </div>
          <div className="font-medium text-xl py-7">
            Transactions | This Month
          </div>
          <div className="flex mb-5">
            <Button title={"Payouts"} number={22} />
            <Button title={"Refunds"} number={6} selected={true} />
          </div>
          <Table />
          <div className="flex justify-center items-center mt-10 font-medium text-[#6B7280]">
            Made with <span className="text-red-500 px-1.5 text-xl">❤️</span> by
            <a href="https://github.com/tanishkadeep">
              <span className="underline pl-2 font-extrabold">
                Tanishka Deep
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
