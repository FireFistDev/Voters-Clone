import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import logo from "./assets/logos/logo.webp";
import Card from "./Card";
// #51BA78
function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dummyData = [
    { personalNumber: "62502011017", surName: "ბუსკივაძე" },
  ];
  const [result, setResoult] = useState(false);
  const [personalNumber, setPersonalNumber] = useState<unknown>("");

  const [surName, setSurName] = useState<unknown>("");
  const handleClick = () => {
    const data = dummyData.find(
      (user) =>
        user.personalNumber === personalNumber && user.surName === surName
    );
    
    if (data) {
      setResoult(true);
    }

    return
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
              setPersonalNumber(e.target.value);
            }}
            placeholder="პირადი ნომერი"
            className="w-[50%] h-[3rem] max_sm8:w-[90%] outline outline-2 outline-[#51BA78] rounded-[1px] px-3"
          />

          <input
            type="text"
            onChange={(e) => setSurName(e.target.value)}
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

      {result && <Card />}

      {result && (
        <div className=" my-5 flex-col gap-10">
 <button className="h-[3rem] my-5 ml-20 text-white font-bold bg-[#51BA78] rounded-[3px]">
    ამ მისამართზე
  </button>
          <h1>© საქართველოს საარჩევნო ადმინისტრაცია</h1>
        </div>
      )}
    </div>
  );
}

export default App;
