export const formatPrice = (number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(number);
};
export const formatAddress = (address) => {
	return address.split(",").join(", ");
};
