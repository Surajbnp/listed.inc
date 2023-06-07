import React from "react";
import styles from "../styles/login.module.css";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <p>Board.</p>
      </div>
      <div className={styles.box2}>
        <div className={styles.form}>
          <p>Sign In</p>
          <p>Sign in to your account</p>

          <div className={styles.btn}>
            <button className={styles.google}>
              {" "}
              <FcGoogle /> Sign in with Google
            </button>
            <button className={styles.apple}>
              {" "}
              <GrApple /> Sign in with Apple
            </button>
          </div>

          <div className={styles.cred}>
            <div className={styles.inp}>
              <label>Email</label>
              <input type="text" />
            </div>
            <div className={styles.inp}>
              <label>Password</label>
              <input type="password" />
            </div>

            <p>Forgot password?</p>

            <div className={styles.inp}>
                <button type="submit">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
