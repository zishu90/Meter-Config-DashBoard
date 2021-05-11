//app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeterConfigDetailsComponent} from './components/meter-config-details/meter-config-details.component';
import { MeterConfigSearchComponent} from './components/meter-config-search/meter-config-search.component';


const appRoutes: Routes = [
  { path: 'meter-details', component: MeterConfigDetailsComponent },
  { path: '', component: MeterConfigSearchComponent },
//   { path: 'servers', component: ServersComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }