export const Button = ({ title, number, selected }) => {
  return (
    <div>
      <button
        className={`${selected ? "bg-[#146EB4] text-white" : "bg-[#E6E6E6] text-[#808080]"} px-4 py-2 rounded-3xl mr-4`}
      >
        {title} ({number})
      </button>
    </div>
  );
};
