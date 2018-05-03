import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoadDocumentComponent} from "./modules/document-load/load-document.component";
import {ViewDocumentComponent} from "./document-view-modules/composition-view/view-document.component";
import {PatientFindComponent} from "./modules/patient-fdms-find/patient-find.component";
import {FindDocumentComponent} from "./modules/composition-find/find-document.component";
import {PatientEprFindComponent} from "./modules/patient-epr-find/patient-epr-find.component";
import {PatientEprPatientRecordComponent} from "./epr-modules/patient-epr-record/patient-epr-patient-record.component";
import {ValidationLoadComponent} from "./modules/validation-load/validation-load.component";
import {LoginComponent} from "./modules/login/login.component";
import {AuthoriseComponent} from "./modules/authorise/authorise.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: PatientEprFindComponent },
  { path: 'open', component: LoadDocumentComponent },
  { path: 'find', component: PatientEprFindComponent },
  { path: 'epr/:docid', component: PatientEprPatientRecordComponent},
  { path: 'epr/:docid/:tabid', component: PatientEprPatientRecordComponent},
  { path: 'doc/:docid', component: ViewDocumentComponent},
  { path: 'docs/:patientId', component: FindDocumentComponent},
  { path: 'load', component: ValidationLoadComponent },
  { path: 'authorise', component: AuthoriseComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})



export class AppRoutingModule {



}
