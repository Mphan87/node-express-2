
const { timeword } = require('./timeWord');


test('should return time in words', function () {
  const res = timeword('12:40')
  expect(res).toEqual('twelve forty pm')
})

test('should return midnight', function () {
  const res = timeword('00:00')
  expect(res).toEqual('midnight')
})

test('should return noon', function () {
  const res = timeword('12:00')
  expect(res).toEqual('noon')
})

test('should return noon', function () {
  const res = timeword('13:01')
  expect(res).toEqual('one oh one pm')
})

test('should return noon', function () {
  const res = timeword('24:01')
  expect(res).toEqual('INVALID INPUT')
})

test('should return noon', function () {
  const res = timeword('23:10')
  expect(res).toEqual('eleven ten pm')
})

test('should return noon', function () {
  const res = timeword('00:10')
  expect(res).toEqual('twelve ten am')
})










