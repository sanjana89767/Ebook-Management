import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../auth/api/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginService);
  const router = inject(Router);
  if (authService.hasToken()) {
    return true;
  }

  router.navigate(['/']);
  return false;
};
