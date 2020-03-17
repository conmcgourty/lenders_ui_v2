import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ApiService } from '../../../api.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { advert } from 'src/app/models/advert-model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileJson: string = null;
  responseJson: string;
  formGroup: FormGroup;


  model = new advert();

  constructor(public auth: AuthService, public api: ApiService) { 
  }

  ngOnInit() {
    this.auth.userProfile$.subscribe(
      profile => this.profileJson = JSON.stringify(profile, null, 2)
    );

  }

  onSubmit() {

    // this.api.createAdvert$(this.model).subscribe(
    //   res => this.model = res
    // );   

    console.log(JSON.stringify(this.model));  
  }

  PingAPI() {
    // this.api.captureUser("");
     this.api.ping$(this.model).subscribe(
      res => this.responseJson = res
    );
  }

}
