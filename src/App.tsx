import Input from "./components/Input";
import TipButton from "./components/TipButton";
import TipCard from "./components/TipCard";

export default function App() {
  return (
    <>
      <img className="mx-auto my-12" src="/images/logo.svg" alt="splitter" />
      <section className="tablet:w-18/20 desktop:p-[2rem] desktop:w-fit desktop:grid desktop:grid-cols-2 desktop:gap-[4rem] tablet:mx-auto tablet:rounded-[1.5rem] tablet:p-[3rem_5rem] h-fit rounded-[1.5rem_1.5rem_0_0] bg-white p-[2rem_1.5rem]">
        <div>
          <Input inputType={"bill"} />
          <div className="my-[2rem]">
            <h3 className="textPreset5 mb-[.5rem] text-gray-500">
              Select Tip %
            </h3>
            <div className="grid grid-cols-2 gap-[1rem]">
              <TipButton>5%</TipButton>
              <TipButton>10%</TipButton>
              <TipButton>15%</TipButton>
              <TipButton>25%</TipButton>
              <TipButton>50%</TipButton>
              <TipButton>Custom</TipButton>
            </div>
          </div>
          <Input inputType={"person"} />
        </div>
        <TipCard amount={0} total={0} />
      </section>
    </>
  );
}
