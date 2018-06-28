import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoadDocumentComponent } from './modules/document-load/load-document.component';
import { NavComponent } from './modules/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FileUploadModule } from "ng2-file-upload";
import { ViewDocumentComponent } from './component/binary-view/composition-view/view-document.component';
import { FhirService } from "./service/fhir.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ViewDocumentSectionComponent } from './component/binary-view/composition-view-section/view-document-section.component';
import { PatientSearchComponent } from './component/patient-search/patient-search.component';

import { FindDocumentComponent } from './modules/composition-find/find-document.component';
import { CompositionComponent } from './component/composition/composition.component';
import { PatientFindComponent } from './modules/patient-find/patient-find.component';
import { PatientEprPatientRecordComponent } from './modules/epr-record/patient-epr-patient-record.component';

import { MedicationStatementComponent } from './component/medication-statement/medication-statement.component';
import { ConditionComponent } from './component/condition/condition.component';
import { ProcedureComponent } from './component/procedure/procedure.component';
import { ObservationComponent } from './component/observation/observation.component';
import { AllergyIntolleranceComponent } from './component/allergy-intollerance/allergy-intollerance.component';
import { EncounterComponent } from './component/encounter/encounter.component';
import { MedicationRequestComponent } from './component/medication-request/medication-request.component';
import { MedicationComponent } from './component/medication/medication.component';

import { TestLoadComponent } from './modules/test-load/test-load.component';

import { DocumentReferenceCardComponent } from './component/document-reference-card/document-reference-card.component';
import { DocumentReferenceComponent } from './component/document-reference/document-reference.component';
import {AuthService} from "./service/auth.service";
import {LoginComponent} from "./modules/login/login.component";


import {LinksService} from "./service/links.service";
import {PatientEprService} from "./service/patient-epr.service";
import {ObservationDetailComponent} from "./component/observation-detail/observation-detail.component";
import {Ng2GoogleChartsModule} from "ng2-google-charts";
import {CareGoogleChartComponent} from "./component/care-google-chart/care-google-chart.component";

import { ImmunisationComponent } from './component/immunisation/immunisation.component';

import { PatientTimelineComponent } from './component/patient-timeline/patient-timeline.component';
import { EncounterDetailComponent } from './component/encounter-detail/encounter-detail.component';
import { PractitionerSearchComponent } from './component/practitioner-search/practitioner-search.component';
import { OrganisationSearchComponent } from './component/organisation-search/organisation-search.component';
import { OrganisationComponent } from './component/organisation/organisation.component';
import { PractitionerComponent } from './component/practitioner/practitioner.component';
import {TestPipe} from "./modules/test-load/TestPipe";
import {AuthGuard} from "./service/auth-guard";


import {LogoutComponent} from "./modules/logout/logout.component";
import { CallbackComponent } from './modules/callback/callback.component';
import {ErrorsHandler} from "./service/errors-handler";

import {KeycloakService} from "./service/keycloak.service";
import {TokenInterceptor} from "./service/token-interceptor";
import {Oauth2Service} from "./service/oauth2.service";
import { ResourceDialogComponent } from './component/resource-dialog/resource-dialog.component';
import { TreeModule } from 'angular-tree-component';

import { PatientListComponent } from './component/patient-list/patient-list.component';
import { OrganisationListComponent } from './component/organisation-list/organisation-list.component';
import { PractitionerListComponent } from './component/practitioner-list/practitioner-list.component';
import { PdfViewerComponent } from './component/binary-view/pdf-viewer/pdf-viewer.component';
import {PdfViewerModule} from "ng2-pdf-viewer";
import { ImgViewerComponent } from './component/binary-view/img-viewer/img-viewer.component';
import {ImageViewerModule} from '@hallysonh/ngx-imageviewer';
import {
  DateAdapter, MAT_DATE_FORMATS,
  MAT_DATE_LOCALE, MatButtonModule, MatCardModule,
  MatDatepickerModule, MatDialogModule, MatGridListModule, MatIcon, MatIconRegistry, MatIconModule,
  MatInputModule, MatListModule, MatPaginatorModule, MatSelectModule,

  MatSidenavModule, MatTableModule, MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MAT_MOMENT_DATE_FORMATS, MatMomentDateModule, MomentDateAdapter} from "@angular/material-moment-adapter";
import {
  CovalentDialogsModule,

  CovalentJsonFormatterModule,
  CovalentLayoutModule,
  CovalentMenuModule

} from "@covalent/core";
import {CovalentHttpModule} from "@covalent/http";
import {CovalentHighlightModule} from "@covalent/highlight";
import {CovalentMarkdownModule} from "@covalent/markdown";

import {PatientComponent} from "./component/patient/patient.component";
import {MedicationDialogComponent} from "./component/medication-dialog/medication-dialog.component";
import {CookieModule, CookieService} from "ngx-cookie";


@NgModule({
  declarations: [
    AppComponent,
    LoadDocumentComponent,
    NavComponent,
    ViewDocumentComponent,
    ViewDocumentSectionComponent,
    PatientFindComponent,
    PatientSearchComponent,
    FindDocumentComponent,
    CompositionComponent,
    PatientEprPatientRecordComponent,

    MedicationStatementComponent,
    ConditionComponent,
    ProcedureComponent,
    ObservationComponent,
    AllergyIntolleranceComponent,
    EncounterComponent,

    MedicationRequestComponent,
    MedicationComponent,

    TestLoadComponent,

    DocumentReferenceCardComponent,
    DocumentReferenceComponent,
    LoginComponent,
    LogoutComponent,
    CareGoogleChartComponent,
    ObservationDetailComponent,

    ImmunisationComponent,
    PatientTimelineComponent,
    EncounterDetailComponent,
    PractitionerSearchComponent,
    OrganisationSearchComponent,
    OrganisationComponent,
    PractitionerComponent,
    TestPipe,
    CallbackComponent,
    ResourceDialogComponent,

    PatientListComponent,
    PatientFindComponent,
    PatientComponent,
    OrganisationListComponent,
    PractitionerListComponent,
    PdfViewerComponent,
    ImgViewerComponent,
    MedicationDialogComponent
    //TdFileUploadComponent
  ],
  entryComponents: [
    ResourceDialogComponent,
    MedicationDialogComponent
  ],
  imports: [
    BrowserModule,
    CookieModule
      .forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FileUploadModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    NgbModule.forRoot(),
    TreeModule,
    PdfViewerModule,
    ImageViewerModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatInputModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatGridListModule,
    MatDialogModule,
    MatPaginatorModule,


    CovalentLayoutModule,

    /*
    CovalentStepsModule,
    */
    // (optional) Additional Covalent Modules imports

    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentJsonFormatterModule,
    CovalentMenuModule,
    CovalentDialogsModule
   // CovalentFileModule

/*
    // Issue with https://github.com/Teradata/covalent/issues/1152
    CovalentDynamicFormsModule
*/
  ],
  providers: [
    FhirService
    //,ObservationDataSource
    , AuthService
    ,LinksService
    ,PatientEprService
    ,AuthGuard
    ,CookieService
    ,KeycloakService
    ,Oauth2Service
    ,MatIconRegistry,
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
