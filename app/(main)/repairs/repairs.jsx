import Image from "next/image";

export default function Repairs() {
  const list = [
    {
      title: "تعمیرات لپتاپ",
      id: "laptop",
      src: "/images/repairs/labtop.png",
      describtion: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      w: 132,
      h: 132,
    },
    {
      title: "تعمیرات پرینتر",
      id: "printer",
      src: "/images/repairs/printer.png",
      describtion: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      w: 107,
      h: 107,
    },
    {
      title: "تعمیرات کامپیوتر",
      id: "pc",
      src: "/images/repairs/pc.png",
      describtion: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      w: 138,
      h: 138,
    },
    {
      title: "تعمییرات انواع هارد",
      id: "hard-disk",
      src: "/images/repairs/hard-disk.png",
      describtion: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      w: 103,
      h: 103,
    },
  ];

  return (
    <div className="px-[8vw] mb-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-16">
        {list.map((item) => (
          <div
            key={item.id}
            className="bg-[#3B53F3] text-white rounded-2xl flex justify-between text-start"
          >
            <div className="p-10">
              <p
                className="font-bold mb-2"
                style={{ fontSize: "clamp(20px, 2vw, 28px)" }}
              >
                {item.title}
              </p>
              <p
                className="font-bold"
                style={{ fontSize: "clamp(12px, 1.2vw, 16px)" }}
              >
                {item.describtion}
              </p>
            </div>
            <div className="flex gap-1">
              <div className="h-full bg-[#FFFFFF0D] w-5"></div>
              <div className="h-full bg-[#FFFFFF0D] flex items-center justify-center p-6">
                <Image
                  src={item.src}
                  width={item.w}
                  height={item.h}
                  alt={item.id}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#3B53F3] rounded-2xl text-white relative">
        <div className="absolute top-[50%] left-[5%] -translate-y-1/2">
          {" "}
          <Image
            src="/images/repairs/solidPrinter.png"
            width={340}
            height={287}
            alt="printer"
            className="max-w-[340px] max-h-[287px] w-full"
          />
        </div>
        <div className="pt-10 pr-12 flex flex-col gap-5 mb-6">
          <p
            className="font-bold w-fit"
            style={{ fontSize: "clamp(28px, 3vw, 48px)" }}
          >
            تعمیرات تخصص پرینتر
          </p>
          <p
            className="font-bold w-fit"
            style={{ fontSize: "clamp(20px, 2.5vw, 36px)" }}
          >
            همراه با مشاوره تخصصی
          </p>
        </div>
        <div className="flex justify-start border-8 rounded-2xl bg-white border-[#3B53F3] p-12">
          <button
            className="border-3 border-[#000000] rounded-lg w-[284px] text-center font-bold text-black py-3"
            style={{ fontSize: "clamp(16px, 1.5vw, 24px)" }}
          >
            اطلاعات بیشتر
          </button>
        </div>
      </div>
    </div>
  );
}
