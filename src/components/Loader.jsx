import * as css from "./Loader.module.css";
import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="grey"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
      visible={true}
    />
  );
};

export default Loader;
