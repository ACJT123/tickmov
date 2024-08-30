import axios from "axios";

export const getData = async (url: string) => {
  try {
    const result = await axios.get(url);

    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const postData = async (url: string, data: any) => {
  try {
    const result = await axios.post(url, data);

    return result.data;
  } catch (error) {
    console.log(error);
  }
};
