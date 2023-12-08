import { ReactNode } from "react";
import { DrawModule } from "../../modules/drawModule";

const HomePage = (): ReactNode => {
  return (
    <>
      <h1>Home</h1>
      <DrawModule />
    </>
  );
};

export default HomePage;
