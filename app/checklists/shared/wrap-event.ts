export class WrapEvent {
    wrapIndex: number = 0;
    text: string = '';

    constructor(index?, text?) {
        if (index) {
            this.wrapIndex = index;
        }
        if (text) {
            this.text = text;
        }
    }
}