export default function unknownSample() {
  const maybeNumber: unknown = 10
  console.log('unknown sample 1', typeof maybeNumber, maybeNumber)

  const isFoo = maybeNumber === 'foo'
  console.log('unknown sample 2', typeof isFoo, isFoo)

  // const sum = maybeNumber + 10 amybeNumberがnumber型かわからないからエラーが出る
  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10 //このif文の中ならOK
    console.log('unknown sample 3', typeof sum, sum)
  }
}
