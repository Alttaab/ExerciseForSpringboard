describe("Payments test (with setup and tear-down)", function() {
  beforeEach(function () {
    billAmtInput.value = 175;
    tipAmtInput.value = 32;
  });

  it('should add a new payment to allPayments on submitPaymentInfo()', function () {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('175');
    expect(allPayments['payment1'].tipAmt).toEqual('32');
    expect(allPayments['payment1'].tipPercent).toEqual(18);
  });
  
  it('should create new payment on createCurPayment()', function () {
    let expectedPayment = {
      billAmt: '175',
      tipAmt: '32',
      tipPercent: 18,
    }

    expect(createCurPayment()).toEqual(expectedPayment);
  });

  it('should payment update #paymentTable on appendPaymentTable()', function () {
    let currPayment = createCurPayment();
    allPayments['payment1'] = currPayment;
    appendPaymentTable(currPayment);

    let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
    expect(curTdList.length).toEqual(4);
    expect(curTdList[0].innerText).toEqual('$175');
    expect(curTdList[1].innerText).toEqual('$32');
    expect(curTdList[2].innerText).toEqual('18%');
    expect(curTdList[3].innerText).toEqual('X');
  });

  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};
  });
});
