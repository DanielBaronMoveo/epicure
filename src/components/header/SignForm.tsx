import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { default as x } from "../../assets/images/x.svg";
// import { authActions } from "../../store/auth/auth.slice";
import { login, signup } from "../../store/auth/auth.actions";
import { AppDispatch } from "../../store/store";

interface SignFormProps {
  toggleUser: () => void;
}

const SignForm = ({ toggleUser }: SignFormProps) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const handleSignToggle = () => {
    setIsSignUp((prev) => !prev);
  };

  console.log(password, "password");
  console.log(email, "email");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSignUp) {
      await dispatch(signup({ email, password }));
    } else {
      await dispatch(login({ email, password }));
    }
    toggleUser();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <>
      {!isSignUp ? (
        <div className="user-modal-container">
          <div className="nav-icon">
            <img src={x} alt="x" onClick={toggleUser} />
          </div>
          <div className="auth-header">
            <h1>Sign in</h1>
            <h3>To continue the order, please sign in</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <label>
              Email address
              <input
                type="email"
                placeholder="Name@gmail.co.il"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </label>
            <button className="login-btn">Login</button>
            <p>Forget password?</p>

            <div className="separator">
              <div className="lines"></div>
              <h1>or</h1>
              <div className="lines"></div>
            </div>
            <button
              className="signup-btn"
              type="button"
              onClick={handleSignToggle}
            >
              Sign up
            </button>
          </form>
        </div>
      ) : (
        <div className="user-modal-container">
          <div className="nav-icon">
            <img src={x} alt="x" onClick={toggleUser} />
          </div>
          <div className="auth-header">
            <h1>Sign up</h1>
            <h3>To continue the order, please sign up</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <label>
              Email address
              <input
                type="email"
                placeholder="Name@gmail.co.il"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </label>
            <button className="login-btn">Sing up</button>
            <p>Forget password?</p>

            <div className="separator">
              <div className="lines"></div>
              <h1>or</h1>
              <div className="lines"></div>
            </div>
            <button
              className="signup-btn"
              type="button"
              onClick={handleSignToggle}
            >
              Sign in
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default SignForm;
