import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddPostRequest, Post } from 'src/app/Models/models';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class AdminPostsComponent implements OnInit {

  constructor(private postService: PostServiceService) { }

  // post: AddPostRequest = {
  //   heading: '',
  //   imageUrl: '',
  //   publishedDate: '',
  //   jobDiscription: '',
  //   title: '',
  //   eligibility: '',
  //   organizationName: '',
  //   postName: '',
  //   degree: '',
  //   batch: '',
  //   salary: '',
  //   experience: '',
  //   location: '',
  //   lastDate: '',
  //   tags: '',
  // }
  

  ngOnInit(): void {
    
  
  }

  postForm = new FormGroup({
    heading: new FormControl(""),
    title: new FormControl(""),
    imageUrl: new FormControl(""),
    publishedDate: new FormControl(""),
    jobDiscription: new FormControl(""),
    eligibility: new FormControl(""),
    organizationName: new FormControl(""),
    postName: new FormControl(""),
    degree: new FormControl(""),
    batch: new FormControl(""),
    salary: new FormControl(""),
    experience: new FormControl(""),
    location: new FormControl(""),
    lastDate: new FormControl(""),
    tags: new FormControl(""),
  });

  postSubmited(): void {
    // console.log(this.postForm);

    this.postService.addJobPost()
    .subscribe (
      responce => {
        console.log(responce);
      }
    )
  }

}
