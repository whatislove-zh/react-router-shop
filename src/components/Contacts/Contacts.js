import React from "react";
import "./Contacts.css";

const Contscts = () => {
  return (
    <section className="contacts">
      <p>
        Контактний номер:{" "}
        <a href="tel: +380996863705" target="_self">
          +380996863705
        </a>
      </p>
      <p>
        Email: <span>vladislavfrontdev@gmail.com</span>
      </p>
      <p>
        <a href="https://github.com/whatislove-zh/reactshop">
          Наш репозиторій у github
        </a>
      </p>
      <p>
        <a href="https://t.me/vladFrontEndDev">
          Натисніть щоб написати нам через Telegram
        </a>
      </p>
    </section>
  );
};

export default Contscts;
