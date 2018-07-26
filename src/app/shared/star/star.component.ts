import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() notify: EventEmitter<number> = new EventEmitter();


  // _rating: number;
  // get rating() {
  //   return this._rating;
  // }
  //
  // @Input('rating')
  // set rating(newNumber) {
  //   this._rating = parseInt(newNumber, 10);
  // }

  constructor() { }

  onClick() {
    this.notify.emit(this.rating);
  }


  ngOnInit() {
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }

}
