import axios from "axios";
import Session from "supertokens-auth-react/recipe/session";

const useApi = () => {
  let api = axios.create();
  Session.addAxiosInterceptors(api);

  return api;
};

export default useApi;
