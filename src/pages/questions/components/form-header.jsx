import { useNavigate } from "react-router-dom";
import ArrowLeft from "@/assets/icon/arrow-left";

const FormHeader = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-16 px-8 items-center gap-3 border-b-[1px]">
      <div className="cursor-pointer" onClick={() => navigate(-1)}>
        <ArrowLeft className="w-4 h-4 text-[#293066]" />
      </div>
      <h3 className="text-lg font-bold text-[#293066]">
        {title === "edit"
          ? "Edit Question"
          : title === "detail"
          ? "Detail Question"
          : title === "add"
          ? "Tambah Question"
          : ""}
      </h3>
    </div>
  );
};

export default FormHeader;