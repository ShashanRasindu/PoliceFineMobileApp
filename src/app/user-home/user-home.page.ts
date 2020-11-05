import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit {

  data: any;
  pass: any;
  name = '';
  Tnic = '';
  branch = '';
  constructor( private router: Router,
               private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
          if (params && params.special) {
              this.data = params.special;
          }
      });
  }

  ngOnInit() {
      this.pass = JSON.parse(this.data);
      this.name = this.pass.name;
      this.Tnic = this.pass.Tnic;
      this.branch = this.pass.branch;
  }
    newfine(){
      const user = {
          Tnic : this.Tnic,
          Tname : this.name,
          branch : this.branch
      }
        const navigationExtras: NavigationExtras = {
            queryParams: {
                special: JSON.stringify(user)
            }
        };
        this.router.navigate(['driversearch'], navigationExtras);
    }

    myaccount(){
      const Tuser ={
          Tnic : this.Tnic,
          Tname : this.name,
          branch : this.branch
      }
        const navigationExtras: NavigationExtras = {
            queryParams: {
                special: JSON.stringify(Tuser)
            }
        };
        this.router.navigate(['useraccount'], navigationExtras);

    }

}
