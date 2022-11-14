import { Component, OnInit } from '@angular/core';
import { Post } from '../Models/models';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  posts : Post[] = [];
  
  constructor(private postService : PostServiceService) { }

  ngOnInit(): void {
    this.postService.getAllPosts()
    .subscribe(
      responce => {
        this.posts = responce;
      }
    )
  }

}
