import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {ToastController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {FinebillService} from '../service/finebill.service';
import {isEmpty} from 'rxjs/operators';
@Component({
  selector: 'app-fine-bill',
  templateUrl: './fine-bill.page.html',
  styleUrls: ['./fine-bill.page.scss'],
})

export class FineBillPage implements OnInit {

    data: any;
    pass: any;
    Tnic : any;
    Tname : string;
    Dlno: any;
    Dphone: number;
    Vtype: string;
    Vno: any;
    Mno: any;
    Mname: any;
    branch: string;
    Red = true;
    loc: any;


    constructor( private router: Router,
                 private route: ActivatedRoute,
                 private geolocation: Geolocation,
                 private savebill: FinebillService) {
        this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                this.data = params.special;
            }
        });


    }

    ngOnInit() {
        this.pass = JSON.parse(this.data);
        this.Tnic = this.pass.Tnic;
        this.Tname = this.pass.Tname;
        this.Dlno = this.pass.Dlno;
        this.Dphone = this.pass.Dphone;
        this.Vtype = this.pass.Vtype;
        this.Vno = this.pass.Vno;
        this.Mno = this.pass.Mno;
        this.Mname = this.pass.Mname;
        this.branch = this.pass.branch;
        this.Red = true;

        this.geolocation.getCurrentPosition().then((res) => {
            const myloc = res.coords.latitude.toString() + ',' + res.coords.longitude.toString();
            this.loc = myloc;
        }).catch((error) => {
            this.Red = true;
            alert('Error getting location');
        });
    }
    getLoc() {

    }

    FineBill(){
        this.Red = false;
        if (confirm('අදාල තොරතුරු නිවැරදි බව සනාථ කරන්න.')) {
        // let location = getLoc();
        // console.log(this.loc);
        const  Bill = {
            Tnic : this.Tnic,
            Dlno: this.Dlno,
            Dphone: this.Dphone,
            Vtype: this.Vtype,
            Vno: this.Vno,
            Mno: this.Mno,
            Mname: this.Mname,
            Loc: this.loc

        };

        this.savebill.SaveBill(Bill).subscribe(value => {
           alert('සුරකින ලදී ');

            const user = {
                Tnic : this.Tnic,
                name : this.Tname,
                branch : this.branch
            };
            const navigationExtras: NavigationExtras = {
                queryParams: {
                    special: JSON.stringify(user)
                }
            };
            this.Red = true;
            this.router.navigate(['userhome'], navigationExtras);

        }, error1 => {
            this.Red = true;
            alert('Network Error');
            // console.log(error1);
        });

        }else {
            this.Red = true;
        }
    }

}
