import React, { useState, useEffect, useContext } from 'react';
/* import ReactPaginate from 'react-paginate'; */
import ReactPaginate from "react-paginate";
import "./style.css";
import { AllArticles } from '../App';


function PaginatedItems({ itemsPerPage,data,setCurrentData  }) {
  // To store Total data
  const [items, setItems] = useState([]);
  // To Store Filter data
 
  // To Store Total numbers of pages in pagination
  const [pageCount, setPageCount] = useState(0);
  // To Store Starting element index in a page
  const [itemOffset, setItemOffset] = useState(0);
  



  useEffect(() => {
    
      setItems(data);
   
  }, [data]);



  useEffect(() => {
    
    // To calculate End element index in a pages
    const endOffset = itemOffset + itemsPerPage;
     // To calculate Filter element By slicins starting index to end index(except end index)
    setCurrentData(items.slice(itemOffset, endOffset));
     // To calculate No of pages in pagination
    setPageCount(Math.ceil(items.length / itemsPerPage));

  }, [itemOffset, itemsPerPage, items,setCurrentData]);

 
  
  //Handle Click Event to Calculate Starting index by selected
  const handlePageClick = (event) => {

    const newOffset = event.selected * itemsPerPage % items.length;
  
    setItemOffset(newOffset);
  };



  return (
    <>

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