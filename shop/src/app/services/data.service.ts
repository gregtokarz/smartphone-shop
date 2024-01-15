import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private url = 'http://localhost:3001';

    constructor(private http: HttpClient) {

    }

    getAll() {
        return this.http.get(this.url + '/api/posts');
    }

    postData(data: any) {
        return this.http.post(`${this.url}/api/post`, data);
    }

    getById(id: string) {
        return this.http.get(this.url + '/api/posts/' + id);
    }

    addPost(post: any): Observable<any> {
        return this.http.post<any>(this.url+'/api/post', post);
    }

    deleteById(id:string){
        return this.http.delete(this.url + '/api/posts/'+id);
    }


}
