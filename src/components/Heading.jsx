export const Heading = () => {
  return (
    <div className="grid grid-cols-5 my-3 bg-[#F2F2F2] rounded-sm p-3 text-sm font-medium text-[#4D4D4D]">
      <div>Order ID</div>
      <div>Status</div>
      <div>Transaction ID</div>
      <div>Refund Date</div>
      <div className="place-self-end">Order Amount</div>
    </div>
  );
};
