import { Component } from '@angular/core';
import { IPost } from '../store';
import { fetchPosts } from './api';

@Component({
  selector: '#posts',
  template: `
    <div>
        <div *ngIf="posts.length == 0">There are no posts yet</div>
        <post *ngFor="#post of posts" [data]="post"></post>
    </div>`
})
export class Posts {
    public posts: IPost[] = [];

    public constructor() {
        fetchPosts().then((posts) => {
            this.posts = posts;
        });
    }
}