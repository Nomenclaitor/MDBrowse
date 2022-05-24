import {Component, Input} from '@angular/core';
import { Movie, MovieInfo } from '../movie-interface';
import {MovieApiServiceService} from '../movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @Input() searchArgument: string;
  movieList: Movie[] = [];

  constructor(private readonly movieService: MovieApiServiceService) {}

  getMovieList(searchArgument: string) {
    this.movieService.requestMovieList(searchArgument).subscribe(result => {
      const movieList = result['Search'];
      this.movieList = movieList;
    });
  }

  passMovieList(): Movie[] {
    return this.movieList;
  }
}
