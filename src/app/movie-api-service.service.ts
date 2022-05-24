import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MovieList, MovieInfo} from './movie-interface';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private readonly http: HttpClient) { }

  requestMovieList(searchArgument: string): Observable<MovieList>{
    const API = `https://www.omdbapi.com/?s=${searchArgument}&apikey=${environment.apiKey}`;
    return this.http.get<MovieList>(API);
  }

  requestMovieDetails(imdbID: string): Observable<MovieInfo>{
    const API = `https://www.omdbapi.com/?i=${imdbID}&type=movie&apikey=${environment.apiKey}`;
    return this.http.get<MovieInfo>(API);
  }

}
