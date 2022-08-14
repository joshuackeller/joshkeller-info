import EmailPasswordNode from "supertokens-node/recipe/emailpassword";
import SessionNode from "supertokens-node/recipe/session";
import { appInfo } from "./appInfo";

export const backendConfig = () => {
  return {
    framework: "express",
    supertokens: {
      // These are the connection details of the app you created on supertokens.com
      connectionURI:
        "https://eedc3161160c11ed8bab6fe54af7e45f-us-east-1.aws.supertokens.io:3573",
      apiKey: "ILozh4s1GavvzfK=Q6dBev7qghRVAr",
    },
    appInfo,
    recipeList: [EmailPasswordNode.init(), SessionNode.init()],
    isInServerlessEnv: true,
  };
};
