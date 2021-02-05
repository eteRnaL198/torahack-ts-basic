export default function objectSample() {
  // const a: object = {
  //     name: 'Torahack',
  //     age: 28
  // }
  //a.name

  //オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
    // 型を定義
  } = {
    language: 'Japanese',
    name: 'Japan',
    // countryにこれらを代入
  }

  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'United States of America',
  }

  console.log('Object object sample 2:', country)

  // オプショナルとreadonly
  const torahack: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: 'Yamada',
    firstName: 'Tarou',
  }

  torahack.gender = 'male'
  torahack.lastName = 'Kamado'
  // torahack.firstName = 'Tanjiro' readonlyだから不可

  console.log('Object object sample 3:', torahack)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Soul',
  }

  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('Object object sample 4:', capitals)
}
