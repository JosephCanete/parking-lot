const getCurrentTime12h = () => {
  let time = new Date();
  return time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export { getCurrentTime12h };
