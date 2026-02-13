import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { AuthGuard } from './core/auth.guard';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
 { path: 'about', component: AboutComponent },
 { path: 'services', component: ServicesComponent },
 { path: 'blog', component: BlogComponent },
 { path: 'contact', component: ContactComponent },
 { path: 'appointment', component: AppointmentComponent },
 { path: 'admin', component: LoginComponent },
 { path: 'services', component: ServicesComponent },
{ path: 'services/:id', component: ServiceDetailComponent },
 { path: 'admin/login', component: LoginComponent },
  { path: 'admin/dashboard', component: DashboardComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
