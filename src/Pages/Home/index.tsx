import { useState } from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import TestComponent from "../../components/TestComponent/TestComponent";
// import Head from "../../components/Head";

export default function Home() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Head /> */}
      <TestComponent children={<p>{t("test")} component children</p>} />
      <div className="card">
        <button onClick={() => setCount((current) => current + 1)}>count is {count}</button>
      </div>
    </>
  );
}
