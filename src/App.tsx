/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useRef, RefObject } from "react";

import ReCAPTCHA from "react-google-recaptcha";
import logo from "./assets/logos/logo.webp";
import Card from "./Card";
import picture1 from  "./assets/picture.jpg"
import picture2 from  "./assets/picute2.jpg"
import picture3 from  "./assets/picture3.jpg"
import picture5 from './assets/picture5.jpg'
import picture6 from './assets/picture6.jpg'
import picture7 from './assets/picture7.jpg'// #51BA78
function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dummyData = [
    {
      picture :picture5,
      personalNumber: "01017051715",
      surName: "სხირტლაძე",
      name: "ალექსანდრე",
      birthDay: "31.03.2001",
      banlue: "01.09",
      address: "თბილისი ვასილ ბარნოვის I ჩიხი N 6	",
      living: "",
    },
    {
      picture :picture7,
      personalNumber: "01905047306",
      surName: "გაფრინდაშვილი",
      name: "გიორგი",
      birthDay: "27.11.2004",
      banlue: "07.10",
      address: "საქართველო, ქალაქი თბილისი, გიორგი ჩიტაიას ქუჩა, N 33(ყოფ. საბჭოს)",
      living: "",
    },
    {
      picture :picture6,
      personalNumber: "03501023168",
      surName: "მჭედლიძე",
      name: "ლუკა",
      birthDay: "18.11.2005",
      banlue: "01.09",
      address: "თბილისი ვაკე შ.ნუცუბიძის ქ. N 56 (საქშახტმშენის ს)	",
      living: "",
    },
    {
      picture :picture3,
      personalNumber: "01301121627",
      surName: "ოლქიაშვილი",
      name: "გიორგი",
      birthDay: "30.08.2005",
      banlue: "09.49",
      address: "ოჩამჩირე ს.კოჩარა",
      living: " საქართველო, ქალაქი თბილისი, ზღვისუბნის დასახლება, III მიკრო/რაიონი, I კვარტალი, კორპუსი 10, ბინა 33",
    },
    {
      picture :picture1,
      personalNumber: "62502011017",
      surName: "ბუსკივაძე",
      name: "დათო",
      birthDay: "10.03.2005",
      banlue: "05.46",
      address: "ოჩამჩირე ს.კოჩარა",
      living: " თბილისი ისანი  შ.ნადირაშვილის ქ .N   34(დირსი - კორუპუსი )  N 17",
    },
    {
      picture :picture2,
      personalNumber: "01317061282",
      surName: "იაგანაშვილი",
      name: "საბა",
      birthDay: "10.03.2005",
      banlue: "11.08.2005",
      address: "თბილისი სიმონ ჯანაშიას ქ. N 10	",
    },
    {
      picture :picture1,
      personalNumber: "01905046158",
      surName: "სხირტლაძე",
      name: "ნიკოლოზი",
      birthDay: "11.07.2004",
      banlue: "08.06",
      address: "თბილისი",
      living: " თბილისი ისანი  შ.ნადირაშვილის ქ .N   34(დირსი - კორუპუსი )  N 17",
    },
    {
      picture :picture1,
      personalNumber: "01601109807",
      surName: "ხარაიძე",
      name: "ცოტნე",
      birthDay: "13.07.2005",
      banlue: "10.50",
      address: "საქართველოს, ქალაქ თბილისის  გლდანის მასივი  3 მიკრო კორპუსი 2 ბინა 53  ",
      living: "",
    },
  ];
  const targetRef: RefObject<HTMLDivElement> = useRef(null);
  const [result, setResoult] = useState(false);
  const [data, setData] = useState({});
  const [personalNumber, setPersonalNumber] = useState<unknown>("");

  const [surName, setSurName] = useState<unknown>("");
  const handleClick = () => {
    const data = dummyData.find(
      (user) =>
        user.personalNumber === personalNumber && user.surName === surName
    );

    if (data) {
      setResoult(true)
      setData(data);
    }

    return;
  };

  return (
    <div className="flex flex-col items-center  justify-center   w-[100vw] h-[100%]">
      <div className="flex items-center justify-center flex-col gap-5 py-5  border border-gray-400 rounded-sm">
        <img src={logo} />
        <h1 className="text-[#51BA78] text-center ">
          გადაამოწმეთ პირადი მონაცემები და მისამართი ამომრჩეველთა ერთიან სიაში
        </h1>
        <p className="text-red-700 text-[11px] text-center">
          ვებგვერდი განკუთვნილია მხოლოდ ამომრჩეველთათვის — საკუთარი და ოჯახის
          წევრების მონაცემების გადასამოწმებლად!
        </p>
      </div>
      {/* second line */}
      {/* inputs */}

      <div className="w-[100%] mt-10 items-center justify-center flex py-20 border border-gray-400 rounded-sm ">
        <div className="w-[100%] items-center justify-around gap-10 flex flex-col">
          <p className="text-[11px] ">(01.11.2023 მდგომარეობით)</p>

          <input
            type="text"
            onChange={(e) => {
              setPersonalNumber(e.target.value.trim());
            }}
            placeholder="პირადი ნომერი"
            className="w-[50%] h-[3rem] max_sm8:w-[90%] outline outline-2 outline-[#51BA78] rounded-[1px] px-3"
          />

          <input
            type="text"
            onChange={(e) => setSurName(e.target.value.trim())}
            placeholder="გვარი"
            className="w-[50%] h-[3rem] max_sm8:w-[90%] outline outline-2 outline-[#51BA78] rounded-[1px]  px-3"
          />

          <ReCAPTCHA
            className="w-[50%] h-[3rem] max_sm8:w-[90%]"
            sitekey="6Lf8jD8pAAAAAM4Y91zujTDtljDpSBA3wKYBTzRN"
          />

          <button
            onClick={handleClick}
            className="w-[50%] h-[3rem] max_sm8:w-[90%]  text-white  font-bold bg-[#51BA78] rounded-[1px] hover:bg-gray-800"
          >
            ძებნა
          </button>
        </div>
      </div>

      {result && <Card info={data}/>}

      {result && (
        <div className=" my-5 flex-col gap-10">
          <button className="h-[3rem] my-5 ml-20 text-white font-bold bg-[#51BA78] rounded-[3px]">
            ამ მისამართზე
          </button>
          <h1>© საქართველოს საარჩევნო ადმინისტრაცია</h1>
        </div>
      )}
      <div ref={targetRef}></div>
    </div>
  );
}

export default App;
