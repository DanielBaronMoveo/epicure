import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { default as x } from "../../assets/images/x.svg";
import { authActions } from "../../store/auth/auth.slice";
import { AppDispatch, RootStore } from "../../store/store";
import SignForm from "./SignForm";

interface UserModalProps {
  isUser: boolean;
  toggleUser: () => void;
}
const UserModal: React.FC<UserModalProps> = ({ isUser, toggleUser }) => {
  const user = useSelector((state: RootStore) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("user");
    toggleUser();
  };
  return (
    <>
      <div className="user-modal-overlay" onClick={toggleUser}></div>
      {!user ? (
        <SignForm toggleUser={toggleUser} />
      ) : (
        <div className="user-modal-container">
          <div className="nav-icon">
            <img src={x} alt="x" onClick={toggleUser} />
          </div>
          <div className="user-connected content flex column align-center">
            <h1>Welcome back, {user.userEmail.split("@")[0]}!</h1>
            <h3>What would you like to eat today?</h3>
            <div className="user-connected-controls">
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserModal;
