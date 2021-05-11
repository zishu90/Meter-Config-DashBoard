import { Component, OnInit , ViewChild ,Inject} from '@angular/core';
import { FormBuilder,FormGroup,FormArray,FormControl,Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import  *  as  vendorData  from  '../../../assets/jsonData/vendor.json';
import  *  as  regionData  from  '../../../assets/jsonData/region.json';
import  *  as  realData  from  '../../../assets/jsonData/realData.json';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditConfigurationDialogComponent } from '../shared_components/edit-configuration-dialog/edit-configuration-dialog.component';
import {dataBaseService} from "../dataServices";

@Component({
  selector: 'app-meter-config-search',
  templateUrl: './meter-config-search.component.html',
  styleUrls: ['./meter-config-search.component.css']
})
export class MeterConfigSearchComponent implements OnInit {
 
  isSubmitted = false;
  numberMeter = 10002;
  TypeValue: any = ['Type One', 'Type Two', 'Type Three', 'Type Four'];
  //vendordata;
  vendordata;
  regiondata;
  deparmentdata;
  officedata;
  manufacturedata;
  meterTypedata;
  checkboxCount =0;
  meterform: FormGroup;
  searchMeterForm : FormGroup;

  constructor(public fb: FormBuilder, private matDialog: MatDialog, public dataService:dataBaseService) { 
     /*########### Form ###########*/
    this.searchMeterForm = this.fb.group({
      Vendor: ['',  Validators.required],
      Region : ['' , Validators.required],
      Department : [ '', Validators.required],
      Office :['', Validators.required],
      typeofMeter: [ '', Validators.required],
      MFG : [ '', Validators.required],
      cellDCUMeterID :['']
    })
    this.meterform = this.fb.group({
      meterList: this.fb.array([], [Validators.required])
    })
   
   
  }



  // Choose city using select dropdown
  changeType(e) {
    if(e.target.getAttribute('formControlName') === 'Vendor'){
      // this.searchMeterForm.controls['Region'].enable();   
      console.log(this.searchMeterForm.get('Vendor').value) ;
     // this.searchMeterForm.controls['Region'].setValue(''); 
      this.regiondata = realData.real.filter(item => item.VENDOR === this.searchMeterForm.get('Vendor').value);
      this.regiondata = this.regiondata.filter((li, idx, self) => self.map(itm => itm.REGION_NAME).indexOf(li.REGION_NAME) === idx).sort((a, b) => {
        if (a.REGION_NAME < b.REGION_NAME) return -1;
        else if (a.REGION_NAME > b.REGION_NAME) return 1;
        else return 0;
      });
      this.searchMeterForm.controls['Region'].setValue(this.regiondata[0].REGION_NAME);
      
    } 
    else if(e.target.getAttribute('formControlName') === 'Region'){
      // this.searchMeterForm.controls['Department'].enable();
     // this.searchMeterForm.controls['Department'].setValue(''); 
      this.deparmentdata = realData.real.filter(item => item.VENDOR === this.searchMeterForm.get('Vendor').value && item.REGION_NAME === this.searchMeterForm.get('Region').value);
      this.deparmentdata = this.deparmentdata.filter((li, idx, self) => self.map(itm => itm.DEPARTMENT_NAME).indexOf(li.DEPARTMENT_NAME) === idx).sort((a, b) => {
        if (a.DEPARTMENT_NAME < b.DEPARTMENT_NAME) return -1;
        else if (a.DEPARTMENT_NAME > b.DEPARTMENT_NAME) return 1;
        else return 0;
      });
      this.searchMeterForm.controls['Department'].setValue(this.deparmentdata[0].DEPARTMENT_NAME);
    }
    else if(e.target.getAttribute('formControlName') === 'Department'){
      // this.searchMeterForm.controls['Office'].enable();
     // this.searchMeterForm.controls['Office'].setValue(''); 
      this.officedata = realData.real.filter(item => item.VENDOR === this.searchMeterForm.get('Vendor').value && item.REGION_NAME === this.searchMeterForm.get('Region').value && item.DEPARTMENT_NAME === this.searchMeterForm.get('Department').value);
      this.officedata = this.officedata.filter((li, idx, self) => self.map(itm => itm.OFFICE_NAME).indexOf(li.OFFICE_NAME) === idx).sort((a, b) => {
        if (a.OFFICE_NAME < b.OFFICE_NAME) return -1;
        else if (a.OFFICE_NAME > b.OFFICE_NAME) return 1;
        else return 0;
      });
      this.searchMeterForm.controls['Office'].setValue(this.officedata[0].OFFICE_NAME);

    }
    else if(e.target.getAttribute('formControlName') === 'Office'){
      // this.searchMeterForm.controls['typeofMeter'].enable();
    //  this.searchMeterForm.controls['typeofMeter'].setValue(''); 
      this.meterTypedata = realData.real.filter(item => item.VENDOR === this.searchMeterForm.get('Vendor').value && item.REGION_NAME === this.searchMeterForm.get('Region').value && item.DEPARTMENT_NAME === this.searchMeterForm.get('Department').value && item.OFFICE_NAME === this.searchMeterForm.get('Office').value );
      this.meterTypedata = this.meterTypedata.filter((li, idx, self) => self.map(itm => itm.METER_TYPE).indexOf(li.METER_TYPE) === idx).sort((a, b) => {
        if (a.METER_TYPE < b.METER_TYPE) return -1;
        else if (a.METER_TYPE > b.METER_TYPE) return 1;
        else return 0;
      });
      this.searchMeterForm.controls['typeofMeter'].setValue(this.meterTypedata[0].METER_TYPE);

    }
    else if(e.target.getAttribute('formControlName') === 'typeofMeter'){
      // this.searchMeterForm.controls['MFG'].enable();
     // this.searchMeterForm.controls['MFG'].setValue(''); 
      this.manufacturedata = realData.real.filter(item => item.VENDOR === this.searchMeterForm.get('Vendor').value && item.REGION_NAME === this.searchMeterForm.get('Region').value && item.DEPARTMENT_NAME === this.searchMeterForm.get('Department').value && item.OFFICE_NAME === this.searchMeterForm.get('Office').value  && item.METER_TYPE === this.searchMeterForm.get('typeofMeter').value);
      this.manufacturedata = this.manufacturedata.filter((li, idx, self) => self.map(itm => itm.MANUFACTURER).indexOf(li.MANUFACTURER) === idx).sort((a, b) => {
        if (a.MANUFACTURER < b.MANUFACTURER) return -1;
        else if (a.MANUFACTURER > b.MANUFACTURER) return 1;
        else return 0;
      });
      this.searchMeterForm.controls['MFG'].setValue(this.manufacturedata[0].MANUFACTURER);

    }
    else if(e.target.getAttribute('formControlName') === 'MFG'){
      this.searchMeterForm.controls['typeofMeter'].enable();
    }
   

  }

inputChanged(e){
      console.log(e.target.value);
      if(e.target.value != ''){
        this.searchMeterForm.controls['Vendor'].disable(); 
        this.searchMeterForm.controls['Region'].disable(); 
        this.searchMeterForm.controls['Department'].disable(); 
        this.searchMeterForm.controls['Office'].disable(); 
        this.searchMeterForm.controls['MFG'].disable(); 
        this.searchMeterForm.controls['typeofMeter'].disable(); 
      }
      else{

        this.searchMeterForm.controls['Vendor'].enable(); 
        this.searchMeterForm.controls['Region'].enable(); 
        this.searchMeterForm.controls['Department'].enable(); 
        this.searchMeterForm.controls['Office'].enable(); 
        this.searchMeterForm.controls['MFG'].enable(); 
        this.searchMeterForm.controls['typeofMeter'].enable(); 
      
        // if(this.searchMeterForm.get('Vendor').value != ''){
        //   this.searchMeterForm.controls['Vendor'].enable();
        //   this.searchMeterForm.controls['Region'].enable();
        // }
        // else if(this.searchMeterForm.get('Vendor').value == ''){
        //   this.searchMeterForm.controls['Vendor'].enable();
        // }
        // if(this.searchMeterForm.get('Region').value != ''){
        //   this.searchMeterForm.controls['Region'].enable();
        //   this.searchMeterForm.controls['Department'].enable();
        // }
       
        //  if(this.searchMeterForm.get('Department').value != ''){
        //   this.searchMeterForm.controls['Department'].enable();
        //   this.searchMeterForm.controls['Office'].enable();
        // }
       
        //  if(this.searchMeterForm.get('Office').value != ''){
        //   this.searchMeterForm.controls['Office'].enable();
        //   this.searchMeterForm.controls['typeofMeter'].enable();
        // }
       
        //  if(this.searchMeterForm.get('typeofMeter').value != ''){
        //   this.searchMeterForm.controls['typeofMeter'].enable();
        //   this.searchMeterForm.controls['MFG'].enable();
        // }
        // if(this.searchMeterForm.get('MFG').value != ''){
        //   this.searchMeterForm.controls['MFG'].enable();
        //   this.searchMeterForm.controls['typeofMeter'].enable();
        // }
       
       
        // this.searchMeterForm.controls['Department'].enable(); 
        // this.searchMeterForm.controls['Office'].enable(); 
        // this.searchMeterForm.controls['MFG'].enable(); 
        // this.searchMeterForm.controls['typeofMeter'].enable(); 
      }
}

  // Getter method to access formcontrols
  get typeofMeter() {
    return this.searchMeterForm.get('typeofMeter');
  }

  /*########### Template Driven Form ###########*/
  onSubmit() {
    this.isSubmitted = true;
    if (!this.searchMeterForm.valid) {
      return false;
    } else {
      console.log(JSON.stringify(this.searchMeterForm.value))
    }
  }

  ngOnInit(): void {

    this.vendordata = realData.real.filter((li, idx, self) => self.map(itm => itm.VENDOR).indexOf(li.VENDOR) === idx).sort((a, b) => {
      if (a.VENDOR < b.VENDOR) return -1;
      else if (a.VENDOR > b.VENDOR) return 1;
      else return 0;
    });

    this.regiondata = realData.real.filter(item => item.VENDOR === this.vendordata[0].VENDOR);
    this.regiondata = this.regiondata.filter((li, idx, self) => self.map(itm => itm.REGION_NAME).indexOf(li.REGION_NAME) === idx).sort((a, b) => {
      if (a.REGION_NAME < b.REGION_NAME) return -1;
      else if (a.REGION_NAME > b.REGION_NAME) return 1;
      else return 0;
    });

    this.deparmentdata = realData.real.filter(item => item.VENDOR === this.vendordata[0].VENDOR && item.REGION_NAME === this.regiondata[0].REGION_NAME);
    this.deparmentdata = this.deparmentdata.filter((li, idx, self) => self.map(itm => itm.DEPARTMENT_NAME).indexOf(li.DEPARTMENT_NAME) === idx).sort((a, b) => {
      if (a.DEPARTMENT_NAME < b.DEPARTMENT_NAME) return -1;
      else if (a.DEPARTMENT_NAME > b.DEPARTMENT_NAME) return 1;
      else return 0;
    });

    this.officedata = realData.real.filter(item => this.vendordata[0].VENDOR && item.REGION_NAME === this.regiondata[0].REGION_NAME && item.DEPARTMENT_NAME === this.deparmentdata[0].DEPARTMENT_NAME);
    this.officedata = this.officedata.filter((li, idx, self) => self.map(itm => itm.OFFICE_NAME).indexOf(li.OFFICE_NAME) === idx).sort((a, b) => {
      if (a.OFFICE_NAME < b.OFFICE_NAME) return -1;
      else if (a.OFFICE_NAME > b.OFFICE_NAME) return 1;
      else return 0;
    });

    this.meterTypedata = realData.real.filter(item => this.vendordata[0].VENDOR && item.REGION_NAME === this.regiondata[0].REGION_NAME && item.DEPARTMENT_NAME === this.deparmentdata[0].DEPARTMENT_NAME && item.OFFICE_NAME === this.officedata[0].OFFICE_NAME );
    this.meterTypedata = this.meterTypedata.filter((li, idx, self) => self.map(itm => itm.METER_TYPE).indexOf(li.METER_TYPE) === idx).sort((a, b) => {
      if (a.METER_TYPE < b.METER_TYPE) return -1;
      else if (a.METER_TYPE > b.METER_TYPE) return 1;
      else return 0;
    });

    this.manufacturedata = realData.real.filter(item => item.VENDOR === this.vendordata[0].VENDOR && item.REGION_NAME === this.regiondata[0].REGION_NAME && item.DEPARTMENT_NAME === this.deparmentdata[0].DEPARTMENT_NAME && item.OFFICE_NAME === this.officedata[0].OFFICE_NAME   && item.METER_TYPE === this.meterTypedata[0].METER_TYPE);
    this.manufacturedata = this.manufacturedata.filter((li, idx, self) => self.map(itm => itm.MANUFACTURER).indexOf(li.MANUFACTURER) === idx).sort((a, b) => {
      if (a.MANUFACTURER < b.MANUFACTURER) return -1;
      else if (a.MANUFACTURER > b.MANUFACTURER) return 1;
      else return 0;
    });
    console.log(this.regiondata[0].VENDOR);
    this.searchMeterForm.controls['Vendor'].setValue(this.vendordata[0].VENDOR);
    this.searchMeterForm.controls['Region'].setValue(this.regiondata[0].REGION_NAME);
    this.searchMeterForm.controls['Department'].setValue(this.deparmentdata[0].DEPARTMENT_NAME);
    this.searchMeterForm.controls['Office'].setValue(this.officedata[0].OFFICE_NAME);
    this.searchMeterForm.controls['typeofMeter'].setValue(this.meterTypedata[0].METER_TYPE);
    this.searchMeterForm.controls['MFG'].setValue(this.manufacturedata[0].MANUFACTURER);

  }

  eventCheck(event){
      const meterList: FormArray = this.meterform.get('meterList') as FormArray;
      if(event.target.checked){
           if(this.checkboxCount < 10){
              this.checkboxCount++;
              meterList.push(new FormControl(event.target.value));
            }else{
              event.target.checked = false;
              let obj ={
                modalname : 'errorShow'
              }
              this.matDialog.open(EditConfigurationDialogComponent, {
                width: '20%',disableClose: true, data: obj
             });
           }
        }
        else{
          this.checkboxCount--; //unchecked is the variable
          const index = meterList.controls.findIndex(x => x.value === event.target.value);
          meterList.removeAt(index);
        }
  }

  editConfig(){
      console.log( this.meterform.value);
      let obj ={
        meterValue : this.meterform.value,
        modalname : 'editconfig'
      }
      this.matDialog.open(EditConfigurationDialogComponent, {
         disableClose: true, data: obj
      });
  }

}

 