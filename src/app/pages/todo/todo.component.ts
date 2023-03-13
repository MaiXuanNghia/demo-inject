import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Endpoints } from './../../core/enums/endpoint.enum';
import { CRUDBaseService } from '../../shared/components/base-table/base-curd.service';
import { Todo } from './../../core/types/todo.model.d';
import { BaseTableComponent } from './../../shared/components/base-table/base-table.component';
import { getAllWithParam } from 'src/app/shared/utils/crud-utils';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [
    {
      provide: CRUDBaseService, 
      useFactory: () => {
        const httpClient = inject(HttpClient);
        return new CRUDBaseService<Todo>(httpClient, Endpoints.TODOS)
      },
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent extends BaseTableComponent<Todo> {

  private getAllDateWithParams = getAllWithParam<Todo>();

  public constructor(private baseService: CRUDBaseService<Todo>) {
    super(baseService);
  }

  public refetch(): void {
    this.data$ = this.getAllDateWithParams();
  }
}
