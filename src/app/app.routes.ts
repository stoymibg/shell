import { Routes } from '@angular/router';
import { loadRemoteModule } from "@angular-architects/native-federation";

export const APP_ROUTES: Routes = [
  {
    path: 'mfe',
    loadChildren: () =>
      loadRemoteModule('mfe1', './routes').then((m) => m.APP_ROUTES),
  },
];
