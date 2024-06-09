import { Link } from "react-router-dom";
import PencilIcon from "@/assets/icon/pencil";
import { Button } from "@/components/ui/button";
import ButtonDelete from "@/pages/user/components/alert-dialog";

export const columns = [
  {
    header: "No",
    accessorFn: (originalRow, index) => index + 1,
  },
  {
    header: "Nama Lengkap",
    accessorKey: "fullname",
  },
  {
    header: "Username",
    accessorKey: "username",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Asal Sekolah",
    accessorKey: "from_school",
  },
  {
    header: "Tahun Lulus",
    accessorKey: "graduation_year",
  },
  {
    header: "Verifikasi",
    accessorKey: "isVerified",
  },
  {
    header: "Aksi",
    cell: ({ row }) => {
      const id = row.original.id;

      return (
        <div className="flex gap-2">
          <Button
            asChild
            size="icon"
            className="bg-[#E28100] hover:bg-[#E28100]/80"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          >
            <Link to={`/user/${id}?edit=true`}>
              <PencilIcon className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="icon"
            id={`btn-detail-fundraise-${id}`}
            className="bg-[#166648] hover:bg-[#166648]/80"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          >
            <Link to={`/user/${id}`}>
              <InfoIcon className="w-4 h-4" />
            </Link>
          </Button>
          <ButtonDelete id={id} />
        </div>
      );
    },
  },
];