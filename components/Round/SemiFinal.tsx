import { SemiFinalData } from "../../data/SemifinalData";
import TCard from "../TCard";
import Title from "../Title";

const SemiFinal = () => {
  return (
    <section>
      <Title title="준결승" />
      <div className="grid md:grid-cols-2 gap-4 pt-4">
        {SemiFinalData.map((data) => {
          return <TCard key={data.id} result={data.result} time={data.time} />;
        })}
      </div>
    </section>
  );
};

export default SemiFinal;
