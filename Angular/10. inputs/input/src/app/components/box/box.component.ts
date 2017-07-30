import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  database: any [] = [];

  constructor(private _db: DatabaseService) {
    // console.log(_db);
  }

  ngOnInit() {
    this.database = this._db.data();
  }
}
