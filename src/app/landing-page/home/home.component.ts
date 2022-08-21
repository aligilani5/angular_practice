import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/posts.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts: Post[] = [];
  constructor(
    private _postService: PostsService,
    private _route: Router
  ) { }

  ngOnInit(): void {

    this.getAllPosts();
  }

  private getAllPosts() {

    this._postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  public getPostById(id: number) {
    
    this._route.navigate(['/post', id]);
  }
}
