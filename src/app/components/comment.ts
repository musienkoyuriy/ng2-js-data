import { Component, Input } from '@angular/core';
import { IComment } from '../store';

@Component({
  selector: 'comment',
  template: `
      <div class="comment" style="margin-top: 15px;">
        <span><strong>{{ data.name }}</strong></span>
        <div >{{ data.body }}</div>
        <div><small>{{ data.email }}</small></div>
      </div>
    `
})
export class Comment {
  @Input('data') data: IComment;

}
