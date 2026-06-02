"use client";

const Navigation = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex justify-between w-[1280px] p-10 ">
        <div className="flex items-center w-23 gap-2 ">
          <img
            className="w-4 h-4 stroke-[#4338CA] stroke-[1px]"
            src="/film.png"
            alt="film"
          />
          <p className="text-[#4338CA] font-inter text-base italic font-bold leading-5 tracking-[0.32px]">
            Movie Z
          </p>
        </div>
        <div className="flex w-122 items-center gap-3 ">
          <span className="flex items-center w-[97px] gap-2 px-3 py-2 rounded-md border border-[#E4E4E7] bg-white shadow-sm">
            <img className="flex h-4 w-4" src="/downarrow.png" alt="down" />
            <button>Genre</button>
          </span>
          <span className="flex items-center gap-2.5 px-3 py-2 rounded-md border border-[#E4E4E7] bg-white shadow-sm">
            <img className="h-4 w-4" src="/search.png" alt="search" />
            <input className="" type="search" placeholder="Search.."></input>
          </span>
        </div>
        <button className="cursor-pointer">
          <img src="/Modes.png" alt="mode" />
        </button>
      </div>
    </div>
  );
};
export default Navigation;
