export const getQuery = (state) => {
	return state.route.query.filter;
};

export const getPath = (state) => {
	return state.route.path;
};

