"use client";
import { useState } from "react";
import styles from "./register.module.css";
import Sms from "./Sms";
import swal from "sweetalert";

const Register = ({ showloginForm }) => {
  const [isRegisterWithPass, setIsRegisterWithPass] = useState(false);
  const [isRegisterWithOtp, setIsRegisterWithOtp] = useState(false);

  // inputs
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hideOtpForm = () => setIsRegisterWithOtp(false);

  const signUp = async () => {
    // Validation

    const user = { name, phone, email, password };

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log(res);
    if (res.status === 201) {
      swal({
        title: "ثبت نام با موفقیت انجام شد",
        icon: "success",
        buttons: "ورود به پنل کاربری",
      });
    }
  };

  return (
    <>
      {!isRegisterWithOtp ? (
        <>
          <div className={styles.form}>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={styles.input}
              type="text"
              placeholder="نام"
            />
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className={styles.input}
              type="text"
              placeholder="شماره موبایل  "
            />
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={styles.input}
              type="email"
              placeholder="ایمیل (دلخواه)"
            />

            {isRegisterWithPass && (
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className={styles.input}
                type="password"
                placeholder="رمز عبور"
              />
            )}

            <p
              style={{ marginTop: "1rem" }}
              className={styles.btn}
              onClick={() => setIsRegisterWithOtp(true)}
            >
              ثبت نام با کد تایید
            </p>

            <button
              style={{ marginTop: ".7rem" }}
              onClick={() => {
                if (isRegisterWithPass) {
                  signUp();
                } else {
                  setIsRegisterWithPass(true);
                }
              }}
              className={styles.btn}
            >
              ثبت نام با رمزعبور
            </button>
            <p onClick={showloginForm} className={styles.back_to_login}>
              برگشت به ورود
            </p>
          </div>
          <p className={styles.redirect_to_home}>لغو</p>
        </>
      ) : (
        <Sms hideOtpForm={hideOtpForm} />
      )}
    </>
  );
};

export default Register;
