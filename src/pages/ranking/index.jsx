import Header from "@/components/header";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import { getRanking } from "@/utils/api/ranking";
import TableData from "./components/ranking-table";
import { columns } from "./components/ranking-colomns";
import TableHeader from "@/components/table/table-header";
import TableLayout from "@/components/table/table-layout";

function Ranking() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRanking()
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch(() => {
        setData([]);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <Header titleHeader="User" />
      <TableLayout>
        <TableHeader heading="List Ranking" hasAction={true}>
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

export default Ranking;
