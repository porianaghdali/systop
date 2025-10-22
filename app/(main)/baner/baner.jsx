import Slider from "./slider/slider";  
export default function Banner() {
  return (
    <div
      className="bg-[#FFFFFF] border-y-2 mb-18 border-[#E9EBEF] pt-[4vw] pb-[3vw] px-[4vw] sm:px-[5vw] md:px-[6vw] lg:px-[8vw]"
    >
      {/* عنوان اصلی */}
      <p
        className="font-bold mb-[2vw] leading-snug"
        style={{ fontSize: "clamp(24px, 2.1vw, 36px)" }}
      >
        <span className="text-[#3B53F3]">بزرگترین </span>
        و
        <span className="text-[#3B53F3]"> تخصصی ترین </span>
        مرکز تعمیرات در ایران
      </p>

      {/* متن توضیح */}
      <p
        className="font-bold text-[#808DA6]"
        style={{ fontSize: "clamp(14px, 1.5vw, 20px)", lineHeight: "1.5" }}
      >
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
      </p>
      <div className="p-12"><Slider/></div>
      
    </div>
  );
}
