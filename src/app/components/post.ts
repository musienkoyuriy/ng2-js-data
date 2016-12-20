import { Component, Input } from '@angular/core';
import { IPost } from '../store';

@Component({
    selector: 'post',
    template: `
      <div class="post" style="margin-top: 15px; ">
        <span><strong>{{ data.title }}</strong></span>
        <div >{{ data.body }}</div>
      </div>
    `
})
export class Post {
    @Input('data') data: IPost;
}
