import { ParseDbService } from './../../services/parse-db.service';
import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/model/song.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = true;

  resultSet: Song[];

  constructor(private dbService: ParseDbService) {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 1500);

    this.updateResultSet();
  }

  async updateResultSet(): Promise<void> {
    this.isLoading = true;

    this.resultSet = await this.dbService.getAllSongs();
    console.log('Response:', this.resultSet);

    this.isLoading = false;
  }

  async createSong(): Promise<void> {
    this.isLoading = true;

    try {
      const response = await this.dbService.createSong();
      console.log('New record created:', response);

      await this.updateResultSet();

      alert('New Record Created:\n' + JSON.stringify(response, null, 2));
    } catch (error) {
      // error handling logic
      alert(JSON.stringify(error, null, 2));
    } finally {
      this.isLoading = false;
    }
  }

  async deleteSong(): Promise<void> {
    this.isLoading = true;

    try {
      const response = await this.dbService.deleteSong();
      console.log('Record deleted:', response);

      await this.updateResultSet();

      alert('Record deleted:\n' + JSON.stringify(response, null, 2));
    } catch (error) {
      // error handling logic
      alert(JSON.stringify(error, null, 2));
    } finally {
      this.isLoading = false;
    }
  }
}
