import Layout from "../components/Layout";
import LCard from "../components/LCard";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import { Roundof32Data } from "../data/Roundof32Data";

const RoundOf32 = () => {
  return (
    <Layout>
      <NavBar />
      <Title title="본선" />
      <div className="grid md:grid-cols-2 gap-4 pt-4 xl:grid-cols-4">
        {Roundof32Data.map((data) => {
          return (
            <LCard key={data.name} title={data.name} result={data.result} />
          );
        })}
      </div>
    </Layout>
  );
};

export default RoundOf32;
