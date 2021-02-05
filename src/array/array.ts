export default function arraySample() {
  // シンプルな配列の型定義
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  // colors.push(123) 数字は入らない 文字列のみpush可能
  console.log('Array array sample 1', colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push('eight') 文字列は入らない 数字のみpush可能
  console.log('Array array sample 2', even)

  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF')
  ids.push(456)
  // ids.push(true) booleanは入らない 文字列or数字のみpush可能
  console.log('Array array sample 3', ids)

  // 配列の型推論
  // const generateSomeArray = (): (string | number)[] => { とアノテーションしても良い
  const generateSomeArray = () => {
    const _someArray = [] // any[]
    _someArray.push(123) // number[]
    _someArray.push('ABC') // (number | string)[]
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(true)
  console.log('Array array sample 4', someArray)
}
