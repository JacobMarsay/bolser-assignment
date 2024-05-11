import Card from "../atoms/Card";

const Cards = () => {
  // Use classNames utility to conditionally assign classes
  return (
    <div className="cards__wrapper">
      <div className="cards">
        <Card className="primary" />
        <Card className="secondary" />
        <Card className="primary" />
        <Card className="secondary" />
      </div>
    </div>
  );
};

export default Cards;
