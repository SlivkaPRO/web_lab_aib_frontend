import React, { useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [isHidden, setHidden] = useState(false);

  const toggleText = () => {
    setHidden(!isHidden);
  };

  return (
    <div className="container mt-4">
      <h2>Главная</h2>
      <p>Баллада о трех программистах.</p>
      <Link to="/about">Перейти на страницу "О нас"</Link>
      <br />
      <span
        onClick={toggleText}
        style={{
          cursor: "pointer",
          color: "gray",
          textDecoration: "underline",
        }}
      >
        Тест кнопка.
      </span>
      {isHidden && (
        <div className="mt-3 alert alert-info">
          <p>
          +200 очков Гриффиндору⚡🧙
          </p>
        </div>
      )}
    </div>
  );
};

export default Main;