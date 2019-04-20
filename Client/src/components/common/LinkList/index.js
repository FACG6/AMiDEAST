import React from 'react'
import './index.css';
import Link from '../Link/index';

const sidelist = [ ['Profile ' ,'fas fa-id-card' ], [' main ', 'fas fa-home' ],['About us', 'fas fa-address-card'] ,['Know more', 'fas fa-info' ]];
function LinkList(props) {
    return (     
        <div>
           <ul className='List'>   
                   <Link   List = {sidelist} />
           </ul>
    </div>
  )
}


export default LinkList;
