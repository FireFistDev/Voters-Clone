import pcitrue from "./assets/picture.jpg";
import { FaLocationDot } from "react-icons/fa6";
import './index.css'
const Card = () => {
  return (
    <div  className="w-[80%] mt-10 bg-[#eee] font-main outline-1">
      <div className="flex p-3 py-5">
        <span className="w-1/2">სურათი</span>
        <img src={pcitrue} className="h-[150px]" />
      </div>
      <div className="flex p-3 py-5">
        <span className="w-1/2">გვარი</span>
        <span className="">ბუსკივაძე</span>
      </div>
      <div className="flex p-3 py-5">
        <span className="w-1/2">სახელი</span>
        <span className="">დათო</span>
      </div>
      <div className="flex p-3 py-5">
        <span className="w-1/2">დაბ.თარიღიaaaa</span>
        <span className="">10.03.2005</span>
      </div>
      <div className="flex p-3 py-5">
        <span className="w-1/2">ოლქი/უბანი</span>
        <span className="border-solid border-2 border-black p-3 text-green-500 flex gap-2"> <FaLocationDot/> 07.13</span>
      </div>
      <div className="flex p-3 py-5">
        <span className="w-1/2">მისამართი</span>
        <span className="">ოჩამჩირე ს. კოჩარა</span>
      </div>
      <div className="flex p-3 py-5">
        <span className="w-1/2">ფაქტ. საცხოვრებელი</span>
        <span className="">თბილისი ისანი</span>
      </div>
      {/* <div className="flex  py-3">
        <span>სურათი</span>
        <img className="h-[150px] mx-auto" src={pcitrue} alt="" />
      </div>

      <div className="flex py-3">
        <span>გვარი</span>
        <span className="mx-auto">ჭრელაშვილი</span>
      </div>
      <div className="flex py-3">
      <span>სახელი</span>
        <span className="mx-auto" >გელა</span>
      </div >
      <div className=" flex py-3">
      <span>დაბ.თარიღი</span>
        <span className="mx-auto">1998.22.19</span>
      </div >
      <div className=" flex py-3">
      <span>ოლქი/უბანი</span>
        <span className="border-solid border-2 border-black  p-3 text-green-500"> 07.13</span>
      </div >
      <div className=" flex py-3" >
      <span>მისამიართი</span>
        <span>თბილისი გაი ყანჩელის 2</span>
      </div>
      <div className="flex gap-[33%] py-3" >
      <span>ფაქტ. საცხოვრებელი</span>
      </div> */}
    </div>
  );
};

export default Card;
