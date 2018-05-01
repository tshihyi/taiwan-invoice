# Taiwan invoice

電子發票工具

## API

### `parseCode()`

`parseCode(
  encodeString: string
): Invoice`

解析電子發票上的QRCode字串, 將QRCode所代表的字串拆解成有意義的資料.

**Usage**

```js
parseCode('CA63388616107042714060000003e0000004100000000247894573A2IzH97mHFMn89HdKcQCQ==:**********:1:1:1:尖叫雞/隻:1:75')
```

**Output**

```json
{
  "serial": "CA63388616",
  "date": "2018-04-27T00:00:00.000Z",
  "random": 1406,
  "subTotal": 62,
  "total": 65,
  "buyer": "00000000",
  "seller": "24789457",
  "digest": "3A2IzH97mHFMn89HdKcQCQ==",
  "items": [{
    "name": "尖叫雞/隻",
    "count": 1,
    "price": 75
  }]
}
```
