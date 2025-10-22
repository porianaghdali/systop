export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 px-[8vw]">
      <div className="col-span-1 bg-[#3B53F3] rounded-t-md py-[4vw] px-[4vw] sm:py-[5vw] sm:px-[5vw] text-white flex flex-col justify-center">
        <p
          className="font-bold text-start mb-[1.5vw] sm:mb-[2vw]"
          style={{ fontSize: "clamp(24px, 2vw, 48px)", lineHeight: "1.2" }}
        >
          مـرکز تخصصی تعمیرات سخت افـزار
        </p>

        <p
          className="font-bold text-start mb-[1.5vw] sm:mb-[2vw]"
          style={{ fontSize: "clamp(14px, 1.2vw, 20px)", lineHeight: "1.5" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربرده
        </p>

        <div className="grid gap-[1vw] sm:gap-[1.5vw] text-center text-[#364163]">
          <div
            className="w-full sm:w-fit mx-auto bg-white rounded-sm font-bold"
            style={{ padding: "0.8vw 2vw", fontSize: "clamp(12px, 1vw, 16px)" }}
          >
            درخواست مشاوره رایگان
          </div>
          <div
            className="w-full sm:w-fit mx-auto bg-white rounded-sm font-bold text-[#364163]"
            style={{ padding: "0.8vw 2vw", fontSize: "clamp(12px, 1vw, 16px)" }}
          >
            تماس مستقیم 555544354
          </div>
        </div>
      </div>

      <div
        className="col-span-1 sm:col-span-1 lg:col-span-2 rounded-t-md w-full h-full"
        style={{
          background: "linear-gradient(270.51deg, #3B53F3 0.61%, #37417E 113.14%)",
        }}
      ></div>
    </div>
  );
}
