export const SidebarItems = ({ svg, title, selected }) => {
  return (
    <div>
      {selected ? (
        <div className="flex items-center rounded-md py-2 px-3 mx-2 hover:cursor-pointer bg-[#353C53]">
          {svg}

          <div className="pl-3 text-sm">{title}</div>
        </div>
      ) : (
        <div className="flex items-center rounded-md py-2 px-3 mx-2 hover:cursor-pointer hover:bg-[#353C53]">
          {svg}

          <div className="pl-3 text-sm">{title}</div>
        </div>
      )}
    </div>
  );
};
