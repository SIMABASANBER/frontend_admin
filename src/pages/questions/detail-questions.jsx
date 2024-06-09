import Header from "@/components/header";
import Layout from "@/components/layout";
import Questionform from "./components/form";
import FormLayout from "./components/form-layout";
import FormHeader from "./components/form-header";
import { useParams, useSearchParams } from "react-router-dom";

function DetailQuestion() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const isEdit = searchParams.get("edit");
  let action = "detail";

  if (isEdit) {
    action = "edit";
  }

  return (
    <Layout>
      <Header titleHeader="Questions" />
      <FormLayout>
        <FormHeader title={action} />
        <Questionform action={action} id={id} />
      </FormLayout>
    </Layout>
  );
}

export default DetailQuestion;