import {Routes} from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {SigninComponent} from "./components/auth/signin/signin.component";
import {SignupComponent} from "./components/auth/signup/signup.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ContainerComponent} from "./components/container/container.component";

export const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent,
    pathMatch: 'full'
  },
  {
    path:'signup',
    component: SignupComponent,
    pathMatch: 'full'
  }
]
