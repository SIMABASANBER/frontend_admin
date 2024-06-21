import axiosWithConfig from "../axiosWithConfig"

export const getTotalDataUser = async () => {
    try {
        const response = await axiosWithConfig.get(`/user/count`);
        console.log(response)
        return response.totalUser;
    } catch (error) {
        console.error(error)
        return 0;
    }
}

export const getTotalDataQuestions = async () => {
    try {
        const response = await axiosWithConfig.get(`/question/count`);
        return response.totalQuestions;
    } catch (error) {
        console.error(error);
        return 0;
    }
}

export const getTotalDataRanking = async () => {
    try {
        const response = await axiosWithConfig.get(`/ranking/count`);
        return response.totalRanking;
    } catch (error) {
        console.error(error);
        return 0;
    }
}