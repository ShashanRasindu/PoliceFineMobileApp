import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {angularLifecycleInterfaceKeys} from 'codelyzer/util/utils';

@Component({
  selector: 'app-mistake',
  templateUrl: './mistake.page.html',
  styleUrls: ['./mistake.page.scss'],
})
export class MistakePage implements OnInit {

  data: any;
  pass: any;
    Tnic : any;
    Tname : string;
    branch: string;
    Dlno: any;
    Dphone: number;
    Vtype: string;
    Vno: any;
    Mistake: any;
    Red = true;
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
        this.Tnic = this.pass.Tnic;
        this.Tname = this.pass.Tname;
        this.Dlno = this.pass.Dlno;
        this.Dphone = this.pass.Dphone;
        this.Vtype = this.pass.Vtype;
        this.Vno = this.pass.Vno;
        this.branch = this.pass.branch;
    }

    next(){
        this.Red = false;
      if (! this.Mistake){
        alert('Please Select Mistake');
        this.Red = true;
      } else {

          let Mnumber = this.Mistake.substring(0,2);
          let Miname = this.Mistake.substring(3);

          const  MistakeDriver = {
              Tnic : this.Tnic,
              Tname : this.Tname,
              Dlno: this.Dlno,
              Dphone: this.Dphone,
              Vtype: this.Vtype,
              Vno: this.Vno,
              branch: this.branch,
              Mno: Mnumber,
              Mname: Miname
          };

          const navigationExtras: NavigationExtras = {
              queryParams: {
                  special: JSON.stringify(MistakeDriver)
              }
          };
          this.Red = true;
          this.router.navigate(['finebill'], navigationExtras);

      }
    }
}
