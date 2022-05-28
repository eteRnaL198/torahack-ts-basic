export default function genericsBasicSample() {
    // ジェネリック型を使わない場合
    const stringAdd = (array: string[], initialValue: string): string => {
        let result = initialValue
        for(let i=0; i < array.length; i++) {
            result += array[i]
        }
        return result
    }

    console.log("Generics basic sample 1:", stringAdd(["May ", "the ", "force ", "be ", "with ", "you"], ""))

    const numberAdd = (array: number[], initialValue: number): number => {
        let result = initialValue
        for(let i=0; i < array.length; i++) {
            result += array[i]
        }
        return result
    }

    console.log("Generics basic sample 2:", numberAdd([100, 200, 300], 0))

    type Reduce = {
        (array: string[], initialValue: string): string
        (array: number[], initialValue: number): number
    }

    // ジェネリック型を使う場合
    type GenericAdd<T> = {
        (array: T[], initialValue: T): T
    }

    const genericStringAdd: GenericAdd<string> = (array, initialValue)  => {
        let result = initialValue
        for(let i=0; i<array.length; i++) {
            result += array[i]
        }
        return result
    }
    
    console.log("Generics basic sample 3:", genericStringAdd(["MAKE ", "TYPESCRIPT ", "GREAT ", "AGAIN "], ""))

    const genericNumberAdd: GenericAdd<number> = (array, initialValue) => {
        let result = initialValue
        for(let i=0; i < array.length; i++) {
            result += array[i]
        }
        return result
    }

    console.log("Generics basic sample 4:", genericNumberAdd([100, 200, 300], 0))


    // 色々なジェネリック型の定義方法
    // 完全な呼び出しシグネチャ (個々のシグネチャにジェネリック型を割り当てる)
    type GenericAdd2 = {
        <T>(array: T[], initialValue: T[]): T
        <U>(array: U[], initialValue: U[]): U
    }

    // 呼び出しシグネチャの省略記法
    type GenericAdd3<T> = (array: T[], initialValue: T) => T
    type GenericAdd4 = <T>(array: T[], initialValue: T) => T
    
}