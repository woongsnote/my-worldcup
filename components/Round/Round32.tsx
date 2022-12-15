import { Roundof32Data } from "../../data/Roundof32Data";
import { LeageCard } from "../Card";
import Title from "../Title";

const Round32 = () => {
  return (
    <section>
      <Title title="본선" />
      <div className="grid md:grid-cols-2 gap-4 pt-4 xl:grid-cols-4">
        {Roundof32Data.map((data) => {
          return (
            <LeageCard key={data.name} title={data.name} result={data.result} />
          );
        })}
      </div>
    </section>
  );
};

export default Round32;
