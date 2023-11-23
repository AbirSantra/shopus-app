import React from "react";
import { useState } from "react";
import InputField from "../components/ui/inputfield";
import Logo from "../img/octopus.png";
import googleLogo from "../img/google logo.png";

const Authpage = () => {
  // to store the auth types
  const [islogin, setIslogin] = useState(true);

  // to store the input fields
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");

  // to toggle the auth state
  const toggleAuth = (e) => {
    e.preventDefault();
    setIslogin((prev) => !prev);
  };

  // to handle the input changes
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  const handleConfirm = (e) => {
    setConfirm(e.target.value);
  };

  return (
    <div className="">
      <div className="flex w-full items-center justify-center">
        {/* Left Section */}
        <div className="flex min-h-screen flex-1 flex-col justify-between px-16 py-8">
          {/* Company Logo */}
          <div className="flex w-full items-center justify-start gap-2">
            <div className="h-8 w-8">
              <img src={Logo} alt="ShopusLogo" />
            </div>
            <h1 className="text-2xl font-bold">Shopus</h1>
          </div>
          {/* Form */}
          <div className="w-full max-w-[400px] self-center">
            {/* Auth Header */}
            <h1 className="text-3xl font-bold">
              {islogin ? "Welcome back" : "Create your account"}
            </h1>
            {/* Auth Subheader */}
            <h1 className="mt-2 text-slate-400">
              {islogin
                ? "Sign in to your account below"
                : "Enter your details below"}
            </h1>
            {/* Form body */}
            <form className="mt-8 flex w-full flex-col items-center gap-4">
              <InputField
                label="Email"
                type="email"
                value={email}
                onChange={handleEmail}
              />
              <InputField
                label="Password"
                type="password"
                value={pass}
                onChange={handlePass}
              />
              {islogin ? null : (
                <InputField
                  label="Confirm Password"
                  type="password"
                  value={confirm}
                  onChange={handleConfirm}
                />
              )}
              {islogin ? (
                <button className="self-end text-sm font-semibold text-orange-600">
                  Forgot Password
                </button>
              ) : null}
              <button className=" w-full rounded-lg bg-orange-600 px-4 py-2 text-base font-semibold text-white duration-200 ease-in-out hover:bg-orange-700">
                <p>{islogin ? "Sign in" : "Create account"}</p>
              </button>
              <button className="flex w-full items-center justify-center gap-4 rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-500 outline-none duration-200 ease-in-out hover:border-orange-600">
                <img
                  src={googleLogo}
                  className="flex h-4 w-4 items-center justify-center"
                  alt="google sign in"
                />
                <p>Continue with Google</p>
              </button>

              <p className="mt-4 text-sm text-slate-400">
                {islogin ? "New here? " : "Already have an account? "}
                <button
                  className="font-semibold text-orange-600"
                  onClick={toggleAuth}
                >
                  {islogin ? "Create account" : "Sign in"}
                </button>
              </p>
            </form>
          </div>
          {/* Copyright */}
          <p className="text-xs text-slate-400">
            Shopus &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
        {/* Right Section */}
        <div className="flex min-h-screen flex-1 items-center justify-center bg-slate-100 p-16">
          <img
            src={Logo}
            alt="ShopusLogo"
            className="circle h-40 w-40 animate-bounce drop-shadow-md"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Authpage;
