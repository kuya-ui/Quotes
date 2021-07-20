export class Quotes {
    public showDescription: boolean;
    constructor(public id: number, public tittle: string, public name: string, public description: string, public email: string, public completeDate: Date, public upVote: number, public downVote: number){
        this.showDescription=false
    }
}
