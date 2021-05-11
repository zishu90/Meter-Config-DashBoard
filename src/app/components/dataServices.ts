import {Injectable} from "@angular/core";


@Injectable()
export class dataBaseService{

    serviceData: [];

    getData(){
     return this.serviceData;
    }

    setData(value){
      this.serviceData = value.meterList;
    }
}