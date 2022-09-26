const findDifference = (
  reference: number,
  target: number,
  returnThreated?: boolean
) => {
  const difference = Math.floor((reference / target) * 100);

  const threatedDifference = difference
    .toString()
    .split("")
    .join(",");

  return returnThreated ? threatedDifference : difference;
};

export default findDifference;
