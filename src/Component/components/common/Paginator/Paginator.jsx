import React, {useState} from "react";
import styles from "../Paginator/Paginator.module.css";




let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount/10)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * 10 +1
    let rightPortionPageNumber = portionNumber  * 10 + 1


    return <div className={styles.paginator}>
        {portionNumber >1 &&
            <button onClick={() =>{setPortionNumber(portionNumber -1 )} }> Prev</button>}


        {pages
            .filter(p => p>= leftPortionPageNumber && p < rightPortionPageNumber)
            .map(p => {
            return <span className={props.currentPage === p && styles.selectedPage}
                         onClick={(e) => {
                             props.onPageChanged(p)
                         }}> {p} </span>
        })}

        {portionCount > portionNumber  &&
            <button onClick={() =>{setPortionNumber(portionNumber + 1 )} }> Next</button>}
    </div>
}
export default Paginator