

import {Routes} from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () => import('./pages/welcome/welcome.component').then(m => m.WelcomeComponent),
    },
    {
        path: 'todos',
        loadComponent: () => import('./pages/todo/todo.component').then(m => m.TodoComponent),
    },
    {
        path: 'notes',
        loadComponent: () => import('./pages/note/note.component').then(m => m.NoteComponent),
    },
] as Routes;