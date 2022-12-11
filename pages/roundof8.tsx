import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import TCard from "../components/TCard";
import Title from "../components/Title";
import { Roundof8Data } from "../data/Roundof8Data";

const RoundOf8 = () => {
  return (
    <Layout>
      <NavBar />
      <Title title="8강" />
      <div className="grid md:grid-cols-2 gap-4 pt-4">
        {Roundof8Data.map((data) => {
          return <TCard key={data.id} result={data.result} time={data.time} />;
        })}
      </div>
    </Layout>
  );
};

export default RoundOf8;
