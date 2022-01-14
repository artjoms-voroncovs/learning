import { Post } from './../services/posts.service';
import { Component, OnInit } from "@angular/core";
import { PostsService } from '../services/posts.service';
import { tap, map } from 'rxjs/operators';

@Component({
    selector: "app-posts-list",
    templateUrl: "./posts-list.component.html",
    styleUrls: ["./posts-list.component.css"]
})
export class PostsListComponent implements OnInit {

    posts: any[] = [];

    constructor(private postsService: PostsService) { }

    ngOnInit(){
        this.getPosts();
    }

    getPosts(){
        this.postsService.getPosts()
        .pipe(map(posts =>  posts.map((post) => {return {title: "abc"}}) ))
        .subscribe(posts => this.posts = posts)
    }
}