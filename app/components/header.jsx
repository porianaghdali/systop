import { PhoneCall, UserRound } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const list = [
    { title: "صفحه اصلی", id: "home" },
    { title: "خدمات", id: "services" },
    { title: "مشاوره رایگان", id: "support" },
    { title: "آموزش", id: "education" },
    { title: "وبلاگ", id: "weblog" },
    { title: "درباره ما", id: "aboutUs" },
    { title: "تماس با ما", id: "contactUs" },
  ];

  return (
    <div className="w-full mb-[2vw]">
      {/* Top Bar */}
      <div className="px-[4vw] sm:px-[5vw] md:px-[6vw] lg:px-[8vw] py-[0.8vw] flex flex-col md:flex-row items-center justify-between gap-[1vw] md:gap-0">
        <p
          className="font-medium text-center md:text-left"
          style={{ fontSize: "clamp(12px, 1.2vw, 18px)" }}
        >
          اولین مـرکز تخصصی تعمیرات سخت افـزار ایران ...
        </p>

        <div className="flex gap-[1vw] items-center justify-center md:justify-end">
          <div className="flex gap-[0.5vw] items-center">
            <p style={{ fontSize: "clamp(12px, 1vw, 18px)" }} className="font-medium text-[#364163]">
              555544354
            </p>
            <PhoneCall
              size={20}
              className="sm:w-5 sm:h-5 md:w-6 md:h-6"
              color="#364163"
            />
          </div>
          <UserRound size={25} className="sm:w-6 sm:h-6 md:w-8 md:h-8" color="#364163" />
        </div>
      </div>

      {/* Menu + Logo */}
      <div className="bg-white border-y-2 border-[#E9EBEF] px-[4vw] sm:px-[5vw] md:px-[6vw] lg:px-[8vw] py-[0.8vw] flex flex-col md:flex-row items-center justify-between gap-[1vw] md:gap-0">
        {/* Menu */}
        <ul className="flex flex-wrap justify-center md:justify-start gap-[1vw] sm:gap-[1.5vw] md:gap-[2vw] text-center">
          {list.map((item) => (
            <li
              key={item.id}
              className="py-[0.5vw] font-bold text-[#3D4B70]"
              style={{ fontSize: "clamp(14px, 1.2vw, 20px)" }}
            >
              <Link href={`/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <p
          className="font-bold text-center text-[#434343]"
          style={{ fontSize: "clamp(20px, 2vw, 36px)", letterSpacing: "0.18em" }}
        >
          sys
          <span className="text-[#3B53F3]" style={{ letterSpacing: "0.18em" }}>
            top
          </span>
        </p>
      </div>
    </div>
  );
}
