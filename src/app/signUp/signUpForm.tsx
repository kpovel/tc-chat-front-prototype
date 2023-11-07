"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { signUpPostData } from "./signUpPOST";
import { validateInput } from "../../utils/inputValidations";

export interface signUpDataInterface {
  login: string;
  email: string;
  password: string;
}

export default function SignUpForm() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidateLogin, setIsValidateLogin] = useState(true);
  const [isValidatePassword, setIsValidatePassword] = useState(true);
  const [singupError, setSignupError] = useState("");

  const setLoginValidation = (e: ChangeEvent<HTMLInputElement>) => {
    const isValidLogin = validateInput(e.target.value, "login");
    setIsValidateLogin(isValidLogin);

    setLogin(e.target.value);
  };

  const setPasswordValidation = (e: ChangeEvent<HTMLInputElement>) => {
    const isValidPassword = validateInput(e.target.value, "password");
    setIsValidatePassword(isValidPassword);

    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataSubmit = {
      login,
      email,
      password,
    };

    const error = await signUpPostData(formDataSubmit, window.origin);
    setSignupError(error);
  };

  const inputLoginClassName = `form__input ${
    isValidateLogin ? "valid__input" : "invalid__value"
  }`;
  const inputPasswordClassName = `form__input ${
    isValidatePassword ? "valid__input" : "invalid__value"
  }`;

  return (
    <div className="form__wrapper signUp__form__wrapper">
      <h1>Create your account</h1>
      <form onSubmit={handleSubmit} className="signUp__form">
        <div className="form__field">
          <label htmlFor="login">Login</label>
          {!isValidateLogin && (
            <div className="error-message">
              Invalid login. Please use only letters and numbers.
            </div>
          )}
          <input
            className={inputLoginClassName}
            type="text"
            name="login"
            id="login"
            placeholder="login"
            value={login}
            onChange={(e) => setLoginValidation(e)}
            required
          />
        </div>
        <div className="form__field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form__field">
          <label htmlFor="email">Password</label>
          {!isValidatePassword && (
            <div className="error-message">Invalid password.</div>
          )}
          <input
            className={inputPasswordClassName}
            type="text"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPasswordValidation(e)}
            required
          />
        </div>
        <div className="text-red-500">{singupError}</div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
