import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './main/categories/categories.component';
import { HomeComponent } from './main/home/home.component';
import { MainComponent } from './main/main.component';
import { JobsThumbnailComponent } from './main/jobs-thumbnail/jobs-thumbnail.component';
import { ViewCategoryComponent } from './main/view-category/view-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './footer/about/about.component';
import { PrivacypolicyComponent } from './footer/privacypolicy/privacypolicy.component';
import { TeamMemberesComponent } from './footer/team-memberes/team-memberes.component';
import { AdminComponent } from './admin/admin.component';
import { ViewPostsComponent } from './admin/view-posts/view-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPostsComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    HomeComponent,
    MainComponent,
    JobsThumbnailComponent,
    ViewCategoryComponent,
    AboutComponent,
    PrivacypolicyComponent,
    TeamMemberesComponent,
    AdminComponent,
    ViewPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
