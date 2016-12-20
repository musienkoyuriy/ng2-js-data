import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Posts } from './components/posts';
import { Post } from './components/post';
import { Comment } from './components/comment';

@NgModule({
  declarations: [
    AppComponent,
    Posts,
    Post,
    Comment
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
