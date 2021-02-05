export default function typeAliasSample() {
  // 型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object alias sample 1', japan)

  const america: Country = {
    capital: 'Washington D.C.',
    language: 'English',
    name: 'United States of America',
  }

  console.log('object alias sample 2', america)

  // 合併型(union) と 交差型(intersection)
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型 (Knight または Wizard どちらかの型を持つ)
  type Adventure = Knight | Wizard

  // 交差型 (Knight と Wizard 両方の型を持つ)
  type Paladin = Knight & Wizard

  // Knight寄りの冒険者
  const adventure1: Adventure = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連切り',
  }

  // Wizard寄りの冒険者
  const adventure2: Adventure = {
    hp: 100,
    // sp: ... と書ける 合併型だから。
    mp: 30,
    weapon: '木の枝',
    magicSkill: 'ファイアボール',
  }

  console.log('object alias sample 3', adventure1)
  console.log('object alias sample 4', adventure2)

  const paladin: Paladin = {
    hp: 300,
    sp: 100, //欠けているとエラーになる
    mp: 100,
    weapon: '銀のつるぎ',
    swordSkill: '三連切り',
    magicSkill: 'ファイアボール',
  }

  console.log('object alias sample 5', paladin)
}
