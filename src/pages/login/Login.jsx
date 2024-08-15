import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [soarch, setSoarch] = useState("");
  const [input, setInput] = useState("");
  const searchHand = (e) => {
    setSoarch(e.target.value);
  };
  const btr = (e) => {
    setInput(e.target.value);
  };
  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <p className="text-[28px] font-[600] text-center mb-5">Личный кабинет</p>
      <div className="w-[350px] m-auto p-4 mb-10 rounded-2xl">
        <form className="flex flex-col gap-5" action="">
          <input
            value={soarch}
            onChange={searchHand}
            navigate={() => {
              setSoarch("");
            }}
            className="w-full border pl-2 py-[7px] rounded-full shadow-sm outline-none"
            type="text"
            required
            placeholder="Email"
          />
          <input
            required
            value={input}
            onChange={btr}
            navigate={() => {
              setInput("");
            }}
            className="w-full border pl-2 py-[7px] rounded-full shadow-sm outline-none"
            type="password"
            placeholder="Password"
          />
          <button
            onClick={() => navigate(`/Admin`)}
            className="w-full border-none bg-[#ff8a1e] text-[#fff] cursor-pointr pl-2 py-[7px] rounded-full shadow-sm outline-none"
          >
            {" "}
            Сохранить
          </button>
          <button className="w-[60px]  text-[14px] text-[#0009] mb-4 rounded-full">
            Выход
          </button>
          <p className="font-[600] text-center">Мы в социальных сетях!</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
