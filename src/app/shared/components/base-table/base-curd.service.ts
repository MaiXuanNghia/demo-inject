import {HttpClient, HttpParams} from '@angular/common/http';
import {map, Observable} from 'rxjs';

import { environment } from '../../../environment.ts/environment';
import { Endpoints } from "src/app/core/enums/endpoint.enum";


export class CRUDBaseService<T> {
    public constructor(private httpClient: HttpClient, private endpoint: Endpoints) {
    }

    public getAll(params?: HttpParams): Observable<T[]> {
        console.log(params);
        return this.httpClient.get<T[]>(`${environment.baseApiUrl}/${this.endpoint}`, {
            params: params
        });
    }

    public get(id: number): Observable<T> {
        return this.httpClient.get<T>(`${environment.baseApiUrl}/${this.endpoint}/${id}`);
    }

    public create(input: T): Observable<T> {
        return this.httpClient.post<T>(`${environment.baseApiUrl}/${this.endpoint}`, input);
    }

    public delete(id: number): Observable<T> {
        return this.httpClient.delete<T>(`${environment.baseApiUrl}/${this.endpoint}/${id}`);
    }
}