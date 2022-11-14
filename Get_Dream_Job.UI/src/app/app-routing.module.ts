import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminComponent } from './admin/admin.component';
import { ViewPostsComponent } from './admin/view-posts/view-posts.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './footer/about/about.component';
import { PrivacypolicyComponent } from './footer/privacypolicy/privacypolicy.component';
import { TeamMemberesComponent } from './footer/team-memberes/team-memberes.component';
import { HomeComponent } from './main/home/home.component';
import { ViewCategoryComponent } from './main/view-category/view-category.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'admin/posts',
    component : AdminPostsComponent
  },
  {
    path : 'admin/view-posts',
    component : ViewPostsComponent
  },
  {
    path : 'admin',
    component : AdminComponent
  },
  {
    path : 'category/:category',
    component : ViewCategoryComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'private-policy',
    component : PrivacypolicyComponent
  },
  {
    path : 'team-members',
    component : TeamMemberesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
