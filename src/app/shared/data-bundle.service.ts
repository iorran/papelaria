import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { resolve } from 'path';

@Injectable({
    providedIn: 'root'
})
export class DataBundleService {
    private field: string;

    constructor(private _storage: Storage) {
        this.field = 'field';
    }

    save(data: any) {
        this._storage.set(this.field, JSON.stringify(data));
    }

    getField(): Promise<string | void> {
        return this._storage.get(this.field)
            .then((data) => {
                return resolve(JSON.parse(data));
            })
            .catch((e) => console.error(e)); 
    }

    cleanAll() {
        this._storage.clear();
    }

    clearField(key: string) {
        this._storage.remove(key); 
    }
}
