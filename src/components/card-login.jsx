import React from "react";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import simabaLogo from "@/assets/logo/simabalogo.png"

export const LayoutLogin = ({ children, label, id, route }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F4F6F9] h-screen">
      <div className="w-[30.5rem] bg-white">
        <div className="flex flex-col items-center pt-2 bg-[#F4F6F9]">
          <img
            src={simabaLogo}
            alt="logo"
            className="w-[9.75rem] h-[10.375rem]"
          />
        </div>
        <hr className="border-2 border-[#293066] w-full" />
        <div className="px-8 py-8">
          <Link
            id="btn-back"
            to={route}
            className="flex items-center gap-[0.625rem] mb-[1.25rem] text-[#293066]"
          >
            <Label htmlFor={id} className="text-xl font-bold cursor-pointer">
              {label}
            </Label>
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
};
