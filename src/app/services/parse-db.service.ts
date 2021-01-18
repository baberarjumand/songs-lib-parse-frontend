import { Song } from './../model/song.model';
import { Injectable } from '@angular/core';

import * as Parse from 'parse';

@Injectable({
  providedIn: 'root',
})
export class ParseDbService {
  constructor() {}

  async getAllSongs(): Promise<Song[]> {
    try {
      const response = await Parse.Cloud.run('getAllSongs');
      const mappedResponse = this.mapResponse(response);
      return mappedResponse;
    } catch (error) {
      alert(JSON.stringify(error, null, 2));
    }
  }

  mapResponse(responseSet): Song[] {
    const tempArr = [];

    responseSet.forEach((element) => {
      const tempObj: Song = {
        id: element.id,
        name: element.attributes.name,
        artist: element.attributes.artist,
        album: element.attributes.album,
      };

      tempArr.push(tempObj);
    });

    return tempArr;
  }

  async createSong(): Promise<void> {
    try {
      const response = await Parse.Cloud.run('createSong');
      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteSong(): Promise<void> {
    try {
      const response = await Parse.Cloud.run('deleteSong');
      return response;
    } catch (error) {
      throw error;
    }
  }
}
