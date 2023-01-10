import React from "react";
import "./_error.scss";
import { default as x } from "../../assets/images/x.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStore } from "../../store/store";
import { errorActions } from "../../store/error/error.slice";
const Error = () => {
  const errorMessage = useSelector(
    (state: RootStore) => state.error.errorMessage
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleCloseModal = () => {
    dispatch(errorActions.clearError());
  };
  return (
    <>
      <div className="error-overlay"></div>
      <div className="error-modal">
        <div className="modal-controls">
          <img src={x} alt="close" onClick={handleCloseModal} />
        </div>
        <div className="modal-content">
          <h1>
            Oops<span>!</span> Something went wrong
          </h1>
          <p>It looks like an error occured with: {errorMessage}</p>
        </div>
      </div>
    </>
  );
};

export default Error;
