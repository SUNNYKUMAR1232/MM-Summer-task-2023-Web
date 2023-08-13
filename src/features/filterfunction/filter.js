


export const filterItem = (curcat,articleData,setItem) => {
  const newItem = articleData.filter((newVal) => {
    return newVal.categery === curcat;
  });
  setItem(newItem);
};
