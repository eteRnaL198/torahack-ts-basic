export default function anySample() {
  let name: any = 'Torahack' //string型を代入した
  console.log('any sample 1', typeof name, name)

  name = 28
  console.log('any sample 2', typeof name, name)
}
