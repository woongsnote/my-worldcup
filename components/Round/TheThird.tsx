import React from "react";
import { TheThirdData } from "../../data/TheThirdData";
import TCard from "../TCard";
import Title from "../Title";

const TheThird = () => {
  return (
    <section>
      <Title title="3위 결정" />
      <div className="pt-4">
        {TheThirdData.map((data) => {
          return <TCard key={data.id} result={data.result} time={data.time} />;
        })}
      </div>
    </section>
  );
};

export default TheThird;
