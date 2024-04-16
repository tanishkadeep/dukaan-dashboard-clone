import { Heading } from "./Heading";
import { TableItems } from "./TableItems";

export const Table = () => {
  return (
    <div className="bg-white p-3 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center rounded-sm px-4 py-2 border-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="#808080"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <div className="pl-2">
            <input
              type="text"
              className=" w-60 outline-none text-[#808080]"
              placeholder="Order ID or transactions ID"
            />
          </div>
        </div>
        <div className="flex items-center ">
          <div className="flex items-center cursor-pointer border-2 rounded-sm px-3 py-2 mr-3">
            <div className="pr-2">Sort</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15px"
                height="15px"
                enable-background="new 0 0 512 512"
                viewBox="0 0 512 512"
                id="up-down-arrow"
              >
                <path
                  d="M163.919,494.293c-2.83,0-5.496-1.33-7.196-3.593L45.97,343.348c-2.986-3.974-2.187-9.615,1.787-12.602
				c3.974-2.986,9.616-2.187,12.602,1.787l103.557,137.777l103.493-137.775c2.986-3.975,8.627-4.775,12.602-1.791
				c3.974,2.985,4.775,8.627,1.79,12.602L171.113,490.698C169.414,492.961,166.749,494.293,163.919,494.293z"
                ></path>
                <path d="M163.917 494.293c-4.971 0-9-4.029-9-9V26.192c0-4.971 4.029-9 9-9s9 4.029 9 9v459.101C172.917 490.264 168.888 494.293 163.917 494.293zM459.507 182.622c-2.734 0-5.435-1.241-7.203-3.597L348.78 41.18 245.257 179.025c-2.985 3.975-8.626 4.777-12.601 1.792-3.974-2.984-4.777-8.626-1.792-12.601l110.72-147.43c1.699-2.263 4.365-3.595 7.196-3.595s5.497 1.332 7.196 3.595l110.72 147.43c2.985 3.975 2.183 9.616-1.792 12.601C463.285 182.034 461.388 182.621 459.507 182.622z"></path>
                <path
                  d="M348.78,494.293c-4.971,0-9-4.029-9-9V26.192c0-4.971,4.029-9,9-9s9,4.029,9,9v459.101
				C357.78,490.264,353.751,494.293,348.78,494.293z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="border-2 rounded-sm p-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </div>
        </div>
      </div>
      <Heading />
      <TableItems
        oid={281209}
        status={"Successful"}
        tid={"TRX123456"}
        date={"Today, 8:45 PM"}
        amount={"1125.00"}
      />
      <TableItems
        oid={281210}
        status={"Processing"}
        tid={"TRX789012"}
        date={"Tomorrow, 10:00 AM"}
        amount={"950.50"}
      />
      <TableItems
        oid={281211}
        status={"Successful"}
        tid={"TRX345678"}
        date={"Yesterday, 3:30 PM"}
        amount={"750.00"}
      />
      <TableItems
        oid={281212}
        status={"Successful"}
        tid={"TRX901234"}
        date={"Today, 11:20 AM"}
        amount={"2000.00"}
      />
      <TableItems
        oid={281213}
        status={"Processing"}
        tid={"TRX567890"}
        date={"Tomorrow, 9:00 AM"}
        amount={"1800.00"}
      />
      <TableItems
        oid={281214}
        status={"Processing"}
        tid={"TRX098765"}
        date={"Yesterday, 2:00 PM"}
        amount={"500.00"}
      />
      <TableItems
        oid={281215}
        status={"Successful"}
        tid={"TRX456789"}
        date={"	Today, 10:30 AM"}
        amount={"3000.00"}
      />
      <TableItems
        oid={281216}
        status={"Processing"}
        tid={"TRX987654"}
        date={"	Tomorrow, 11:30 AM"}
        amount={"1200.00"}
      />
      <TableItems
        oid={281217}
        status={"Processing"}
        tid={"TRX654321"}
        date={"Yesterday, 4:00 PM"}
        amount={"900.00"}
      />
      <TableItems
        oid={281218}
        status={"Successful"}
        tid={"TRX234567"}
        date={"Today, 9:45 AM"}
        amount={"1500.00"}
        noBorder = {true}
      />
      
    </div>
  );
};
