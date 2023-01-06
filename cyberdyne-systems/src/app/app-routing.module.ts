import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./mShared/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    loadChildren: () => import('./mHomepage/homepage.module').then(m=>m.HomepageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./mProducts/products.module').then(m=>m.ProductsModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./mCompanyServices/company-services.module').then(m=>m.CompanyServicesModule)
  },
  {path: 'company',
    loadChildren: () => import('./mCompanyInfo/company-info.module').then(m=>m.CompanyInfoModule)
  },
  {path: 'support',
    loadChildren: () => import('./mCustomerSupport/customer-support.module').then(m=>m.CustomerSupportModule)
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
