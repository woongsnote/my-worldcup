import { Roundof32Data } from "../../data/Roundof32Data";
import LCard from "../LCard";
import Title from "../Title";

const Round32 = () => {
  return (
    <section>
      <Title title="본선" />
      <div className="grid md:grid-cols-2 gap-4 pt-4 xl:grid-cols-4">
        {Roundof32Data.map((data) => {
          return (
            <LCard key={data.name} title={data.name} result={data.result} />
          );
        })}
      </div>
    </section>
  );
};

export default Round32;
