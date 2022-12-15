import { FinalData } from "../../data/FinalData";
import Title from "../Title";
import { FinalCard } from "../Card";

const Final = () => {
  return (
    <section>
      <Title title="결승" />
      <div className="pt-4">
        {FinalData.map((data) => {
          return (
            <FinalCard key={data.id} result={data.result} time={data.time} />
          );
        })}
      </div>
    </section>
  );
};

export default Final;
