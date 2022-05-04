import React from "react";
import Header from "../../components/Header/Header";
import { useStyles } from "./WrapperStyles";
import Footer from "../../components/Footer/Footer";
import { FooterClassProps } from "../../utils/interfaceTypes";

const Wrapper: React.FC<FooterClassProps> = ({ className }) => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};
export default Wrapper;
