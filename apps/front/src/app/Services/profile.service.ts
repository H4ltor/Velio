import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements CanActivate {
  profile = null;
  entpointURL = environment;

  constructor(private httpClient: HttpClient, private router: Router) {

  }

  getProfile() {
    return new Observable((observer) => {
      if (this.profile) {
        observer.next(this.profile);
        observer.complete();
      } else {
        this.httpClient.get(this.entpointURL).subscribe(profile => {
          this.profile = profile;
          observer.next(profile);
          observer.complete();

        });
      }
    });
  }
  //en cours
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return new Observable((observer) => {
      this.getProfile().subscribe(profile=> {
        observer.next(true);
        observer.complete();
      }, error => {
        this.router.navigate(['/login']);
        observer.next(false);
        observer.complete();
      })
    });

  }
}

