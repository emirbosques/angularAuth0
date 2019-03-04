import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrls: ['./protegida.component.css']
})
export class ProtegidaComponent implements OnInit {
  profile: any = {};
  loading = true;

  constructor( public auth: AuthService) { 
    
  }

  ngOnInit() {

    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      console.log('profile 0', this.profile);
      setTimeout(() => {
        this.loading = false;
      }, 6000);
      
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log('profile 1 ', this.profile);
        setTimeout(() => {
          this.loading = false;
        }, 6000);
      });
    }

  }

}
