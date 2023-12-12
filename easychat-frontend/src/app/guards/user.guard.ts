import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

/**
 * Guard to protect routes if the username is not set.
 * 
 * @param route The actiaved route
 * @param state The current state
 * @returns 
 */
export const userGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const userService: UserService = inject(UserService);
  const router: Router = inject(Router);

  // Redirect to /profile if the username is not set
  return !!userService.username || router.createUrlTree(['/profile']);
};
