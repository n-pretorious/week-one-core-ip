export class Quote {
  showDateCreated: boolean;
  constructor(
    public id: number,
    public detail: string,
    public upVote: number,
    public downVote: number,
    public dateCreated: Date
  ) {
    this.showDateCreated = false;
  }
}
