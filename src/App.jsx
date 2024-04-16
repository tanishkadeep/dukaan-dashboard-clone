import "./App.css";
import { RevenueCard } from "./components/RevenueCard";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex">
        <RevenueCard
          title={"Next Payout"}
          amount={"2,312.23"}
          orderCount={"23"}
          nextPayment={"yes"}
        />
        <RevenueCard
          title={"Amount Pending"}
          amount={"92,312.20"}
          orderCount={13}
        />
        <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"} />
      </div>
    </div>
  );
}

export default App;
