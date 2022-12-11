import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import TCard from "../components/TCard";
import Title from "../components/Title";
import { TheThirdData } from "../data/TheThirdData";

const TheThird = () => {
  return (
    <Layout>
      <NavBar />
      <Title title="3위 결정" />
      <div className="pt-4">
        {TheThirdData.map((data) => {
          return <TCard key={data.id} result={data.result} time={data.time} />;
        })}
      </div>
    </Layout>
  );
};

export default TheThird;
