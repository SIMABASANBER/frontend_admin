import axiosWithConfig from "../axiosWithConfig";

export const getQuestions = async (pageIndex, pageSize, name) => {
  try {
      const response = await axiosWithConfig.get(
        `/quesions?page=${pageIndex}&page_size=${pageSize}`
      );
      return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getQuestionById= async (id) => {
  try {
    const response = await axiosWithConfig.get(`/quesions/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addQuestion = async ({ ...data }) => {
    try {
      await axiosWithConfig.post(
        "/questions",
        { ...data },
        {
          headers: {
            "Content-Type": "multipart/form-data",
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
      `/quesions/${id}`,
      {
        ...data,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
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
    await axiosWithConfig.delete(`/quesions/${id}`);
    return "Berhasil menghapus data quesion";
  } catch (error) {
    console.error(error);
    throw error;
  }
};
