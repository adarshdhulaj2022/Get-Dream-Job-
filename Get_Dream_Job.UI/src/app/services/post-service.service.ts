import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddPostRequest, Post } from '../Models/models';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http : HttpClient) { }

  apiBaseURL = environment.apiBaseURL;

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiBaseURL + 'api/Posts');
  }

  addJobPost()   {
    return this.http.post(this.apiBaseURL + 'api/Posts/AddPost' , null);
  }

  deleteJobPost(id : string) : Observable<Post>   {
    return this.http.delete<Post>(this.apiBaseURL + 'api/Posts/' + id);
  }
}
