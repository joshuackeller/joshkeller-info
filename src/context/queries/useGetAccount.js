import useApi from "../api/useApi";

const GetAccount = async () => {
  try {
    const api = useApi();

    const response = await api.get("/api/accounts");

    return response;
  } catch (error) {
    throw Error(error);
  }
};

export default GetAccount;
