import React from "react";
import play from "../../_img/play.png";

const Form = (props) => {
  return (
    <form className="form">
      <input type="text" />
      <button>
        <img className="btn__img" src={play} alt="none" />
      </button>
    </form>
  );
};

export default Form;
