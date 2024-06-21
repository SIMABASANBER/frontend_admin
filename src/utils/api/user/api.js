import axiosWithConfig from "../axiosWithConfig";

export const getUsers = async (pageIndex, pageSize) => {
  try {
    const response = await axiosWithConfig.get(
      `/user?page=${pageIndex}&page_size=${pageSize}`
    );
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axiosWithConfig.get(`/user/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addUser = async ({ ...data }) => {
  try {
    console.log({ ...data });
    await axiosWithConfig.post(
      "/user",
      { ...data },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return "Berhasil menambah user";
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const editUser = async (id, { ...data }) => {
  try {
    await axiosWithConfig.put(
      `/user/${id}`,
      {
        ...data,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return "Berhasil mengedit data user";
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    await axiosWithConfig.delete(`/user/${id}`);
    return "Berhasil menghapus data user";
  } catch (error) {
    console.error(error);
    throw error;
  }
};
