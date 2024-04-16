export const TableItems = ({ oid, status, tid, date, amount, noBorder }) => {
  return (
    <div className={`${noBorder ? "" : "border-b-2"}`}>
      <div className="grid grid-cols-5 my-3 rounded-sm px-3 text-sm font-medium text-[#4D4D4D]">
        <div className="text-[#146EB4]">#{oid}</div>
        <div className="flex items-center">
          <div
            className={`w-2.5 h-2.5 rounded-full ${status === "Successful" ? "bg-green-400" : "bg-slate-400"}`}
          ></div>

          <div className="pl-1">{status}</div>
        </div>
        <div>{tid}</div>
        <div>{date}</div>
        <div className="place-self-end">₹{amount}</div>
      </div>
    </div>
  );
};
