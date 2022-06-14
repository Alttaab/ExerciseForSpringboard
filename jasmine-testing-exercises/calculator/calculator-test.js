
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(99, 2.5, 1), ).toEqual('$8.36');
  expect(calculateMonthlyPayment(7666, 5, 26), ).toEqual('$43.95');
  expect(calculateMonthlyPayment(999999999, 7, 20), ).toEqual('$7752989.35');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment(999999999, 7, 20)).toMatch(/^\$\d+\.\d\d$/);
  expect(calculateMonthlyPayment(7376574567, 345634563456, 345634563456)).toMatch(/^\$\d+\.\d\d$/);
  expect(calculateMonthlyPayment(10, 4, 2860)).toMatch(/^\$\d+\.\d\d$/);
});
