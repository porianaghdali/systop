"use client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

  return (
    <div className="p-6.5 grid grid-cols-2 h-screen">
      <div className="  items-center justify-center px-[8vw] ">
        
          <p className="font-bold text-[44px]  mx-auto  text-center mb-16 text-[#434343]"style={{letterSpacing:"0.18em"}}>
            sys<span className="text-[#3B53F3] " style={{letterSpacing:"0.18em"}}>top</span>{" "}
          </p>
          <div className=" mb-7 ">
            <p className=" font-medium text-[#3D4B70] text-3xl mb-3">
              ورود | ثبت نام
            </p>
            <p className="font-medium text-[#3D4B70] text-2xl">
              لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </p>
          </div>
          
          <input
            type="text"
            className=" max-w-[568px]  border-[3px] border-[#3D4B70] rounded-lg py-4 px-2 w-full mx-auto mb-10  "
          />
          <button
      onClick={() => router.push("/")}
      className="py-4 px-2 mb-4.5 cursor-pointer bg-[#3B53F3] rounded-lg text-white max-w-[568px] w-full mx-auto"
    >
      ورود
    </button>
          <p className=" font-medium text-[#5F6C8F] text-xl">
            ورود شما به معنی پذیرش قوانین است.
          </p>
        </div>
        <div className="bg-[#3B53F3D9] w-full h-full rounded-2xl">
        </div>
      
    </div>
  );
}
