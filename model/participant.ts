let idCounter = 0;

export class Participant {
    id: number;
    name = ''
    email = ''

    constructor() {
        this.id = ++idCounter;
    }
}
