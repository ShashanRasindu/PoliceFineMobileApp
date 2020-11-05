import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.page.html',
  styleUrls: ['./vehicle-details.page.scss'],
})
export class VehicleDetailsPage implements OnInit {

    data: any;
    pass: any;
    submit = true;
    Tnic : any;
    Tname : string;
    Dlno : any;
    Dphone: number;
    Vtype: string;
    Vprovince: string;
    Vletter: string;
    Vno: number;
    branch: string;
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
        this.submit = true;
        this.Red = true;
        this.pass = JSON.parse(this.data);
        this.Tnic = this.pass.Tnic;
        this.Tname = this.pass.Tname;
        this.branch = this.pass.branch;
        this.Dlno = this.pass.Dlno;
        this.Dphone = this.pass.Dphone;
    }
    next(){
        this.submit = false;
        $('#type').removeClass('boardRed');
        $('#province').removeClass('boardRed');
        $('#letter').removeClass('boardRed');
        $('#no').removeClass('boardRed');
      if (! this.Vtype){
          $('#type').addClass('boardRed');
          this.Red = false;
          this.submit = true;
      }
      if (! this.Vprovince){
          $('#province').addClass('boardRed');
          this.Red = false;
          this.submit = true;
      }
      let diga =this.Vletter.length;
      if ( !(diga < 4 &&  diga > 1)) {
          this.Red = false;
          this.submit = true;
          $('#letter').addClass('boardRed');
      }
        // if () {
        //     this.Red = false;
        //     $('#letter').addClass('boardRed');
        // }
      if (!(this.Vno.toString().length === 4)){
          $('#no').addClass('boardRed');
          this.Red = false;
          this.submit = true;
      }

      if (this.Red){

        let VehicleNo =  this.Vprovince + "-" +this.Vletter.toUpperCase() + "-" + this.Vno.toString();
        const details = {
          Tnic : this.Tnic,
            Tname : this.Tname,
            branch: this.branch,
            Dlno: this.Dlno,
            Dphone: this.Dphone,
            Vtype: this.Vtype,
            Vno: VehicleNo
        };

          const navigationExtras: NavigationExtras = {
              queryParams: {
                  special: JSON.stringify(details)
              }
          };
          this.submit = true;
          this.router.navigate(['mistake'], navigationExtras);

      }

    }



}
