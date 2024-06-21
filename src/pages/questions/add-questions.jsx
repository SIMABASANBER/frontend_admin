import Header from "@/components/header";
import Layout from "@/components/layout";
import QuestionForm from "./components/form";
import FormLayout from "./components/form-layout";
import FormHeader from "./components/form-header";

function AddQuestion() {
  return (
    <Layout>
      <Header titleHeader="Questions" />
      <FormLayout>
        <FormHeader title="add" />
        <QuestionForm action="add" />
      </FormLayout>
    </Layout>
  );
}

export default AddQuestion