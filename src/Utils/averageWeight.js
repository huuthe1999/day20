export const averageWeight = arrayWeight => {
	return (
		arrayWeight.reduce((acc, cur) => {
			const [start, end] = cur;
			const ave = (+end + +start) / 2;
			return acc + ave;
		}, 0) / arrayWeight.length
	).toFixed(2);
};
