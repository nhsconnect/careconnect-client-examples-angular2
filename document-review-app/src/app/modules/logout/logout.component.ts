import { Component, OnInit } from '@angular/core';
import {CookieService} from "angular2-cookie/core";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  logoutRedirect : string = "";

  constructor( private authService: AuthService,private activatedRoute: ActivatedRoute
    ,private _cookieService:CookieService) { }

  ngOnInit(
  ) {
    this.logoutRedirect = this.activatedRoute.snapshot.queryParams['afterLogout'];
    this._cookieService.remove('ccri-token');

    localStorage.removeItem('access_token');
    localStorage.removeItem("PatientBanner");

    this.authService._firebaseAuth.auth.signOut().then((res) => {
      if (this.logoutRedirect !=undefined) {
        window.location.href =this.logoutRedirect;
      }

    });





  }

}