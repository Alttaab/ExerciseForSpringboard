describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should create a new update the table to match allServers on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();
    let testServ = document.querySelectorAll('#serverTable tbody tr td')
    expect(testServ.length).toEqual(3)
    expect(testServ[0].innerText).toEqual('Alice');
    expect(testServ[1].innerText).toEqual('$0.00');
    expect(testServ[2].innerText).toEqual('X');
  });

  afterEach(function() {
    allServers = [];
    updateServerTable()
  });
});
