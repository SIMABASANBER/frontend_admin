import axiosWithConfig from "../axiosWithConfig"

export const getTotalDataUser = async () => {
    try {
        const response = await axiosWithConfig.get(`/users`);
        const {total_data} = response.data.pagination;
        return total_data;
    } catch (error) {
        console.error(error)
        return 0;
    }
}

export const getTotalDataQuestions = async () => {
    try {
        const response = await axiosWithConfig.get(`/questions`);
        const {total_data} = response.data.pagination;
        return total_data;
    } catch (error) {
        console.error(error);
        return 0;
    }
}

export const getTotalDataRanking = async () => {
    try {
        const response = await axiosWithConfig.get(`/ranking`);
        const {total_data} = response.data.pagination;
        return total_data;
    } catch (error) {
        console.error(error);
        return 0;
    }
}