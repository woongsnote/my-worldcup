import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import TCard from "../components/TCard";
import Title from "../components/Title";
import { Roundof16Data } from "../data/Roundof16Data";

const RoundOf16 = () => {
  return (
    <Layout>
      <NavBar />
      <Title title="16강" />
      <div className="grid md:grid-cols-2 gap-4 pt-4 xl:grid-cols-4">
        {Roundof16Data.map((data) => {
          return <TCard key={data.id} result={data.result} time={data.time} />;
        })}
      </div>
    </Layout>
  );
};

export default RoundOf16;
