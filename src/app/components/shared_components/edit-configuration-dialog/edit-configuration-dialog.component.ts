import { Component, Inject, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import {FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
import {dataBaseService} from "../../dataServices";
// import {MatDialogRef} from '@angular/material';
// import {MAT_DIALOG_DATA} from '@angular/material';
//import * as moment from 'moment';

@Component({
  selector: 'app-edit-configuration-dialog',
  templateUrl: './edit-configuration-dialog.component.html',
  styleUrls: ['./edit-configuration-dialog.component.css']
})
export class EditConfigurationDialogComponent implements OnInit, OnDestroy  {
 
  objectForm: FormGroup;
  description:string;
  formShowCond :boolean = true;

 
  ObjectValue: any = 
  [
    {
      objectName : 'Nominal Voltage',
      range : '5-1'
    },
    {
      objectName : 'Voltage under limit threshold',
      range : '240-133'
    },
    {
      objectName : 'Voltage under limit duration',
      range : '250-132'
    },
    {
      objectName : 'ΣLi PF under limit threshold import',
      range : '260-131'
    },
    {
      objectName : 'ΣLi PF under limit threshold export',
      range : '230-135'
    }
  ];

  meterNumber = [];
  rangeLimit = '30-60';
  editConfig : boolean = true;
  minNum = 1;
  maxNum = 5;

  constructor(private fb: FormBuilder,  public dialogRef: MatDialogRef<EditConfigurationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any , public dataServices : dataBaseService) {
      this.objectForm = fb.group({
        meterObject: ['', Validators.required],
        newValue: ['', [Validators.required, Validators.min(this.minNum), Validators.max(this.maxNum)]],
       });
    
  }

  ngOnInit(): void {
    // this.holddata = this.dataServices.getData()
    console.log(this.data); 
    if(this.data.modalname == 'editconfig'){
      this.editConfig = true;
     this.meterNumber = [...this.data.meterValue.meterList];
    }
    else{
      this.editConfig = false;
    }
    this.objectForm.controls['meterObject'].setValue(this.ObjectValue[0].objectName);
    let limit =[];
    limit = this.ObjectValue.filter(item => {
      return item.objectName === this.objectForm.get('meterObject').value
    });
   this.rangeLimit = limit[0].range;
  //  this.maxNum = limit[0].range.split("-")[0];
  //   this.minNum = limit[0].range.split("-")[1];
  //   console.log(this.minNum, this.maxNum);
  //   const newValueControl = this.objectForm.get('newValue');
  //   newValueControl.setValidators([Validators.required, Validators.min(this.minNum), Validators.max(this.maxNum)]);
  //   newValueControl.updateValueAndValidity();

  }

  changeObject(event){
    let limit =[];
    limit = this.ObjectValue.filter(item => {
      return item.objectName === this.objectForm.get('meterObject').value
    });
    this.rangeLimit = limit[0].range;
    this.objectForm.controls['newValue'].setValue('');
    this.maxNum = limit[0].range.split("-")[0];
    this.minNum = limit[0].range.split("-")[1];
    const newValueControl = this.objectForm.get('newValue');
    newValueControl.setValidators([Validators.required, Validators.min(this.minNum), Validators.max(this.maxNum)]);
    newValueControl.updateValueAndValidity();
    
  }
  
  save() {
    console.log(this.objectForm.value);
    this.objectForm.controls['meterObject'].setValue('');
    this.objectForm.controls['newValue'].setValue('');
    this.formShowCond = false;
    //this.dialogRef.close(this.form.value);
}

keyPress(event: any) {
  const pattern = /[0-9\+\-\ ]/;

  let inputChar = String.fromCharCode(event.charCode);
  if (event.keyCode != 8 && !pattern.test(inputChar)) {
    event.preventDefault();
  }
}

showForm(){
  this.formShowCond = true;
}

close() {
  this.dialogRef.close();  
}

deleteMeterNum(meternum){ 
  this.meterNumber.splice(this.meterNumber.indexOf(meternum), 1);
}

ngOnDestroy() {
  console.log('ondestroy', this.data.meterList);
}

}
