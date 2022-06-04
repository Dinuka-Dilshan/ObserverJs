export default class store {
  constructor() {
    this.subscribers = [];
  }

  subscribe(fn) {
    this.subscribers.push(fn);
  }

  unSubscribe(fn) {
    this.subscribe.pop(fn);
  }

  notify(data) {
    this.subscribers.map((fn) => fn(data));
  }
}
