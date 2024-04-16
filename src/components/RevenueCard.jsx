export const RevenueCard = ({
  title,
  amount,
  orderCount,
  nextPayment,
  bgcolor,
  textcolor,
}) => {
  return (
    <div className={`rounded-md shadow-sm ${bgcolor} ${textcolor} w-1/3`}>
      <div className={`p-5`}>
        <div className="flex items-center">
          <div className="pr-2">{title}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
        <div className="flex justify-between items-center pt-3">
          <div className="font-medium text-3xl">₹ {amount}</div>
          {orderCount ? (
            <div
              className={`flex items-center text-[#146EB4] ${textcolor} cursor-pointer underline font-medium`}
            >
              <div>{orderCount} Orders </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          ) : null}
        </div>{" "}
      </div>
      <div>
        {nextPayment ? (
          <div className="flex justify-between py-2 px-5 rounded-md bg-[#0E4F82]">
            <div>Next Payment Date:</div>
            <div>Today, 4:00PM</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
