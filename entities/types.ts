function uniqId() {
    return Math.random().toString(36).substr(2, 9);
}

export class Participant {
    id: string
    name = ''
    email = ''

    constructor() {
        this.id = uniqId()
    }
}
