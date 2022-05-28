export default function promiseSample() {
    const url = "https://api.github.com/users/eteRnaL198"

    type Profile = {
        login: string
        id: number
    }

    type FetchProfile = () => Promise<Profile | null>

    const fetchProfile: FetchProfile = () => {
        return new Promise((resolve, reject) => { // resolve: 正常に終了したら, reject: 失敗したら
            fetch(url)
                .then((res) => {
                    res.json()
                        .then((json: Profile) => {
                            console.log("Asynchronous Promise Sample 1:", json)
                            resolve(json) // return ではなく resolve() で返す
                        })
                        .catch((err) => {
                            console.error(err)
                            reject(null)
                        })
                })
                .catch((err) => {
                    console.error(err)
                    reject(null)
                })
            
        })
    }

    fetchProfile()
        .then((profile: Profile | null) => {
            if(profile) {
                console.log("Asynchronous Promise Sample 2:", profile)
            }
        })
        .catch(() => {

        })
}