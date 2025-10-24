import Image from "next/image";

export default function Footer() {
  const list = [
    { title: "صفحه اصلی", id: 1 },
    { title: "خدمات", id: 2 },
    { title: "مشاوره رایگان", id: 3 },
    { title: "وبلاگ", id: 4 },
    { title: "درباره ما", id: 5 },
    { title: "تماس با ما", id: 6 },
  ];
  return (
    <div className="bg-[#2D356F] py-12 px-40">
      <div className="flex justify-between">
        <div className="flex items-center gap-2.5">
          <div>
            <Image
              src="/images/repairs/support.png"
              width={64}
              height={64}
              alt="support"
            />
          </div>
          <p className="text-white font-bold text-3xl">
            در هر قدم کنار شما هستیم
          </p>
        </div>
        <div className="text-white font-bold text-2xl text-end p-4 border-l-[10px] border-white">
          <p className="text-end">02188651303</p>
          <p className="text-end">info@systop.com</p>
        </div>
      </div>
      <p
        className="text-white font-bold text-6xl text-center mb-14"
        style={{ letterSpacing: "0.18em" }}
      >
        systop
      </p>
      <div className="mb-24">
        <ul className="px-[10%] flex justify-between">
          {list.map((item) => {
            return (
              <li key={item.id} className="text-white font-bold text-2xl">
                <button>{item.title}</button>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="font-bold text-2xl text-white leading-9">
        آدرس: تهران – جردن شمالی – دستگردی غربی – پلاک 297 – طبقه 4 – واحد 6 و 9
      </p>
      <p className="font-bold text-2xl text-white">        02188651303
</p>
    </div>
  );
}
