import { useRouter } from "next/router";

const ThemeSelector = () => {
  const router = useRouter();
  const setLight = () => {
    router.reload();
    localStorage.theme = "light";
  };
  const setDark = () => {
    router.reload();
    localStorage.theme = "dark";
  };
  const setSystem = () => {
    router.reload();
    localStorage.removeItem("theme");
  };
  return (
    <div>
      <button onClick={setLight}>Light</button>
      <button onClick={setDark}>Dark</button>
      <button onClick={setSystem}>System</button>
    </div>
  );
};

export default ThemeSelector;
