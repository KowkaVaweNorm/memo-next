import { action, makeAutoObservable, makeObservable, observable } from "mobx";



// makeAutoObserverable
// export class Timer {
//   secondsPassed = 0;

//   constructor(){
//     makeAutoObservable(this)
//   }

//   increaseTimer(){
//     this.secondsPassed += 1;
//   }

// }
// makeObservable
export class Timer {
  secondsPassed = 0;
  constructor() { 
    makeObservable(this, { 
      secondsPassed: true, 
      increaseTimer: true, 
    }); 
  }
  
  increaseTimer(){
    this.secondsPassed += 1;
  }

}


//
