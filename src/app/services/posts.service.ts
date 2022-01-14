import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of, Observable} from 'rxjs';

export type Post = {
    userId: number
    id: number
    title: string
    body: string
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
  }

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
