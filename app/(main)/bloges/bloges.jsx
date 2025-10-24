"use client";

import Image from "next/image";
import { useState } from "react";
import Card from "./card";
export default function Bloges() {
  const list = [
    { title: "تعمیر پرینتر", id: 1 },
    { title: "تعمیر لپتاپ", id: 2 },
    { title: "تعمیر هارد", id: 3 },
    { title: "تعمیر مانیتور", id: 4 },
  ];
  const [selected, setSelected] = useState(1);

  return (
    <div className="w-full mb-30 ">
      {/* عنوان اصلی */}
      <p
        className="font-bold mb-8 leading-snug text-start px-[8vw]"
        style={{
          fontSize: "clamp(20px, 2vw, 32px)",
          lineHeight: "clamp(32px, 3vw, 48px)",
        }}
      >
        <span className="text-[#3B53F3]">بزرگترین </span>و
        <span className="text-[#3B53F3]"> تخصصی‌ترین </span>
        مرکز تعمیرات در ایران
      </p>

      <div
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.03) 100%)",
        }}
        className=" rounded-t-md px-[8vw] grid lg:grid-cols-3 gap-12 sm:gap-20 mb-12"
      >
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-wrap gap-6 sm:gap-10 md:gap-12 border-b-[3px] border-[#D9D9D9] px-4 sm:px-10">
            {list.map((item) => (
              <li
                key={item.id}
                className={`font-bold transition-all duration-200 ${
                  item.id === selected
                    ? "border-b-[3px] border-[#3B53F3] text-[#3B53F3]"
                    : "text-[#364163] border-b-[3px] border-white"
                }`}
                style={{
                  fontSize: "clamp(16px, 1.5vw, 24px)",
                  paddingBottom: item.id === selected ? "8px" : "12px",
                }}
              >
                <button
                  className="cursor-pointer"
                  onClick={() => setSelected(item.id)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
          <div className="grid  gap-8 mt-16">
            <p className="font-bold text-xl text-[#697071] text-start">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربرده
            </p>
            <p className="font-bold text-xl text-[#697071] text-start">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربرده
            </p>
            <p className="font-bold text-xl text-[#697071] text-start">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربرده
            </p>
          </div>
        </div>

        <div className="col-span-1 relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
          <Image
            src="/images/repairs/multifunction-printer.png"
            alt="printer"
            width={400}
            height={400}
            className="w-[60%] sm:w-[70%] lg:w-[90%] absolute top-0 -translate-y-1/5 h-auto object-contain"
          />
        </div>
        <div className="col-span-3  flex overflow-x-scroll  gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <button className="text-[#434343] font-bold text-2xl rounded-lg border-[3px] w-[196px] h-14 text-center">
        وبلاگ
      </button>
    </div>
  );
}
