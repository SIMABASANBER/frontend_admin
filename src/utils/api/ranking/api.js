import axiosWithConfig from "../axiosWithConfig";

export const getRanking = async (pageIndex, pageSize) => {
   try {
     const response = await axiosWithConfig.get(`/ranking?page=${pageIndex}&page_size=${pageSize}`);
     return response.data;

   } catch (error) {
    console.error(error);
    throw error;  
   }
}