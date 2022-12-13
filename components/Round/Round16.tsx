import { Roundof16Data } from "../../data/Roundof16Data";
import TCard from "../TCard";
import Title from "../Title";

const Round16 = () => {
  return (
    <section>
      <Title title="16강" />
      <div className="grid md:grid-cols-2 gap-4 pt-4 xl:grid-cols-4">
        {Roundof16Data.map((data) => {
          return <TCard key={data.id} result={data.result} time={data.time} />;
        })}
      </div>
    </section>
  );
};

export default Round16;
