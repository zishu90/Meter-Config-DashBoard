import { Component, OnInit, Input } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-meter-operation',
  templateUrl: './meter-operation.component.html',
  styleUrls: ['./meter-operation.component.css']
})
export class MeterOperationComponent implements OnInit {
 
  show: boolean ;
  myDate = new Date();
  @Input() notifier: Subject<boolean>;
  constructor() { }

  ngOnInit(): void {
    this.notifier.subscribe(data => {
      this.show = data;
    });
  }

}
