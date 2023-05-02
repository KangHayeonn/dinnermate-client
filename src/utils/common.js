export const debounce = (callback, timeout) => {
  let timer;
  return () => {
    if (timer) timer = clearTimeout(timer);
    timer = setTimeout(callback, timeout);
  };
};
