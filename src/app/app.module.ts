import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/components/header/header.component';
import { MeterConfigDetailsComponent } from './components/meter-config-details/meter-config-details.component';
import { AppRoutingModule } from './app-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import { Mypipe } from './common/DatePipe/datepipe';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MeterConfigSearchComponent } from './components/meter-config-search/meter-config-search.component';
import { ReactiveFormsModule,  } from '@angular/forms';
import { MatTableModule } from '@angular/material/table' 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MeterInforComponent } from './components/shared_components/meter-infor/meter-infor.component';
import { MeterOperationComponent } from './components/shared_components/meter-operation/meter-operation.component';
import { EditConfigurationDialogComponent } from './components/shared_components/edit-configuration-dialog/edit-configuration-dialog.component';
import {dataBaseService} from "./components/dataServices";
import { EventLogComponent } from './components/shared_components/event-log/event-log.component';
import { PushObjectComponent } from './components/shared_components/push-object/push-object.component';
import { CommunicationsComponent } from './components/shared_components/communications/communications.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MeterConfigDetailsComponent,
    Mypipe,
    MeterConfigSearchComponent,
    MeterInforComponent,
    MeterOperationComponent,
    EditConfigurationDialogComponent,
    EventLogComponent,
    PushObjectComponent,
    CommunicationsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MatDividerModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule ,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [dataBaseService],
  bootstrap: [AppComponent],
  entryComponents: [EditConfigurationDialogComponent]
})
export class AppModule { }
