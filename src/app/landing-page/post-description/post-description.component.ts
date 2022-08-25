import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../models/posts.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-description',
  templateUrl: './post-description.component.html',
  styleUrls: ['./post-description.component.scss']
})
export class PostDescriptionComponent implements OnInit {

  private id!: number;
  public postById!: Post;

  constructor(
    private _routeParam: ActivatedRoute,
    private _postService: PostsService
  ) { }

  ngOnInit(): void {

    this.getPostById();
  }

  private getPostById(): void {
    let id = Number(this._routeParam.snapshot.paramMap.get('id'));
    
    this._postService.getPostById(id).subscribe(post => {
      this.postById = post;
    });
  }

}
