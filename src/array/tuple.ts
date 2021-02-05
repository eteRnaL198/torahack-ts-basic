export default function tupleSample() {
  // 一般的なタプルの型定義
  const response: [number, string] = [200, 'OK']
  // response = [400, "Bad Request", "Email parameter is missing"] // 要素は2つまで
  // response = ["400", "Bad Request"] // 0番目はnumber
  console.log('Array tuple sample 1', response)

  // 可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko']
  girlfriends.push('Misa')
  console.log('Array tuple sample 2', girlfriends)

  //イミュータブルな配列
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  // commands.push("git fetch") // readonlyだからpush不可
  // commands[2] = "git pull" // readonlyだから書き換え不可
  console.log('Array tuple sample 3', commands)
}
