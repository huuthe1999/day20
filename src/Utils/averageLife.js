export const averageLife = (arrayLife) => {
  return (
    arrayLife.reduce((acc, cur) => {
      const [start, end] = cur;
      const ave = (+end + +start) / 2;
      return acc + ave;
    }, 0) / arrayLife.length
  ).toFixed(2);
};
