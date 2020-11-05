import { Component } from '@angular/core';
import * as  $ from 'jquery';
import * as CryptoJS from 'crypto-js';
import {UserloginService} from '../service/userlogin.service';
import {NavigationExtras, Router} from '@angular/router';
import {Platform} from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    backButtonSubscription;
    officerID = '';
    Pass = '';
    encrypted : any;
    res: any;
    passData: any;
    name: any;
    branch: any;
    Unic: any;
    Red = true;
    Wrong = false;
    submit = true;
  constructor( private loginuser : UserloginService,
               private router: Router,
               private platform: Platform) {}

    FineUser(){
      this.submit = false;
    this.Red = true;
    this.Wrong = false;
    if ( this.officerID === '' || this.officerID.length < 9){
        $('#nic').addClass('boardRed');
        this.Red = false;
        this.submit = true;
    }

    if(this.Pass   === '' || this.Pass.length < 4){
        $('#passW').addClass('boardRed');
        this.Red = false;
        this.submit = true;
    }
    if (this.Red){

        $('#passW').removeClass('boardRed');
        $('#nic').removeClass('boardRed');
            // const nic = RegExp('\d{9}V');
            // console.log(nic.test('12345678999'));
            const secretKey = 'shashan';
            this.encrypted = CryptoJS.AES.encrypt(this.Pass, secretKey);
            this.passData = JSON.parse(JSON.stringify(this.encrypted.toString()));


            //     let bytess = CryptoJS.AES.decrypt(this.passData, secretKey);
            // var decruptBody = JSON.parse(bytess.toString(CryptoJS.enc.Utf8));

            const user = {
                officerID: this.officerID.trim(),
                Pass: 'U2FsdGVkX19SAmgcF5XVtiQva2JQQP+n5JB6Pul0Ygs=',
            };



            this.loginuser.LoginUser(user).subscribe(value => {

                this.res = JSON.parse(JSON.stringify(value));
                this.name = this.res.name;
                this.branch = this.res.branch;
                this.Unic = this.res.nic;
                $('#passW').removeClass('boardRed');
                $('#nic').removeClass('boardRed');
                this.officerID = '';
                this.Pass = '';


                this.submit = true;
                const Udetails = {
                    name: this.name,
                    branch: this.branch,
                    Tnic: this.Unic
                };
                const navigationExtras: NavigationExtras = {
                    queryParams: {
                        special: JSON.stringify(Udetails)
                    }
                };
                this.router.navigate(['userhome'], navigationExtras);

            }, error1 => {
                this.submit = true;
                this.Wrong = true;
                // alert('Network Error');
                // console.log(error1);
            });
        }

    }



    exitApp() {
        if (this.router.url === '/home') {
            navigator['app'].exitApp();
        }
    }

    // ----------------------------------------------

    // app eka hardware button ekedi close wenne mathanin
    ngAfterViewInit() {
        this.backButtonSubscription = this.platform.backButton.subscribe(() => {
            if (this.router.url === '/home') {
                navigator['app'].exitApp();
            }
        });
    }

    ngOnDestroy() {
        this.backButtonSubscription.unsubscribe();
    }
}
