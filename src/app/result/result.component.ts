import { Component, OnInit } from '@angular/core';
import { DataSharedService } from '../data-shared.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private dataSerivce: DataSharedService) { }

  finalResult: any;
  ngOnInit() {
    this.getResult();
  }

  getResult() {
    this.dataSerivce.currentMessage.subscribe(result => {
      this.finalResult = result;
    });
  }
}
