import axiosWithConfig from "../axiosWithConfig"

export const getTotalDataUser = async () => {
    try {
        const response = await axiosWithConfig.get(`/user/total`);
        console.log(response)
        return response.data.total_user;
    } catch (error) {
        console.error(error)
        return 0;
    }
}

export const getTotalDataQuestions = async () => {
    try {
        const response = await axiosWithConfig.get(`/question/total`);
        return response.data.total_question;
    } catch (error) {
        console.error(error);
        return 0;
    }
}

export const getTotalDataRanking = async () => {
    try {
        const response = await axiosWithConfig.get(`/rangking/total`);
        return response.data.total_rangking;
    } catch (error) {
        console.error(error);
        return 0;
    }
}