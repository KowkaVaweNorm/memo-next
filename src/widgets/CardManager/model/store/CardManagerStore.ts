import { CardSchema } from '@/entities/Card';
import { makeAutoObservable } from 'mobx';


class CardManagerStoreClass {
  private list: CardSchema[] | null;
  public isLoading: boolean;
  private currentCardIndex: number;

  constructor(currentCardIndex: number = 0) {
    this.list = null;
    this.isLoading = false;
    this.currentCardIndex = currentCardIndex;
    makeAutoObservable(this);
  }
  setList(cardList: CardSchema[] | null) {
    this.list = cardList;
  }

  getListLength(){
    return this.list ? this.list.length : 0 ;
  }

  getCard() {
    if (this.list) {
      return this.list[this.currentCardIndex ?? 0];
    } else {
      return null;
    }
  }

 setNextCard() {
    console.log('next card');
    ++this.currentCardIndex;
  }
  setPrevCard() {
    console.log('prev card');
  }
  finish() {
    console.log('finish card');
  }
}
export const cardManagerStore = new CardManagerStoreClass();
