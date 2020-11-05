import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserloginService} from '../service/userlogin.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})
export class UserAccountPage implements OnInit {

    data: any;
    pass: any;
    Tname = '';
    Tnic = '';
    branch = '';
    res: any;
    points: number;
    constructor( private router: Router,
                 private route: ActivatedRoute,
                 private pointservice: UserloginService) {
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


        const user = {
          Tid: this.Tnic
        };



        this.pointservice.getPoints(user).subscribe(value => {
            this.res = JSON.parse(JSON.stringify(value));
            this.points = this.res[0].points;
        }, error1 => {
            alert('Network Error');
            console.log(error1);
        });
    }

}
