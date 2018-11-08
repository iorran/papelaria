import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataBundleService {
    private field: string;

    constructor(private _storage: Storage) {
        this.field = 'field';
    }

    save(data: any) {
        this._storage.setItem(this.field, JSON.stringify(data));
    }

    getField() {
        const data = this._storage.getItem(this.field);
        return JSON.parse(data);
    }

    cleanAll() {
        this._storage.clear();
    }

    clearField(key: string) {
        this._storage.removeItem(key); 
    }
}
