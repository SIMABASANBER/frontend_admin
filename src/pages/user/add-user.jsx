import Header from "@/components/header";
import Layout from "@/components/layout";
import FundraiseForm from "./components/form";
import FormLayout from "./components/form-layout";
import FormHeader from "./components/form-header";

function AddUser() {
  return (
    <Layout>
      <Header titleHeader="User" />
      <FormLayout>
        <FormHeader title="add" />
        <FundraiseForm action="add" />
      </FormLayout>
    </Layout>
  );
}

export default AddUser;