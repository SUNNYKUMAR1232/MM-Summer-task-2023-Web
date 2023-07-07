import React from "react";

import Card from "../card/Card";


const CardList = ({currentItems}) => {
            return (
              <>
                {currentItems &&
                  currentItems.map((item) => (
                    <Card key={item.id} title={item} />
                  ))}
              </>
            );
            }
export default CardList;