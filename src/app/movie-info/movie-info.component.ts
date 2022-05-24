import { Component, OnInit } from '@angular/core';
import {MovieApiServiceService} from '../movie-api-service.service';
import {MovieInfo, Rating} from '../movie-interface';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent implements OnInit {

  imdbID!: string;

  selectedMovie?: MovieInfo = {
    Title:      '',
    Year:       '',
    Rated:      '',
    Released:   '',
    Runtime:    '',
    Genre:      '',
    Director:   '',
    Writer:     '',
    Actors:     '',
    Plot:       '',
    Language:   '',
    Country:    '',
    Awards:     '',
    Poster:     '',
    Ratings:    [],
    Metascore:  '',
    imdbRating: '',
    imdbVotes:  '',
    imdbID:     '',
    Type:       '',
    DVD:        '',
    BoxOffice:  '',
    Production: '',
    Website:    '',
    Response:   ''
  };

  constructor(private readonly movieService: MovieApiServiceService, private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('imdbID');
      this.imdbID = id;
    });

    this.movieService.requestMovieDetails(this.imdbID).subscribe(requestedMovie => {
      this.selectedMovie = requestedMovie;
    });
  }

}
