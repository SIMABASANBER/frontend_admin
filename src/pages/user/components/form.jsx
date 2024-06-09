import Swal from "sweetalert2";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SkeletonForm from "./skeleton/skeleton-form";
import { userSchema, editUser, getDetailUser } from "@/utils/api/user";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

const userForm = ({ action, id }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const form = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      from_school: "",
      graduation_year: "",
    },
  });

  useEffect(() => {
    setLoading(true);
    getDetailUser(id)
      .then((data) => {
        const { fullname, username, email, from_school, graduation_year } =
          data;
        form.reset({
          fullname,
          username,
          email,
          from_school,
          graduation_year,
        });
      })
      .catch((message) => {
        Toast.fire({ icon: "error", title: message });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onSubmit = (data) => {
    const { fullname, username, email, from_school, graduation_year } = data;

    const editedData = {
      fullname,
      username,
      email,
      from_school,
      graduation_year,
    };

    setProcessing(true);
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
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel htmlFor="input-user-fullname">
                      Nama lengkap
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="input-user-fullname"
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
                    <FormLabel htmlFor="input-user-fullname">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        id="input-user-fullname"
                        className="disabled:opacity-100"
                        disabled={action === "detail"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="input-user-address">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="input-user-address"
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
              name="phone_number"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="input-user-phone_number">
                    Asal Sekolah
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="input-user-address"
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
              name="gender"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="input-user-address">
                    Tahun Lulus
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="input-user-address"
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
                className="bg-white w-24 text-[#293066] border-solid border-2 border-[#293066] hover:bg-[#293066] hover:text-white"
              >
                Kembali
              </Button>
              <Button
                size="sm"
                type="submit"
                id="btn-action-positive"
                className="bg-[#293066] w-24 hover:bg-[#293066]/80"
              >
                {processing ? (
                  <Loader2 className="animate-spin w-7 h-7" />
                ) : (
                  "Edit data"
                )}
              </Button>
            </div>
          </>
        )}
      </form>
    </Form>
  );
};
export default userForm;
