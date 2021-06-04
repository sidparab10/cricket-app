import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnacbarService {
  constructor(private _snackBar: MatSnackBar) { }

  showNotification(msg: string, action?: string) {
    this._snackBar.open(msg, action ? action : 'OK');
  }
}
