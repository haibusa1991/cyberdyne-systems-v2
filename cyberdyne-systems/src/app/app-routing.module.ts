import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./shared/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    loadChildren: () => import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m=>m.ProductsModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then(m=>m.ServicesModule)
  },
  {path: 'company',
    loadChildren: () => import('./company/company.module').then(m=>m.CompanyModule)
  },
  {path: 'support',
    loadChildren: () => import('./support/support.module').then(m=>m.SupportModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
