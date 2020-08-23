export class Quote {
  showDescription: boolean;
  constructor(
    public id: number,
    public detail: string,
    public author: string,
    public upVote: number,
    public downVote: number,
    public dateCreated: Date,
    public originator: string
  ) {
    this.showDescription = false;
  }
}
