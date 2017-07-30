import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseService {
  private db: any[] = [{
    name: 'Ramiro',
    age: 28,
    bio: 'dsjnkakjnsakjsajksajkasjk'
  },
{
    name: 'Joselo',
    age: 18,
    bio: 'otra bio y otra cosa'
  }];

  constructor() {}

  data() {
    return this.db;
  }

}
