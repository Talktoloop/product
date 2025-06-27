import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RtlService {
  public readonly rtlLanguages: string[] = ['ar'];

  isRtlLanguage(langCode: string): boolean {
    return this.rtlLanguages.includes(langCode);
  }

  setRtl(isRtl: boolean): void {
    const htmlTag = document.documentElement;
    htmlTag.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
  }

  getDirAttr(langCode: string): string {
    return this.isRtlLanguage(langCode) ? 'rtl' : 'ltr';
  }
}
