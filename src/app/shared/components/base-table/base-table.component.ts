import { ChangeDetectionStrategy, Component, inject, OnInit, } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { CRUDBaseService } from './base-curd.service';

@Component({
  selector: 'base-table',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class BaseTableComponent<T> implements OnInit {
  private readonly innerIsAdding = new BehaviorSubject(false);
  public data$!: Observable<T[]>;

  get isAdding$(): Observable<boolean> {
    return this.innerIsAdding.asObservable();
  }

  public constructor(private baseTableService: CRUDBaseService<T>) {}

  public ngOnInit(): void {
      this.getAllData();
  }

  public getAllData(): void {
    this.data$ = this.baseTableService.getAll();
  }

  public deleteItem(id: number): void {
    this.baseTableService.delete(id).subscribe(() => this.getAllData())
  }
}
