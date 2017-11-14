import { observable, computed, action } from 'mobx';

export class TimerStore {
    @observable timer = 0;

    constructor() {
        setInterval(() => {
            this.timer += 1;
        }, 1000);
    }

    @computed
    get time() {
        return this.timer;
    }

    @action
    resetTimer() {
        this.timer = 0;
    }
}