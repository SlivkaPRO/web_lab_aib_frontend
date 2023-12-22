import React from "react";

const About = () => {
  const openVKPage = () => {
    window.open("https://vk.com/id275376045", "_blank");
  };

  return (
    <div>
      <h2>О нас</h2>
      <p>Страница, предоставляющая информацию о веб-сервисе и ее создателе.</p>

      <h3>Star Wars</h3>
      <p>
        Star Wars — культовая космическая опера, созданная режиссёром Джорджем
        Лукасом. Она включает в себя несколько трилогий и множество
        дополнительных материалов.
      </p>

      <h3>Создатель</h3>
      <p>
        Веб-сервис создан фанатом Star Wars. Посетите страницу
        создателя на ВК:{" "}
        <span
          style={{
            color: "purple",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={openVKPage}
        >
          Горбанев Вячеслав
        </span>
        .
      </p>
    </div>
  );
};

export default About;