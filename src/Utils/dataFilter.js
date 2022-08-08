export const dataFilter = arrayLife => {
	return arrayLife.reduce((acc, curr) => {
		return (
			acc[curr.origin] ? ++acc[curr.origin] : (acc[curr.origin] = 1), acc
		);
	}, {});
};
