import { Component } from '@angular/core';
import { IPost } from '../store';
import * as api from '../api';

@Component({
  selector: '#posts',
  template: `
    <div>
      <div *ngIf="posts.length == 0">There are no posts yet</div>
      <post *ngFor="let post of posts" [data]="post"></post>
    </div>`
})
export class Posts {
  public posts: IPost[] = [];

  public constructor() {
    api.fetchPosts().then((posts) => {
      this.posts = posts;
    });
  }
}
