export const replaceUrlParams = (param) => {
  const urlParams = new URLSearchParams(window.location.search);

  urlParams.set(param.queryParam, param.value);
  window.history.replaceState(
    null,
    null,
    window.location.pathname + "?" + urlParams.toString()
  );
};
