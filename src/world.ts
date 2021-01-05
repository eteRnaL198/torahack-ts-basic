export default class World {
  message: string

  constructor(message: string) {
    this.message = message
  }

  // public  sayHello(elem: HTMLElement | null) {
  //     if(elem) {
  //         return (elem.innerText = this.message)
  //     } else {
  //         return
  //     }
  // }

  public sayHello(elem: HTMLElement | null): void {
    if (elem) {
      elem.innerText = this.message
    }
  }



  
}
