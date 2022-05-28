export default function callBackSample() {
    const url = "https://api.github.com/users/eteRnaL198"

    // コールバックで呼び出す非同期処理
    const fetchProfile = () => { // この関数は非同期処理になる
        return fetch(url)
            .then((res) => { // fetch: 非同期, then: それが終わったら
                // レスポンスのBodyをJSONで読み取った結果を返す
                res.json() // 非同期
                    .then((json) => { //それが終わったら
                        console.log("Asynchronous Callback Sample 1:", json)
                        return json
                    })
                    .catch((err) => { // then が失敗したら
                        console.error(err)
                    })
            })
            .catch((err) => { //then が失敗したら
                console.error(err)
            })
    }

    const profile = fetchProfile()
    console.log("Asynchronous Callback Sample 2:", profile) // jsonの取得を待たずに実行される
    
}