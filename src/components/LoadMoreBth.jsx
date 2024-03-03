import { forwardRef } from "react";
import * as css from "./LoadMoreBth.module.css";
const LoadMoreBtn = forwardRef(({ onclick }, ref) => {
  return (
    <div className={css.btnload}>
      <button
        className={css.btnsubmit}
        type="submit"
        onClick={onclick}
        ref={ref}
      >
        Load more...
      </button>
    </div>
  );
});
LoadMoreBtn.displayName = "LoadMoreBtn";

export default LoadMoreBtn;
