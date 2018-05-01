const tape = require('tape')
require('@babel/register')()
const {parseCode} = require('../src/index')

tape('Parse code', t => {
  const qrString = 'CA63388616107042714060000003e0000004100000000247894573A2IzH97mHFMn89HdKcQCQ==:**********:1:1:1:尖叫雞/隻:1:25:尖叫雞EX/隻:1:50'
  const result = parseCode(qrString)

  actual = result.serial
  expected = 'CA63388616'
  t.is(actual, expected, 'invoice number')

  actual = result.date
  expected = '2018-04-27T00:00:00.000Z'
  t.is(actual, expected, 'shopping date')

  actual = result.random
  expected = '1406'
  t.is(actual, expected, 'random')

  actual = result.subTotal
  expected = 62
  t.is(actual, expected, 'subTotal')

  actual = result.total
  expected = 65
  t.is(actual, expected, 'total')

  actual = result.buyer
  expected = '00000000'
  t.is(actual, expected, 'buyer')

  actual = result.seller
  expected = '24789457'
  t.is(actual, expected, 'seller')

  actual = result.digest
  expected = '3A2IzH97mHFMn89HdKcQCQ=='
  t.is(actual, expected, 'digest')

  actual = result.items[0].name
  expected = '尖叫雞/隻'
  t.is(actual, expected, 'name')

  actual = result.items[0].count
  expected = 1
  t.is(actual, expected, 'count')

  actual = result.items[0].price
  expected = 25
  t.is(actual, expected, 'price')

  actual = result.items[1].name
  expected = '尖叫雞EX/隻'
  t.is(actual, expected, 'name of other items')

  t.end()
})
