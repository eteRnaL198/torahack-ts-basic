// オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample1: User is signed in! Username is', username)
    return true
  } else {
    console.log('Function parameters sample2: User is not signed in.')
    return false
  }
}

//デフォルトパラメーターを持つ関数
export const isUserSignedIn2 = (userId: string, username = 'NO NAME'): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample3: User is signed in! Username is ', username)
    return true
  } else {
    console.log('Function parameters sample4: User is not signed in.')
    return false
  }
}

// レストパラメーターを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice
  }, 0) //prevTotalの初期値を0にする
}
