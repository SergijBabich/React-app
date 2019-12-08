import React, {useState} from 'react';
import ui from './Paginator.module.css';
import * as axios from 'axios';

import {NavLink} from 'react-router-dom';

  // єтим оборачивание селали компонетнту чистой фунцией
  // я умею чісто писать
  let Paginator = ({totalItemsCount ,pageSize, currentPage,onPageChanged, portionSize=10  }) =>  {
    let pagesCount = Math.ceil(totalItemsCount/pageSize);

    let pages =[];
    for (let i =1; i<=pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber -1) * portionSize +1;
    let rigthPortionNumber = portionNumber  * portionSize;
        return (
                  <div>
                  {portionNumber > 1 &&
                <button onClick={ () => { setPortionNumber(portionNumber-1) }}>prev</button>}
              { pages
                .filter(p => p>=leftPortionNumber && p<= rigthPortionNumber)
                .map((p) => {

                   return <span className={currentPage === p }
                                    key ={p}
                                onClick ={ (e)=>  {onPageChanged(p)} } >{p}</span>
              })}
              {portionCount> portionNumber &&
            <button onClick = {()=> { setPortionNumber(portionNumber+ 1) }}> next </button> }
              </div>
    )
  }

export default Paginator;
