import { BinarySearchTree } from "../../lib/utils/binarySearchTree/binarySearchTree";

export const filter = (data, BSTreeRef, setData, filters) => {
  let finalList = data;

  let dateFilter = filters.filter((filter) => filter.type === "date");
  if (dateFilter.length) {
    let matchedNode = BSTreeRef.current.searchData(dateFilter[0].value.trim());
    finalList = matchedNode ? matchedNode.payloads : [];
  }

  const result = finalList.filter((dataItem) => {
    let match = true;
    filters
      .filter((filter) => filter.type !== "date")
      .forEach((filter) => {
        match &= dataItem[filter.type]
          ?.toLowerCase()
          ?.includes(filter.value.toLowerCase());
      });
    return match;
  });

  setData(result);
};

export const createBinarySearchTree = (data) => {
  const BSTree = new BinarySearchTree();
  data.forEach((dataItem) => BSTree.insert(dataItem.date, { ...dataItem }));
  return BSTree;
};
