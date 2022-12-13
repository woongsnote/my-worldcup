import React from "react";
import { Roundof8Data } from "../../data/Roundof8Data";
import TCard from "../TCard";
import Title from "../Title";

const Round8 = () => {
  return (
    <section>
      <Title title="8강" />
      <div className="grid md:grid-cols-2 gap-4 pt-4">
        {Roundof8Data.map((data) => {
          return <TCard key={data.id} result={data.result} time={data.time} />;
        })}
      </div>
    </section>
  );
};

export default Round8;
