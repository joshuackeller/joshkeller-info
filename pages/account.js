import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import GetAccount from "../src/context/queries/useGetAccount";

const Page = () => {
  const account = GetAccount();

  console.log(account);
  return (
    <EmailPassword.EmailPasswordAuth>
      <div>account page</div>
    </EmailPassword.EmailPasswordAuth>
  );
};

Page.title = "Account";

export default Page;
