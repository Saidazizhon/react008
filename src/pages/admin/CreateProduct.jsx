import React from "react";
import { useEffect } from "react";
const CreateProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" flex flex-col overflow-hidden">
      <div className=" flex flex-col gap-5">
        <div className="w-[200px] h-[200px] rounded-full flex ml-96">
          <img
            className="w-[200px] h-[200px] rounded-full object-contain"
            src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
            alt=""
          />
        </div>
        <div className="w-96 m-auto">
        <b>Телефон: +998 90 000-00-00</b>
        </div>
        <div className="w-96 ml-96">
        <b>Биография:</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis velit saepe cumque nihil sit ducimus nobis autem, iste soluta, odio neque possimus eum molestias fugiat vel nisi impedit? Atque, ut.</p>
        </div>
        <div className="flex justify-between mt-10 m-24">
          <div className="">
            <p className="text-[15px] font-[600]">Имя:</p>
            <div className="border w-[150px] pl-1 text-[#0009]">
              {" "}
              <p>Saidazizhon.Asrarov</p>
            </div>
          </div>
          <div>
            <p className="text-[15px] font-[500]">Parol:</p>
            <input
              value={12345678}
              className="py-[4px] bg-inherit border pl-2 outline-none  "
              type="password"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
