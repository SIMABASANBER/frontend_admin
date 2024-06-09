import Swal from "sweetalert2";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SkeletonForm from "./skeleton/skeleton-form";
import {
  questionsSchema,
  getQuestionById,
  addQuestion,
  editQuestion,
} from "@/utils/api/questions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

const QuestionForm = ({ action, id }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const form = useForm({
    resolver: zodResolver(questionsSchema),
    defaultValues: {
      title: "",
      choice_a: "",
      choice_b: "",
      choice_c: "",
      choice_d: "",
      correct_answer: "",
    },
  });

  const getDetailQuestion = async (id) => {
    setLoading(true);
    try {
      const data = await getQuestionById(id);
      const { title, choice_a, choice_b, choice_c, choice_d, correct_answer } =
        data;

      form.reset({
        title,
        choice_a,
        choice_b,
        choice_c,
        choice_d,
        correct_answer,
      });
      setLoading(false);
    } catch (error) {
      Toast.fire({ icon: "error", title: error });
      navigate("/questions");
    }
  };

  useEffect(() => {
    if (action !== "add") {
      getDetailQuestion(id);
    }
  }, []);

  const onSubmit = (data) => {
    const { title, choice_a, choice_b, choice_c, choice_d, correct_answer } =
      data;

    if (action === "add") {
      setProcessing(true);
      addQuestion({
        title,
        choice_a,
        choice_b,
        choice_c,
        choice_d,
        correct_answer,
      })
        .then((message) => {
          navigate("/questions");
          Toast.fire({ icon: "success", title: message });
        })
        .catch((message) => {
          navigate("/questions");
          Toast.fire({ icon: "error", title: message });
        })
        .finally(() => {
          setProcessing(false);
        });
    } else if (action === "edit") {
      setProcessing(true);
      const editedData = {
        title,
        choice_a,
        choice_b,
        choice_c,
        choice_d,
        correct_answer,
      };

      editQuestion(id, editedData)
        .then((message) => {
          navigate("/questions");
          Toast.fire({ icon: "success", title: message });
        })
        .catch((message) => {
          navigate("/questions");
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
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="input-questions-title">Question</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="input-questions-title"
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
              name="choice_a"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="input-question-choice_a">Choice A</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="input-questions-choice_a"
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
              name="choice_b"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="input-questions-choice_b">Choice B</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="input-questions-choice_b"
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
              name="choice_c"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="input-questions-choice-c">
                    Choice C
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="input-questions-choice_c"
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
              name="choice_d"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="input-questions-choice_d">
                    Choice D
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="input-questions-choice_d"
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
              name="correct_answer"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel htmlFor="input-correct_answer">
                    Correct Answer
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="input-correct_answer"
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
                onClick={() => navigate("/questions")}
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
export default QuestionForm;
