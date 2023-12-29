import pcitrue from "./assets/picture.jpg";
import { FaLocationDot } from "react-icons/fa6";
import './index.css'
const Card = () => {
  return (
    <div style={{fontFamily:'userinfo'}} className="w-[80%] mt-10 bg-[#eee] font-main outline-1">
      <div className="flex p-3 py-5">
        <span className="w-1/2">suraTi</span>
        <img src={pcitrue} className="h-[150px]" />
      </div>
      <div className="flex p-3 py-5">
        <span className="w-1/2">gvari</span>
        <span className="">buskivaZe</span>
      </div>
      <div className="flex p-3 py-5">
        <span className="w-1/2">saxeli</span>
        <span className="">daTo</span>
      </div>
      <div className="flex p-3 py-5">
        <span className="w-1/2">dab.TariRi</span>
        <span className="">10.03.2005</span>
      </div>
      <div className="flex p-3 py-5">
        <span className="w-1/2">olqi/ubani</span>
        <span className="border-solid border-2 border-black p-3 text-green-500 flex gap-2"> <FaLocationDot/> 07.13</span>
      </div>
      <div className="flex p-3 py-5">
        <span className="w-1/2">misamarti</span>
        <span className="">oCamCire sof.kaCara</span>
      </div>
      <div className="flex p-3 py-5">
        <span className="w-1/2">faqt.sacxovrebeli</span>
        <span className="">Tbilisi isani</span>
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
