interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <h2 className="text-center text-3xl font-bold text-[#8A1538] pt-8">
      {title}
    </h2>
  );
};

export default Title;
