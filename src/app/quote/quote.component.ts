import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Act as if what you do makes a difference. It does', 'William James', 0, 0, new Date(2019, 6, 9), 'Mbappe'),
    // tslint:disable-next-line: max-line-length
    new Quote(2, 'Success is not final, failure is not fatal: it is the courage to continue that counts', 'Winston Churchill', 3, 1, new Date(2020, 11, 28), 'Messi'),
    // tslint:disable-next-line: max-line-length
    new Quote(3, 'Never bend your head. Always hold it high. Look the world straight in the eye', 'Helen Keller', 4, 5, new Date(2020, 7, 22), 'Martineli')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }

  // tslint:disable-next-line: typedef
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
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

  // tslint:disable-next-line: typedef
  findMax() {
    return Math.max.apply(Math, this.quotes.map((quote) => quote.upVote));
  }
}
