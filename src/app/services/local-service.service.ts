import { Injectable } from '@angular/core';
import i18next from 'i18next';
import localization from '../../assets/localization-en.json';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {
    i18next.init(
      {
        lng: 'en',
        debug: true,
        resources: {
          en: {
            translation: localization,
          },
        },
      },
      function (err, t) {}
    );
  }

  getLocalText(key?: string) {
    return key !== undefined ? i18next.t(key) : '';
  }
}
