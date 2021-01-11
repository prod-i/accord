import React, { useState } from 'react';
import './Paginator.css';


const Paginator = ({totalItemsCount, pageUsersSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageUsersSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return (
        <div className="paginators__selectedPage_wrapper">
            {portionNumber > 1 && 
            <button className='prev' onClick={()=>{setPortionNumber(portionNumber - 1)}}>{`<`}</button>
            }
            {pages
            .filter(pages => pages >= leftPortionPageNumber && pages <= rightPortionPageNumber)
            .map(pages => {
                return <span key={pages} className={pages === currentPage ? 'paginators__selectedPage paginators__activePage' : 'paginators__selectedPage'}
                    onClick={() => { onPageChanged(pages) }}> {pages} </span>
            })}
            {portionCount > portionNumber && 
            <button className='next' onClick={()=>{setPortionNumber(portionNumber + 1)}}>{`>`}</button>
            }
        </div>

    );
}

export default Paginator;