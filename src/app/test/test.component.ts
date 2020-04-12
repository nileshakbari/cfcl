import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  currentdate1 = new Date();
  constructor() { }
  myMsg = 'test;'
  ngOnInit() {
  }


  previousDate() {
    console.log(this.myMsg);
    this.myMsg = 'hi';
    //this.currentDate = new Date();

    this.currentdate1.setDate(this.currentdate1.getDate() - 1);
    console.log(this.currentdate1);
  }

}
