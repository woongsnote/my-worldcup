import { FinalData } from "../../data/FinalData";
import TCard from "../TCard";
import Title from "../Title";

const Final = () => {
  return (
    <section>
      <Title title="결승" />
      <div className="pt-4">
        {FinalData.map((data) => {
          return <TCard key={data.id} result={data.result} time={data.time} />;
        })}
      </div>
    </section>
  );
};

export default Final;
