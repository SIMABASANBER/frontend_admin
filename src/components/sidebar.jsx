import { NavLink } from "react-router-dom";
import simabalogo from "@/assets/simabalogo.png";
import HomeIcon from "@/assets/icons/home";
import UserIcon from "@/assets/icon/user";
import HandIcon from "@/assets/icons/hand";
import RankingIcon from "@/assets/icon/ranking";


function Sidebar({ isOpen }) {
  return (
    <div
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      className={`${isOpen ? "w-72" : "w-20"} h-screen bg-white shadow-xl duration-300`}
    >
      <div className="flex justify-center items-center py-5 mb-5">
        <img src={simabalogo} style={{ width: "45px" }} alt="Simaba Logo" />
        <h1
          style={{ color: "#293066" }}
          className={`text-xl whitespace-nowrap font-medium uppercase ms-3 text-primary ${
            !isOpen && "hidden"
          }`}
        >
          <span className="font-bold">SIMABA</span>
        </h1>
      </div>
      <ul className={`flex flex-col ${isOpen && "gap-4"}`}>
        <li>
          <p className={`text-slate-500 text-xs font-medium ms-3 ${!isOpen && "hidden"}`}>
            DASHBOARD
          </p>
          <NavLink
            id="navigate-to-dashboard"
            to="/dashboard"
            className={({ isActive }) =>
              `text-slate-400 text-sm cursor-pointer h-14 flex hover:bg-slate-200 ${
                isActive ? "bg-[#E5E9F4]" : ""
              }`
            }
          >
            {({ isActive }) => (
              <div
                className={`flex w-full py-2 self-center gap-3 border-l-[5px] ${
                  isActive ? "border-[#293066]" : "border-transparent"
                } ${!isOpen ? "justify-center" : "gap-2"}`}
              >
                <HomeIcon
                  className={`w-5 h-5 ${isOpen ? "ms-3" : "ms-[-5px]"} ${
                    isActive ? "text-[#293066]" : "text-[#4B4B4B99]"
                  }`}
                />
                <span
                  className={`font-bold whitespace-nowrap ${!isOpen && "hidden"} ${
                    isActive ? "text-[#293066]" : "text-[#4B4B4B99]"
                  }`}
                >
                  Dashboard
                </span>
              </div>
            )}
          </NavLink>
        </li>

        <li>
          <p className={`text-slate-500 text-xs font-medium ms-3 ${!isOpen && "hidden"}`}>MENU</p>
          <NavLink
            id="navigate-to-user"
            to="/user"
            className={({ isActive }) =>
              `text-slate-400 text-sm cursor-pointer h-14 flex hover:bg-slate-200 ${
                isActive ? "bg-[#E5E9F4]" : ""
              }`
            }
          >
            {({ isActive }) => (
              <div
                className={`flex w-full py-2 self-center gap-3 border-l-[5px] ${
                  isActive ? "border-[#293066]" : "border-transparent"
                } ${!isOpen ? "justify-center" : "gap-2"}`}
              >
                <UserIcon
                  className={`w-5 h-5 ${isOpen ? "ms-3" : "ms-[-5px]"} ${
                    isActive ? "text-[#293066]" : "text-[#4B4B4B99]"
                  }`}
                />
                <span
                  className={`font-bold whitespace-nowrap ${!isOpen && "hidden"} ${
                    isActive ? "text-[#293066]" : "text-[#4B4B4B99]"
                  }`}
                >
                  User
                </span>
              </div>
            )}
          </NavLink>
          <NavLink
            id="navigate-to-questions"
            to="/questions"
            className={({ isActive }) =>
              `text-slate-400 text-sm cursor-pointer h-14 flex hover:bg-slate-200 ${
                isActive ? "bg-[#E5E9F4]" : ""
              }`
            }
          >
            {({ isActive }) => (
              <div
                className={`flex w-full py-2 self-center gap-3 border-l-[5px] ${
                  isActive ? "border-[#293066]" : "border-transparent"
                } ${!isOpen ? "justify-center" : "gap-2"}`}
              >
                <HandIcon
                  className={`w-5 h-5 ${isOpen ? "ms-3" : "ms-[-5px]"} ${
                    isActive ? "text-[#293066]" : "text-[#4B4B4B99]"
                  }`}
                />
                <span
                  className={`font-bold whitespace-nowrap ${!isOpen && "hidden"} ${
                    isActive ? "text-[#293066]" : "text-[#4B4B4B99]"
                  }`}
                >
                  Questions
                </span>
              </div>
            )}
          </NavLink>
          <NavLink
            id="navigate-to-ranking"
            to="/ranking"
            className={({ isActive }) =>
              `text-slate-400 text-sm cursor-pointer h-14 flex hover:bg-slate-200 ${
                isActive ? "bg-[#E5E9F4]" : ""
              }`
            }
          >
            {({ isActive }) => (
              <div
                className={`flex w-full py-2 self-center gap-3 border-l-[5px] ${
                  isActive ? "border-[#293066]" : "border-transparent"
                } ${!isOpen ? "justify-center" : "gap-2"}`}
              >
                <RankingIcon
                  className={`w-5 h-5 ${isOpen ? "ms-3" : "ms-[-5px]"} ${
                    isActive ? "text-[#293066]" : "text-[#4B4B4B99]"
                  }`}
                />
                <span
                  className={`font-bold whitespace-nowrap ${!isOpen && "hidden"} ${
                    isActive ? "text-[#293066]" : "text-[#4B4B4B99]"
                  }`}
                >
                  Ranking
                </span>
              </div>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;