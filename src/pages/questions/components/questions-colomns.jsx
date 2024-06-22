import { Link } from "react-router-dom";
import PencilIcon from "@/assets/icon/pencil";
import InfoIcon from "@/assets/icon/info";
import { Button } from "@/components/ui/button";
import ButtonDelete from "@/pages/questions/components/alert-dialog";

export const columns = [
  {
    header: "No",
    accessorFn: (originalRow, index) => index + 1,
  },
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Choice A",
    accessorKey: "choise_a",
  },
  {
    header: "Choice B",
    accessorKey: "choise_b",
  },
  {
    header: "Choice C",
    accessorKey: "choise_c",
  },
  {
    header: "Choice D",
    accessorKey: "choise_d",
  },
  {
    header: "Correct Answer",
    accessorKey: "correct_answer",
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
            <Link to={`/question/${id}?edit=true`}>
              <PencilIcon className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="icon"
            id={`btn-detail-questions-${id}`}
            className="bg-[#166648] hover:bg-[#166648]/80"
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          >
            <Link to={`/question/${id}`}>
              <InfoIcon className="w-4 h-4" />
            </Link>
          </Button>
          <ButtonDelete id={id} />
        </div>
      );
    },
  },
];