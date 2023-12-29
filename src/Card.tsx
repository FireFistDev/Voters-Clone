import pcitrue from "./assets/picture.jpg";
const Card = () => {
   
  return (
    <div className="w-[90%]  bg-[#eee] my-3 mx-auto pb-5">
      <div className="flex gap-[40%] py-3">
        <span>სურათი</span>
        <img className="h-[150px]" src={pcitrue} alt="" />
      </div>

      <div className="flex gap-[45%] py-3">
        <span>გვარი</span>
        <span>ჭრელაშვილი</span>
      </div>
      <div className="flex gap-[46%] py-3">
      <span>სახელი</span>
        <span>გელა</span>
      </div >
      <div className="flex gap-[33%] py-3">
      <span>დაბ.თარიღი</span>
        <span>1998.22.19</span>
      </div >
      <div className="flex gap-[33%] py-3">
      <span>ოლქი/უბანი</span>
        <span className="border-solid border-2 border-black  p-3 text-green-500"> 07.13</span>
      </div >
      <div className="flex gap-[33%] py-3" >
      <span>მისამიართი</span>
        <span>თბილისი გაი ყანჩელის 2</span>
      </div>
      <div className="flex gap-[33%] py-3" >
      <span>ფაქტ. საცხოვრებელი</span>
      </div>
    </div>
  );
};

export default Card;
