export const filter = (data, setData, filters) => {
  let finalList = data; // Or filtered by date

  const result = finalList.filter((dataItem) => {
    let match = true;
    filters
      .filter((filter) => filter.type !== "date")
      .forEach((filter) => {
        match &= dataItem[filter.type]
          .toLowerCase()
          .includes(filter.text.toLowerCase());
      });
    return match;
  });

  setData(result);
};
