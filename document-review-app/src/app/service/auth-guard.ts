import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard  implements CanActivate {


  constructor(public authService: AuthService) {

  }
  canActivate() {



    if (this.authService.permission != undefined ) {
      console.log("AlwaysAuthGuard");
      if (localStorage.getItem("access_token") !=undefined) return true
      else return false;
    } else {
      console.log("AlwaysAuthGuard");
      return false;
    }
  }
}
