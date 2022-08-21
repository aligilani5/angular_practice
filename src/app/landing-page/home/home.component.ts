import { Component, OnInit } from '@angular/core';
import { Post } from '../models/posts.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts: Post[] = [];
  constructor(private _postService: PostsService) { }

  ngOnInit(): void {

    this.getAllPosts();
  }

  private getAllPosts() {
    
    this._postService.getPosts().subscribe(data => {
      this.posts = data;
    })
  }
}
