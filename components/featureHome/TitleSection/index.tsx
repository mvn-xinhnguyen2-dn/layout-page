import React from "react";
interface TitleProps {
  title: string;
  text: string;
}
const TitleSection = ({ title, text }: TitleProps): JSX.Element => {
  return (
    <div className="title-section flex">
      <h2 className="title-h2 col-6">{title}</h2>
      <p className="title-text col-4">{text}</p>
    </div>
  );
};

export default TitleSection;
