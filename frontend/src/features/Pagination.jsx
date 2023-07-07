import React, { useState, useEffect } from 'react';
/* import ReactPaginate from 'react-paginate'; */
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import CardList from '../components/card/CardList';

import "./style.css";

const items = [...Array(32).keys()];


function PaginatedItems({ itemsPerPage  }) {


  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

 
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    

    const endOffset = itemOffset + itemsPerPage;
    
    setCurrentItems(items.slice(itemOffset, endOffset));

    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

 
  

  const handlePageClick = (event) => {

    const newOffset = event.selected * itemsPerPage % items.length;
  
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="container">
        <CardList currentItems={currentItems} />
      </div>
      <div>
        <ReactPaginate
         className="pagination"
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
           pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination" 
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}

export default PaginatedItems;