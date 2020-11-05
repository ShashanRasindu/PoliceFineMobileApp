import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

import * as $ from 'jquery';


@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.page.html',
  styleUrls: ['./driver-details.page.scss'],
})
export class DriverDetailsPage implements OnInit {

    Tnic : any;
    Tname : string;
    Dlno: any;
    Dnic : any;
    Daddress: any;
    Dname: string;
    Dphone: number;
    branch: string;
    data: any;
    pass: any;
    submit = true;
    constructor( private router: Router,
                 private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                this.data = params.special;
            }
        });
    }

    ngOnInit() {
        this.submit = true;
        this.pass = JSON.parse(this.data);
        this.Tnic = this.pass.Tnic;
        this.Tname = this.pass.Tname;
        this.Dlno = this.pass.Dlno;
        this.Dnic = this.pass.Dnic;
        this.Daddress = this.pass.Daddress;
        this.Dname = this.pass.Dname;
        this.Dphone = this.pass.Dphone;
        this.branch = this.pass.branch;
  }

    next(){
        this.submit = false;
        $('#phone').removeClass('boardRed');
      if (this.Dphone.toString().length === 9)
      {

          const details = {
              Tnic : this.Tnic,
              Tname : this.Tname,
              branch : this.branch,
              Dlno : this.Dlno,
              Dphone: this.Dphone
          }
          const navigationExtras: NavigationExtras = {
              queryParams: {
                  special: JSON.stringify(details)
              }
          };
          this.submit = true;
          this.router.navigate(['vehicledetails'], navigationExtras);

      }else {
          this.submit = true;
          $('#phone').addClass('boardRed');
      }
    }

}
