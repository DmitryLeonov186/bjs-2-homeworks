"USE STRICT"

function solveEquation(a, b, c) {

	let discriminant = Math.pow(b, 2) - 4 * a * c;

	if (discriminant < 0) {

		return [];
	} else if (discriminant === 0) {
		return [-b / (2 * a)];
	} else {
		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return [root1, root2];

	}

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	monthPay = percent / 100 / 12;
	creditBody = amount - contribution;
	let pay = creditBody * (monthPay + (monthPay / (((monthPay + 1) ** countMonths) - 1)))
	paySum = pay * countMonths
	paySum = Number(paySum.toFixed(2))

	return paySum;

}