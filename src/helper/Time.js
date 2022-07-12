const getTime12h = () => {
  let time = new Date();
  return time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export { getTime12h };
