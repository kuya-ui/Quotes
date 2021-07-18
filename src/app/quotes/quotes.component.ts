import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] =[
    new Quotes(1,'Success is most often achieved by those who dont know that failure is unevitable.' 'Coco Chanel', new Date(2021,2,3)),
    new Quotes(2,'Have the courage to follow your heart and intution, There somehow know what you truly want to become.' 'Steve Jobs', new Date(2021,18,7)),
    new Quotes(3,'Dont feel stupid if you dont like what everyone else pretends to love' 'Emma Watson', new Date(2021,6,29))
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
