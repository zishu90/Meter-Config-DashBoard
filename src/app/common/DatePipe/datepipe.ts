import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({ name: 'mypipe' })
export class Mypipe implements PipeTransform {
  // adding a default value in case you don't want to pass the format then 'yyyy-MM-dd' will be used
  transform(date: Date , format: string = 'yyyy-MM-dd'): string {
    date = new Date(date);  // if orginal type was a string
   var dateFin =  date.toLocaleDateString() + ", " + date.toLocaleTimeString();
   return dateFin
  }
}