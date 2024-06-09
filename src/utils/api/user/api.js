import axiosWithConfig from "../axiosWithConfig";

export const getTotaUser = async () => {
  try {
    const response = await axiosWithConfig.get("/users");
    const { total_data } = response.data.pagination;
    return total_data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return 0;
  }
};

export const getUsers = async (pageIndex, pageSize, name) => {
  try {
    if (name) {
      const response = await axiosWithConfig.get(`/users?name=${name}`);
      return response.data;
    } else {
      const response = await axiosWithConfig.get(
        `/users?page=${pageIndex}&page_size=${pageSize}`
      );
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getDetailUser = async (id) => {
  try {
    const response = await axiosWithConfig.get(`/users/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const editUser = async (id, { ...data }) => {
  try {
    await axiosWithConfig.put(
      `/users/${id}`,
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
    await axiosWithConfig.delete(`/users/${id}`);
    return "Berhasil menghapus data user";
  } catch (error) {
    console.error(error);
    throw error;
  }
};
