import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor(private _storage: Storage) { }

  set(key: string, value: any) {
    this._storage.set(key, value);
  }

  get(key: string) {
    return this._storage.get(key);
  }

  remove(key: string) {
    this._storage.remove(key);
  }
}
