import { Component, Input, OnInit } from '@angular/core';
import { JobThumbnail, Post } from 'src/app/Models/models';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-jobs-thumbnail',
  templateUrl: './jobs-thumbnail.component.html',
  styleUrls: ['./jobs-thumbnail.component.css']
})
export class JobsThumbnailComponent implements OnInit { 

  @Input() job: JobThumbnail | null = null ;
  @Input() view: 'main' | 'other' | 'suggested' = 'main';

  constructor(private postService: PostServiceService) { }

  posts: Post[]= [];

  ngOnInit(): void {
    this.postService.getAllPosts()
    .subscribe(
      responce => {
        this.posts = responce;
      }
    );
    
  }

}
