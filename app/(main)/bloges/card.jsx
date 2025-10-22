export default function Card() {
  return (
    <div
      className="shadow-[0px_4px_5.4px_0px_#0000002E] max-w-[350px] min-w-[300px] max-h-[249px] bg-white rounded-lg overflow-hidden w-full max-sm:mx-auto"
      style={{}}
    >
      <div
        style={{
          backgroundImage: 'url("/images/repairs/test.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-[172px] "
      ></div>
      <div className="text-xl font-bold text-[#697071] pr-4.5 pb-9 pt-4.5">
        <p className="text-start">مزایای خانه هوشمند </p>
      </div>
    </div>
  );
}
