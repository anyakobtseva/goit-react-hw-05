import * as css from "./LoadMoreBth.module.css"
const LoadMoreBtn = ({ onclick }) => {
    return (
        <div className={css.btnload}>
         <button className={css.btnsubmit} type="submit" onClick={onclick}>Load more...</button>
        </div>
    )
}


export default LoadMoreBtn;