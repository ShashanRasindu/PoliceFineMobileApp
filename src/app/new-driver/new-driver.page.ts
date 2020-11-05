import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import * as $ from 'jquery';
import {DriverService} from '../service/driver.service';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.page.html',
  styleUrls: ['./new-driver.page.scss'],
})
export class NewDriverPage implements OnInit {

    data: any;
    pass: any;
    Tname = '';
    Tnic : any;
    branch : any;
    Dnic = '';
    Dlno = '';
    Dname = '';
    Daddress = '';
    Dphone = '';
    Red = true;
    submi = true;
    constructor( private router: Router,
                 private route: ActivatedRoute,
                 private newDriver: DriverService) {
        this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                this.data = params.special;
            }
        });
    }

    ngOnInit() {
        this.pass = JSON.parse(this.data);
        this.Tname = this.pass.Tname;
        this.Tnic = this.pass.Tnic;
        this.branch = this.pass.branch;
    }

    // const detail = {
    //     Tnic : this.Tnic,
    //     Tname : this.Tname,
    //     Dlno: this.Dlno,
    //     Dnic : this.nic,
    //     Daddress: this.address,
    //     Dname: this.name,
    //     Dphone: this.phone,
    //     branch: this.branch,
    // };

    savenew(){
        this.Red =true;
        this.submi = false;
        $('#nic').removeClass('boardRed');
        $('#lno').removeClass('boardRed');
        $('#name').removeClass('boardRed');
        $('#address').removeClass('boardRed');
        $('#phone').removeClass('boardRed');
        if(! (this.Dnic.toString().length === 10)){
            $('#nic').addClass('boardRed');
            this.submi = true;
            this.Red = false;
        }

        if (!( this.Dnic.substring(9).toString() === 'V')){
            $('#nic').addClass('boardRed');
            this.submi = true;
            this.Red = false;
        }
        if(! (this.Dlno.toString().length === 8)){
            $('#lno').addClass('boardRed');
            this.submi = true;
            this.Red = false;
        }
        if(!(this.Dlno.substring(0,1).toString() === 'B')){
            $('#lno').addClass('boardRed');
            this.submi = true;
            this.Red = false;
        }

        if(!(this.Dname.toString().length < 30 && this.Dname.toString().length > 5)){
            $('#name').addClass('boardRed');
            this.submi = true;
            this.Red = false;
        }

        if(!(this.Daddress.toString().length < 50 && this.Daddress.toString().length > 5)){
            $('#address').addClass('boardRed');
            this.submi = true;
            this.Red = false;
        }
        if(!(this.Dphone.toString().length === 9)){
            $('#phone').addClass('boardRed');
            this.submi = true;
            this.Red = false;
        }

        if(this.Red){
            const Driver = {
                dlno: this.Dlno,
                name: this.Dname,
                Tnic: this.Tnic,
                nic: this.Dnic,
                phone: this.Dphone,
                address: this.Daddress
            }

            this.newDriver.NewDriver(Driver).subscribe(value => {
                alert('සුරකින ලදී ');
                const newDetails = {
                        Tnic : this.Tnic,
                        Tname : this.Tname,
                        Dlno: this.Dlno,
                        Dnic : this.Dnic,
                        Daddress: this.Daddress,
                        Dname: this.Dname,
                        Dphone: this.Dphone,
                        branch: this.branch
                };

                const navigationExtras: NavigationExtras = {
                    queryParams: {
                        special: JSON.stringify(newDetails)
                    }
                };

                this.router.navigate(['driverdetails'], navigationExtras);


            }, error1 => {
                this.Red = true;
                alert('රියදුරු ලියාපදිංචි වී ඇත.');

                const inDriver = {
                    Tnic : this.Tnic,
                    Tname : this.Tname,
                    branch: this.branch
                };
                const navigationExtras: NavigationExtras = {
                    queryParams: {
                        special: JSON.stringify(inDriver)
                    }
                };

                this.router.navigate(['driversearch'], navigationExtras);
            });

        }
    }

}
