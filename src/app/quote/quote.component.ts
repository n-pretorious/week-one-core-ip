import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'first quote', 0, 0, new Date(2019, 6, 9)),
    new Quote(2, 'second quote', 3, 1, new Date(2020, 11, 28)),
    new Quote(3, 'third quote', 2, 5, new Date(2020, 4, 17))
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  deleteQuote(index) {
    const toDelete = confirm(`Are you sure you want to delete ${index.detail}?`);

    index = this.quotes.indexOf(index);

    if (toDelete) {
      this.quotes.splice(index, 1);
    }
  }

  // tslint:disable-next-line: typedef
  upVoteQuote(index) {
    index.upVote += 1;
  }

  // tslint:disable-next-line: typedef
  downVoteQuote(index) {
    index.downVote += 1;
  }

}
