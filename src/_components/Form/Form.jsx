import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import play from "../../_img/play.png";
import { addName } from "../../_redux/trackerReducer";

const Form = (props) => {
   
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <Field
        type="text"
        placeholder="Enter name"
        component="input"
        name="name"
      />
      <button>
        <img className="btn__img" src={play} alt="none" />
      </button>
    </form>
  );
};

const ReduxForm = reduxForm({
  form: "itemName",
})(Form);

const NewForm = (props) => {
  let addNewName = (value) => {
    props.addName(value.name);
  };
  return <ReduxForm onSubmit={addNewName} />;
};

const mapStateToProps = (state) => {
  return {
    leng: state.trackerPage.itemList,
  };
};

const FormContainer = connect(mapStateToProps, { addName })(NewForm);

export default FormContainer;
