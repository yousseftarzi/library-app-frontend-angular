import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-test',
  templateUrl: './image-test.component.html',
  styleUrls: ['./image-test.component.scss']
})
export class ImageTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onFileSelected(event){
    console.log(event);
  }
}
