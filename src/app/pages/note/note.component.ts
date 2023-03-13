import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Note } from './../../core/types/note.model.d';
import { BaseTableComponent } from './../../shared/components/base-table/base-table.component';
import { Endpoints } from './../../core/enums/endpoint.enum';
import { CRUDBaseService } from '../../shared/components/base-table/base-curd.service';


@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  providers: [
    {
      provide: CRUDBaseService, 
      useFactory: (httpClient: HttpClient) => {
        return new CRUDBaseService<Note>(httpClient, Endpoints.NOTES)
      },
      deps: [HttpClient]
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent extends BaseTableComponent<Note> {

  public constructor(private baseService: CRUDBaseService<Note>) {
    super(baseService);
  }
}
