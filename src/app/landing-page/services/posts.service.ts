import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this._http.get<Post[]>('http://localhost:3000/posts');
  }
}
