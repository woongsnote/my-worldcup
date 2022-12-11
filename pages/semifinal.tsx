import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import TCard from "../components/TCard";
import Title from "../components/Title";
import { SemiFinalData } from "../data/SemifinalData";

const SemiFinal = () => {
  return (
    <Layout>
      <NavBar />
      <Title title="준결승" />
      <div className="grid md:grid-cols-2 gap-4 pt-4">
        {SemiFinalData.map((data) => {
          return <TCard key={data.id} result={data.result} time={data.time} />;
        })}
      </div>
    </Layout>
  );
};

export default SemiFinal;
