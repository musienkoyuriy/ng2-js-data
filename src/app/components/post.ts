import { Component, Input } from '@angular/core';
import { IPost } from '../store';

@Component({
    selector: 'post',
    template: `
      <div class="post">
        <span>{{ post.title }}</span>
        <div>{{ post.body }}</div>
      </div>
    `
})
export class Post {
    @Input('data') data: IPost;
}