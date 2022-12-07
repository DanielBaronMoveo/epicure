import React from "react";
import { default as x } from "../../assets/images/x.svg";

interface UserModalProps {
  isUser: boolean;
  toggleUser: () => void;
}
const UserModal: React.FC<UserModalProps> = ({ isUser, toggleUser }) => {
  return (
    <>
      <div className="user-modal-overlay" onClick={toggleUser}></div>
      <div className="user-modal-container">
        <div className="nav-icon">
          <img src={x} alt="x" onClick={toggleUser} />
        </div>
        <div className="auth-header">
          <h1>Sign in</h1>
          <h3>To continue the order, please sign in</h3>
        </div>
        <form>
          <label>
            Email address
            <input type="email" placeholder="name@gmail.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Password" />
          </label>
          <button className="login-btn">Login</button>
          <p>Forget password?</p>

          <div className="separator">
            <div className="lines"></div>
            <h1>or</h1>
            <div className="lines"></div>
          </div>
          <button className="signup-btn">Sign up</button>
        </form>
      </div>
    </>
  );
};

export default UserModal;
