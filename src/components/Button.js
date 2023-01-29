import React from "react";

const Button = ({ icon, title }) => {
  return (
    <a href="/" className="box-container button">
      <i class={`${icon} icon`}></i>
      <p>{title}</p>
      <i class="fa-solid fa-chevron-right"></i>
    </a>
  );
};

export default Button;
