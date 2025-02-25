import Interceptor from '../Interceptor';

export const GetAllPostsService = async () => {
  try {
    const res = await Interceptor.get(
      `posts`,
    );
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
