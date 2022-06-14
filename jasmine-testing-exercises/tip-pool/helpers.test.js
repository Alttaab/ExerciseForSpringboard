describe("Helpers test (with setup and tear-down)", function() {

  beforeEach(function () {
    billAmtInput.value = 175;
    tipAmtInput.value = 32;
    submitPaymentInfo();
  });

  it('should sum tip amount and bill amount on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipAmt')).toEqual(32);
  });

  it('should calculate tip percent calculateTipPercent()', function () {
    expect(calculateTipPercent(2345, 23)).toEqual(1);
    expect(calculateTipPercent(54, 4)).toEqual(7);
  });


  it('should make new td using value on appendTd(tr, value)', function () {
    let appendedTr = document.createElement('tr');
    appendTd(appendedTr, 'test');
    expect(appendedTr.children.length).toEqual(1);
    expect(appendedTr.firstChild.innerHTML).toEqual('test');
  });

  it('should make delete (X) td and append to tr on appendDeleteBtn(tr, type)', function () {
    let appendedTr = document.createElement('tr');

    appendDeleteBtn(appendedTr);

    expect(appendedTr.children.length).toEqual(1);
    expect(appendedTr.firstChild.innerHTML).toEqual('X');
  });

  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
  });
});