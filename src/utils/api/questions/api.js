import axiosWithConfig from "../axiosWithConfig";

export const getQuestions = async () => {
  try {
    const response = await axiosWithConfig.get(`/question/admin`);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getQuestionById = async (id) => {
  try {
    const response = await axiosWithConfig.get(`/question/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addQuestion = async ({ ...data }) => {
  try {
    await axiosWithConfig.post(
      "/question",
      { ...data },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return "Berhasil menambah question";
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const editQuestion = async (id, { ...data }) => {
  try {
    await axiosWithConfig.put(
      `/question/${id}`,
      {
        ...data,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return "Berhasil mengedit data quesion";
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteQuestion = async (id) => {
  try {
    await axiosWithConfig.delete(`/question/${id}`);
    return "Berhasil menghapus data quesion";
  } catch (error) {
    console.error(error);
    throw error;
  }
};
