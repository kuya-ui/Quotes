import { EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote:Quotes;
  @Output() isComplete = new EventEmitter<boolean>();
  // @Output() upVote:EventEmitter <Quotes> = new EventEmitter();
  // @Output() downVote:EventEmitter <Quotes> = new EventEmitter();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  likebuttonclick(){
    this.quote.upVote +=1;
  }
  dislikebuttonclick(){
    this.quote.downVote +=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
