import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  public email!: string;
  public password!: string;
  constructor(private authService: AuthService, private router: Router) {}
  login(e: any) {
    this.authService
      .login(this.email, this.password)
      .then((res: any) => {
        // console.log(res);
        this.router.navigate(["/dashboard"]);
      })
      .catch((err: any) => {
        alert("Error al loguear: " + err);
      });
  }
}
