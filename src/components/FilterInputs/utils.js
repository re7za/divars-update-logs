export const modifyFiltersInUrl = (filters) => {
  const urlParams = new URLSearchParams(window.location.search);

  const existingTypes = [];
  for (const param of urlParams.entries()) {
    if (param[0] === "page") continue;
    existingTypes.push(param[0]);
  }
  existingTypes.forEach((param) => urlParams.delete(param));

  filters.forEach((filter) => urlParams.set(filter.type, filter.value));

  window.history.replaceState(
    null,
    null,
    window.location.pathname + "?" + urlParams.toString()
  );
};

export const getUrlFilterParams = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const existingTypes = [];
  for (const param of urlParams.entries()) {
    if (param[0] === "page") continue;
    existingTypes.push({ type: param[0], value: param[1] });
  }

  return existingTypes;
};
