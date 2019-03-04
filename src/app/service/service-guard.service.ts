import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceGuardService implements CanActivate{

  constructor( public auth : AuthService) { }
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ) : Observable<boolean> | Promise<boolean> | boolean {
      console.log('route:', route);
      console.log('state', state);

      if(this.auth.isAuthenticated()){
        console.log('Puede Pasar canAtivated TRUE');
        return true;
      }
      else{
        console.error('No pasa canActivated FALSE');
      return false;
    }
  }
  
}
