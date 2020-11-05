import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import * as $ from 'jquery';
import {DriverService} from '../service/driver.service';

@Component({
  selector: 'app-driver-search',
  templateUrl: './driver-search.page.html',
  styleUrls: ['./driver-search.page.scss'],
})
export class DriverSearchPage implements OnInit {

    data: any;
    pass: any;
    Tname = '';
    Tnic = '';
    Dlno = '';
    res: any;
    Wrong = false;
    act = false;
    address: string;
    name: string;
    nic: string;
    phone: number;
    type: string;
    submit = true;
    branch:string;
    constructor( private router: Router,
                 private route: ActivatedRoute,
                 private Driver: DriverService) {
        this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                this.data = params.special;
            }
        });
    }

    ngOnInit() {
        this.submit = true;
        this.pass = JSON.parse(this.data);
        this.Tname = this.pass.Tname;
        this.Tnic = this.pass.Tnic;
        this.branch = this.pass.branch;
    }

    search(){
        this.submit = false;
        this.Wrong = false;
        this.act = false;
        $('#bar').removeClass('boardRed');
      if (this.Dlno.length > 7)
      {
        const driver = {
            driverID: this.Dlno
        };
          this.Driver.searchDriver(driver).subscribe(value => {
              this.res = JSON.parse(JSON.stringify(value));
              if (this.res === 'Driver not Found') {
                  this.Wrong = true;
                  this.submit = true;
              }else {

                  this.address = this.res[0].address;
                  this.name = this.res[0].name;
                  this.nic = this.res[0].nic;
                  this.phone = this.res[0].phone;
                  this.type = this.res[0].type;

                  if (this.type === 'good') {


                      const detail = {
                          Tnic : this.Tnic,
                          Tname : this.Tname,
                          Dlno: this.Dlno,
                          Dnic : this.nic,
                          Daddress: this.address,
                          Dname: this.name,
                          Dphone: this.phone,
                          branch: this.branch,
                      };

                      const navigationExtras: NavigationExtras = {
                          queryParams: {
                              special: JSON.stringify(detail)
                          }
                      };
                      this.submit = true;
                      this.router.navigate(['driverdetails'], navigationExtras);

                  }else {
                      this.submit = true;
                      this.act = true;
                  }
                  // address: "no 55, new town, dehiattakandiya"
                  // create_date: "2020-04-09T07:23:25.000Z"
                  // d_id: "B1234567"
                  // name: "kamal gunarathna"
                  // nic: "961342198V"
                  // phone: 716363828
                  // type: "good"

              }

          }, error1 => {
              this.submit = true;
              alert('Network Error');
              console.log(error1);
          });


      }else {
          this.submit = true;
          $('#bar').addClass('boardRed');
      }
    }


    newDriver(){

        const detail = {
            Tnic : this.Tnic,
            Tname : this.Tname,
            branch: this.branch
        };

        const navigationExtras: NavigationExtras = {
            queryParams: {
                special: JSON.stringify(detail)
            }
        };
        this.submit = true;
        this.router.navigate(['newdriver'], navigationExtras);

    }
}
