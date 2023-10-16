import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent {

  constructor(private translocoService: TranslocoService) {}

  public languagesList: Array<Record<'imgUrl' | 'iso' | 'name', string>> = [
    {
      imgUrl: '/assets/icons/flag_de.svg',
      iso: 'de',
      name: 'Deutsch'
    },
    {
      imgUrl: '/assets/icons/flag_en.svg',
      iso: 'en',
      name: 'English'
    },
  ];

  public activeLanguage: Record<'imgUrl' | 'iso' | 'name', string> = this.getLanguageRecord();

  public changeLanguage(languageCode: string): void {
    this.translocoService.setActiveLang(languageCode);
    this.activeLanguage = this.getLanguageRecord();
  };

  private getLanguageRecord(): Record<'imgUrl' | 'iso' | 'name', string> {
    return this.languagesList.find(x => x.iso == this.translocoService.getActiveLang()) || this.languagesList[0];
  };
}
