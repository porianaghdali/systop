export default function Request() {
  return (
    <div
      className="bg-white px-8 py-14 mx-[8vw] shadow-[0px_5px_9.6px_3px_#0000000A] rounded-2xl
"
    >
      <p className="text-[#3B53F3] font-bold text-3xl w-fit mb-3 ">
        ثبت درخواست
      </p>
      <p className="text-[#808DA6] text-lg font-bold w-fit mb-6">
        برای ثبت سفارش و مشاوره با متخصصین ما می توانید فرم را تکمیل کنید
      </p>
      <div className="grid gap-7 mb-15">
        <div className="grid gap-1.5">
          <label
            htmlFor="device"
            className="text-[#808DA6] font-bold text-lg ml-auto "
          >
            دستگاه
          </label>
          <select
            style={{
              border: "solid 2px rgba(61, 75, 112, 0.2)",
            }}
            name="device"
            id="device"
            className="  p-5 text-[#3D4B70] font-bold text-lg  w-full rounded-md"
          >
            <option value="پرینتر لیزری رنگی ">پرینتر لیزری رنگی </option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="grid gap-1.5">
            <label
              htmlFor="device"
              className="text-[#808DA6] font-bold text-lg ml-auto "
            >
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              style={{
                border: "solid 2px rgba(61, 75, 112, 0.2)",
              }}
              name="device"
              id="device"
              className="  p-5 text-[#3D4B70] font-bold text-lg  w-full rounded-md"
            ></input>
          </div>
      
          <div className="grid gap-1.5">
            <label
              htmlFor="device"
              className="text-[#808DA6] font-bold text-lg ml-auto "
            >
              ایمیل
            </label>
            <input
              type="text"
              style={{
                border: "solid 2px rgba(61, 75, 112, 0.2)",
              }}
              name="device"
              id="device"
              className="  p-5 text-[#3D4B70] font-bold text-lg  w-full rounded-md"
            ></input>
          </div>
      
          <div className="grid gap-1.5">
            <label
              htmlFor="device"
              className="text-[#808DA6] font-bold text-lg ml-auto "
            >
              شماره تماس
            </label>
            <input
              type="text"
              style={{
                border: "solid 2px rgba(61, 75, 112, 0.2)",
              }}
              name="device"
              id="device"
              className="  p-5 text-[#3D4B70] font-bold text-lg  w-full rounded-md"
            ></input>
          </div>
      
        </div>
         <div className="grid gap-1.5">
          <label
            htmlFor="device"
            className="text-[#808DA6] font-bold text-lg ml-auto "
          >
            متن درخواست
          </label>
          <textarea
          
            style={{
              border: "solid 2px rgba(61, 75, 112, 0.2)",
              resize: "none",
            }}
            name="device"
            id="device"
            className="  p-5 text-[#3D4B70] font-bold text-lg  w-full rounded-md h-[186px]"
          >
          </textarea>
        </div>
      </div>
      <div>
        <button className="text-[#FFFFFF] font-bold text-2xl bg-[#3B53F3] h-12 w-[272px] rounded-lg pb-2">ثبت درخواست</button>
      </div>
    </div>
  );
}
