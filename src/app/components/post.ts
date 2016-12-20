import { Component, Input, OnInit } from '@angular/core';
import { IPost, IComment } from '../store';
import * as api from '../api';

@Component({
  selector: 'post',
  template: `
    <div class="post" style="margin-top: 15px; ">
      <span><strong>{{ data.title }}</strong></span>
      <div >{{ data.body }}</div>
      <div class="comments" style="margin: 10px 0 0 25px;">
          <div *ngIf="comments.length == 0" style="font-style: italic;">There are no any comments yet</div>
          <comment *ngFor="let comment of comments" [data]="comment"></comment>
      </div>
    </div>
  `
})
export class Post implements OnInit {
  @Input('data') data: IPost;
  public comments: IComment[] = [];

  public ngOnInit(): void {
    const postId = this.data.id;
    api.fetchComments(postId).then((comments) => {
      this.comments = comments;
    });
  }
}
