import { Component, OnInit , ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { Subject, BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common'

@Component({
  selector: 'app-meter-config-details',
  templateUrl: './meter-config-details.component.html',
  styleUrls: ['./meter-config-details.component.css']
})
export class MeterConfigDetailsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  public show:boolean = false;
  childNotifier : Subject<boolean> = new Subject<boolean>();
  public buttonName:any = 'Show only Editable';
  constructor(private location: Location) { 
   
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }
  
  ngOnInit(): void {
    
  }

  back(): void {
    this.location.back()
  }

  toggle() {
    this.show = !this.show;
    this.childNotifier.next(this.show);
    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      {
        this.buttonName = "Show All";
        this.accordion.openAll();
      }
    else{
      this.buttonName = "Show only Editable";
      this.accordion.closeAll();

    }
  }

}
