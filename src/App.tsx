import React, { useState } from "react";
import Cards from "./components/Cards";
import { CardTypes, Income, Spending } from "./constants";
import CreditScore from "./components/CreditScore";
import CreditScoreCalculator from "./components/CalculateCreditScore";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [recommendedCards, setRecommendedCards] = useState<string[]>([]);

  return (
    <div className="max-width ">
      <Header />
      <div className="px-4">
        <div className="card-wrapper">
          {/* <Cards/> */}
          {CardTypes.map((card) => (
            <Cards card={card} />
          ))}
        </div>
        <p className="text-6xl text-center my-20 max-md:my-10 font-layarBahteraBold max-md:text-5xl">
          Do you know <span className="text-[#4EE567]">?</span>{" "}
        </p>
        <div className="max-md:flex-col flex justify-between items-center mt-6 max-md:text-center">
          <div className="text-xl md:w-1/2">
            <p className="mb-6 text-3xl text-center md:pl-32 font-layarBahtera leading-10">
              At{" "}
              <span className="text-[#4EE567]  font-layarBahteraBold">
                UpayChat
              </span>
              , we can recommend a suitable credit card for you by calculating
              your <span className="text-[#4EE567]">credit score</span>
            </p>
            <div className="max-md:bg-primary-blue-100 max-md:hover:bg-white max-md:hover:shadow-md max-md:rounded-3xl max-md:p-6">
              <h3 className="text-5xl font-semibold my-4 font-layarBahteraBold md:pl-32 ">
                How <span className="text-[#4EE567]">?</span>
              </h3>
              <p className="md:pl-32 leading-loose text-2xl font-layarBahteralight">
                Select your{" "}
                <span className="text-[#4EE567] font-layarBahteraBold">
                  monthly earnings
                </span>{" "}
                and{" "}
                <span className="text-[#4EE567] font-layarBahteraBold">
                  how often you spend
                </span>{" "}
                from the list of options here and you'll get a suitable
                recommendation
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center md:w-[30%] max-md:my-4 p-6 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl md:mr-32">
            <CreditScoreCalculator
              recommendedCards={recommendedCards}
              setRecommendedCards={setRecommendedCards}
            />
          </div>
        </div>
        <p className="text-center text-4xl my-8 font-layarBahtera">
          Recommended Card Options:{" "}
          <span className="text-[#4EE567] font-bold font-layarBahteraBold">
            {recommendedCards.join(" or ")}
          </span>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default App;
