import "./App.css";
import { RevenueCard } from "./components/RevenueCard";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="overflow-y-auto flex-1 ml-56">
        <TopBar />
        <div className=" bg-[#FAFAFA] p-8">
          <div className="font-semibold text-xl pb-7">Overview</div>
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
        </div>
      </div>
    </div>
  );
}

export default App;
