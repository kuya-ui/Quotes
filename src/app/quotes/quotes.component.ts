import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] =[
    new Quotes(1,"Success is most often achieved by those who don't know that failure is inevitable",'Coco Chanel', new Date(2021,2,3),1,1),
    new Quotes(2,"Have the courage to follow your heart and intuition, There somehow know what you truly want to become", 'Steve Jobs', new Date(2021,18,7),1,1),
    new Quotes(2,"don't feel stupid if you don't like what everyone else pretends to love", 'Emma Watson', new Date(2021,3,5),1,1)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
