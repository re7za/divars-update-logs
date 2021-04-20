export const sortData = (data, setData, sortInfo) => {
  switch (sortInfo.soryBy) {
    case "name":
      sortInfo.sortOrder === "topToBottom"
        ? setData(data.sort((a, b) => (a.name > b.name ? 1 : -1)))
        : setData(data.sort((a, b) => (a.name < b.name ? 1 : -1)));

      break;

    case "date":
      sortInfo.sortOrder === "topToBottom"
        ? setData(data.sort((a, b) => (a.date < b.date ? 1 : -1)))
        : setData(data.sort((a, b) => (a.date > b.date ? 1 : -1)));
      break;

    case "title":
      sortInfo.sortOrder === "topToBottom"
        ? setData(data.sort((a, b) => (a.title > b.title ? 1 : -1)))
        : setData(data.sort((a, b) => (a.title < b.title ? 1 : -1)));
      break;

    case "field":
      sortInfo.sortOrder === "topToBottom"
        ? setData(data.sort((a, b) => (a.field > b.field ? 1 : -1)))
        : setData(data.sort((a, b) => (a.field < b.field ? 1 : -1)));
      break;

    case "old_value":
      sortInfo.sortOrder === "topToBottom"
        ? setData(data.sort((a, b) => (a.old_value > b.old_value ? 1 : -1)))
        : setData(data.sort((a, b) => (a.old_value < b.old_value ? 1 : -1)));
      break;

    case "new_value":
      sortInfo.sortOrder === "topToBottom"
        ? setData(data.sort((a, b) => (a.new_value > b.new_value ? 1 : -1)))
        : setData(data.sort((a, b) => (a.new_value < b.new_value ? 1 : -1)));
      break;

    default:
      break;
  }
};
