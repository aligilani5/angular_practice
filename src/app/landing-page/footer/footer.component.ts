import { Component, OnInit } from '@angular/core';
import { Post } from '../models/posts.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public posts: Post[] = [];
  public currentYear = new Date().getFullYear();
  constructor(
    private _postService: PostsService
  ) { }

  ngOnInit(): void {
    
   this.getPosts();
  }

  private getPosts(): void {
    this._postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

}
