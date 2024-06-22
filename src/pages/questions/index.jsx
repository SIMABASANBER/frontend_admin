import Header from "@/components/header";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import { getQuestions } from "@/utils/api/questions";
import TableData from "./components/questions-table";
import { columns } from "./components/questions-colomns";
import TableHeader from "@/components/table/table-header";
import TableLayout from "@/components/table/table-layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Questions() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getQuestions()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setData([]);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <Header titleHeader="Questions" />
      <TableLayout>
        <TableHeader heading="List Questions" hasAction={true}>
          <Button
            id="btn-add-questions"
            size="sm"
            className="rounded-full bg-[#293066] hover:bg-[#293066]/80"
            asChild
          >
            <Link to="/questions/create-question">Create Question</Link>
          </Button>
        </TableHeader>
        <TableData
          data={data}
          columns={columns}
          loading={loading}
        />
      </TableLayout>
    </Layout>
  );
}

export default Questions;
