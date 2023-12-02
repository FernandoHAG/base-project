import { useState } from "react";
import "./index.css";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      <p>{t("test")}</p>
    </>
  );
}
