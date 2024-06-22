import axiosWithConfig from "../axiosWithConfig";

export const getRanking = async () => {
   try {
     const response = await axiosWithConfig.get(`/rangking`);
     return response;
   } catch (error) {
    console.error(error);
    throw error;  
   }
}