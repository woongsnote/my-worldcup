import { TheThirdData } from "../../data/TheThirdData";
import Title from "../Title";
import { FinalCard } from "../Card";

const TheThird = () => {
  return (
    <section>
      <Title title="3위 결정" />
      <div className="pt-4">
        {TheThirdData.map((data) => {
          return (
            <FinalCard key={data.id} result={data.result} time={data.time} />
          );
        })}
      </div>
    </section>
  );
};

export default TheThird;
