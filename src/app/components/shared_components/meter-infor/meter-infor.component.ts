import { Component, OnInit, Input } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditConfigurationDialogComponent } from '../edit-configuration-dialog/edit-configuration-dialog.component';
import { dataBaseService} from '../../dataServices'
@Component({
  selector: 'app-meter-infor',
  templateUrl: './meter-infor.component.html',
  styleUrls: ['./meter-infor.component.css']
})
export class MeterInforComponent implements OnInit {
  show: boolean ;
  myDate = new Date();
  @Input() notifier: Subject<boolean>;
  meterform = {
    "meterList" :
    ['SXE2020807005051', 'SXE2020807005052', 'SXE2020807005053']
  }
  constructor( private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.notifier.subscribe(data => {
      this.show = data;
    });
  }

  editConfig () : void{
    let obj ={
      meterValue : this.meterform,
      modalname : 'editconfig'
    }
    this.matDialog.open(EditConfigurationDialogComponent, {
      disableClose: true, data: obj
    });
}

}
