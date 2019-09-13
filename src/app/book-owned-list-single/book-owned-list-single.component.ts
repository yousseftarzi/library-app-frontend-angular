import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../Entities/book';
import {Transaction} from '../Entities/transaction';
import {Student} from '../Entities/student';

@Component({
  selector: 'app-book-owned-list-single',
  templateUrl: './book-owned-list-single.component.html',
  styleUrls: ['./book-owned-list-single.component.scss']
})
export class BookOwnedListSingleComponent implements OnInit {

  @Input() transaction: Transaction;
/*
  transaction1: Transaction = {
    id: null,
    borrower: new Student(),
    dateOfIssue: new Date(),
    returnDate: new Date("2019-09-30"),
  }*/
  constructor() { }

  ngOnInit() {
  }

}
