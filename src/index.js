const parseCode = qrString => {
  const rest = qrString.slice(53).split(':')

  return {
    serial: qrString.slice(0, 10),
    date: parseTaiwaneseDate(qrString.slice(10, 17)),
    random: qrString.slice(17, 21),
    subTotal: parseInt(qrString.slice(21, 29), 16),
    total: parseInt(qrString.slice(29, 37), 16),
    buyer: qrString.slice(37, 45),
    seller: qrString.slice(45, 53),
    digest: rest[0],
    items: shoppingList(':x:' + qrString)
  }
}

const parseTaiwaneseDate = string => {
  const year = parseInt(string.slice(0, 3)) + 1911
  const date = year + '-' + string.slice(3, 5) + '-' + string.slice(5, 7)
  return new Date(date).toJSON()
}

const shoppingList = rest => {
  const entries = rest.match(/(:?\:[^:]*){3}/g).slice(2)
  return entries.map(x => {
    const [name, count, price] = x.split(':').slice(1)
    return {
      name: name,
      count: parseInt(count),
      price: parseInt(price)
    }
  })
}

export {parseCode}
