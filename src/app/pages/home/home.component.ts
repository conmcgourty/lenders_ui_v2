import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService) {}

  ngOnInit() {
  }

  
  ReturnData(): any[] {

    const data = [
      {
        "Advert_ID": "Trina Carr",
        "Advert_Name": "sunt",
        "Advert_Desc": "$2,359.21",
        "Advert_Thumbnail": "http://placehold.it/700x400"
      },
      {
        "Advert_ID": "Graham Velasquez",
        "Advert_Name": "labore",
        "Advert_Desc": "$2,608.11",
        "Advert_Thumbnail": "http://placehold.it/700x400"
      },
      {
        "Advert_ID": "Cummings Sexton",
        "Advert_Name": "ut",
        "Advert_Desc": "$1,271.78",
        "Advert_Thumbnail": "http://placehold.it/700x400"
      },
      {
        "Advert_ID": "Meagan Hurst",
        "Advert_Name": "dolor",
        "Advert_Desc": "$1,237.61",
        "Advert_Thumbnail": "http://placehold.it/700x400"
      },
      {
        "Advert_ID": "Ingrid Meadows",
        "Advert_Name": "ipsum",
        "Advert_Desc": "$3,148.73",
        "Advert_Thumbnail": "http://placehold.it/700x400"
      },
      {
        "Advert_ID": "Guerrero Shaw",
        "Advert_Name": "laborum",
        "Advert_Desc": "$1,161.65",
        "Advert_Thumbnail": "http://placehold.it/700x400"
      }
    ]
  
      return data;
  }

}
