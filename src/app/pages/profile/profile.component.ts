import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiService } from '../../../api.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { advert, user } from 'src/app/models/advert-model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  responseJson: string;
  formGroup: FormGroup;

  posted:boolean = false;
  model = new advert();
  profileJson = new user();

  constructor(public auth: AuthService, public api: ApiService) { 
  }

  ngOnInit() {
    this.auth.userProfile$.subscribe(
      // profile => this.profileJson = JSON.stringify(profile, null, 2),
      profile => this.profileJson = profile,
    );

    this.api.captureUser(this.profileJson).subscribe(
      x => console.log(x)
    );

  }

  onSubmit() {

    //this.api.createAdvert$(this.model);

     this.api.createAdvert$(this.model).subscribe(
      // res => this.model = res
      x => {
        if(x.message === "Advert Created"){this.posted = true;}
      }
     );   

    console.log(JSON.stringify(this.model));  
  }

  PingAPI() {
    // this.api.captureUser("");
     this.api.ping$(this.model).subscribe(
      res => this.responseJson = res
    );
  }

}
