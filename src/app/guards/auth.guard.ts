import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const routerService = inject(Router);
  if (sessionStorage.getItem('usuario') == 'true') {
    return true;
  } else {
    routerService.navigate(['/login']);

    return false;
  }
};
