import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] =[
    new Quotes(1,"Success is most often achieved by those who don't know that failure is inevitable",'Coco Chanel', "email",new Date(2021,2,3),1,1),
    new Quotes(2,"Have the courage to follow your heart and intuition, There somehow know what you truly want to become", 'Steve Jobs', "email",new Date(2021,18,7),1,1),
    new Quotes(2,"don't feel stupid if you don't like what everyone else pretends to love", 'Emma Watson', "email",new Date(2021,3,5),1,1)
  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.component)
    this.quotes.push(quote)
  }

  toggleDetail(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  upVote(index){
    index.like ++;
  }
  downVote(index){
    index.dislike ++;
  }
  deleteQuote(isComplete, index) {
    if (isComplete){
      let toDelete = confirm('Are you sure you want to delete ${this.quote[index].name}?')
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
