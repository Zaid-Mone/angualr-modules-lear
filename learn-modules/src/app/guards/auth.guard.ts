import { CanActivate, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

//export const authGuard: CanActivateFn = (route, state) => {
//  return true;
//};


export class authGuard implements CanActivate {
  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }

}
