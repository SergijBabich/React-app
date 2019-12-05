import React from 'react';
import ui from './Paginator.module.css';
import * as axios from 'axios';

import {NavLink} from 'react-router-dom';

  // єтим оборачивание селали компонетнту чистой фунцией
  // я умею чісто писать
  let Paginator = ({totalUsersCount ,pageSize, currentPage,onPageChanged  }) =>  {
    let pagesCount = Math.ceil(totalUsersCount/pageSize);

    let pages =[];
    for (let i =1; i<=pagesCount; i++) {
        pages.push(i);
    }
        return (
                  <div>
              { pages.map(el => {

                   return <span className={currentPage === el && ui.selectPage }
                                onClick ={ (e)=>  {onPageChanged(el)} } >{el}</span>
              })}
              </div>
    )
  }

export default Paginator;
