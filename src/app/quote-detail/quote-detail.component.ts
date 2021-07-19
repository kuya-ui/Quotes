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
  @Input() quote:Quote;
  @Output() isComplete:EventEmitter <boolean> = new EventEmitter();
  @Output() upVote:EventEmitter <Quotes> = new EventEmitter();
  @Output() downVote:EventEmitter <Quotes> = new EventEmitter();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  likebuttonclick(quote){
    this.downVote.emit(quote)
  }
  dislikebuttonclick(quote){
    this.downVote.emit(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
