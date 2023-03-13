import { HttpParams } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { CRUDBaseService } from '../components/base-table/base-curd.service';

export function deleteItemFn<T>(): (id: number) => Observable<T> {
  const curdService = inject(CRUDBaseService<T>);
  return (id: number) => curdService.delete(id);
}

export function getAllWithParam<T>(): () => Observable<T[]> {
  const curdService = inject(CRUDBaseService<T>);
  const activeRoute = inject(Router);

  return () =>
    activeRoute.routerState.root.queryParams.pipe(
      switchMap((queries) => {
        const params: HttpParams = new HttpParams({fromObject: queries});
        return curdService.getAll(params);
      })
    );
}
