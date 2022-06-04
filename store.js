import Subject from "./subject.js";

export default class Store {
  constructor(state) {
    this.subject = new Subject();
    this.state = state;
  }

  subscribe(fn) {
    this.subject.subscribe(fn);
  }

  unSubscribe(fn) {
    this.subject.unSubscribe(fn);
  }

  setState(state) {
    if (this.state !== state) {
      this.state = state;
      this.subject.notify(this.state);
    }
  }
  getState(){
      return this.state;
  }
}
