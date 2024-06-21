import Swal from "sweetalert2";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SkeletonForm from "./skeleton/skeleton-form";
import { getUserById, editUser, addUser } from "@/utils/api/user";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const UserForm = ({ action, id }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const form = useForm({
    defaultValues: {
      fullname: "",
      username: "",
      from_school: "",
      graduation_year: "",
    },
  });

  const getDetailUser = async (id) => {
    setLoading(true);
    try {
      const data = await getUserById(id);
      const { fullname, username, from_school, graduation_year } =
        data;

      form.reset({
        fullname, username, from_school, graduation_year,
      });
      setLoading(false);
    } catch (error) {
      Toast.fire({ icon: "error", title: error });
      navigate("/user");
    }
  };

  useEffect(() => {
    if (action !== "add") {
      getDetailUser(id);
    }
  }, []);

  const onSubmit = (data) => {
    const { fullname, username, email, from_school, graduation_year } =
      data;
      console.log(fullname, username, email, from_school, graduation_year)
    if (action === "add") {
      setProcessing(true);
      addUser({
        fullname, username, from_school, graduation_year,
      })
        .then((message) => {
          navigate("/user");
          Toast.fire({ icon: "success", title: message });
        })
        .catch((message) => {
          navigate("/user");
          Toast.fire({ icon: "error", title: message });
        })
        .finally(() => {
          setProcessing(false);
        });
    } else if (action === "edit") {
      setProcessing(true);
      const editedData = {
        fullname, username, from_school, graduation_year,
      };

      editUser(id, editedData)
        .then((message) => {
          navigate("/user");
          Toast.fire({ icon: "success", title: message });
        })
        .catch((message) => {
          navigate("/user");
          Toast.fire({ icon: "error", title: message });
        })
        .finally(() => {
          setProcessing(false);
        });
    }
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  return (
    <Form {...form}>
      <form
        className="px-6 py-6 mb-6 flex flex-col gap-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {loading ? (
          <SkeletonForm />
        ) : (
          <>
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="fullname">Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="fullname"
                      className="disabled:opacity-100"
                      disabled={action === "detail"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="username"
                      className="disabled:opacity-100"
                      disabled={action === "detail"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="input-email">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="input-email"
                      className="disabled:opacity-100"
                      disabled={action === "detail"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="from_school"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="from_school">
                    Asal Sekolah
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="from_school"
                      className="disabled:opacity-100"
                      disabled={action === "detail"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="graduation_year"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="graduation_year">
                    Tahun Lulus
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="graduation_year"
                      className="disabled:opacity-100"
                      disabled={action === "detail"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-3 pt-5">
              <Button
                size="sm"
                type="reset"
                id="btn-action-negative"
                disabled={processing}
                onClick={() => navigate("/user")}
                className={`bg-white w-24 text-[#293066] border-solid border-2 border-[#293066] hover:bg-[#293066] hover:text-white ${
                  action === "detail" ? "hidden" : ""
                }`}
              >
                Kembali
              </Button>
              <Button
                size="sm"
                type="submit"
                id="btn-action-positive"
                className={`bg-[#293066] w-24 hover:bg-[#293066]/80 ${
                  action === "detail" ? "hidden" : ""
                }`}
              >
                {processing ? (
                  <Loader2 className="animate-spin w-7 h-7" />
                ) : action === "edit" ? (
                  "Edit data"
                ) : (
                  "Tambah"
                )}
              </Button>
            </div>
          </>
        )}
      </form>
    </Form>
  );
};
export default UserForm;
