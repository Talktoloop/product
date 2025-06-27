import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModalBase } from '../../../../new-story-v2/modals/modal.base';

@Component({
  selector: 'loop-see-process-modal',
  templateUrl: './see-process-modal.component.html',
  styleUrls: ['./see-process-modal.component.scss'],
})
export class SeeProcessModalComponent extends ModalBase {
  translationsSectionsParagraphs: string[][] = [
    ['firstParagraph', 'secondParagraph'],
    ['firstParagraph', 'secondParagraph'],
    ['firstParagraph'],
    ['firstParagraph', 'secondParagraph'],
    ['firstParagraph'],
    ['firstParagraph'],
    ['firstParagraph', 'secondParagraph'],
    ['firstParagraph', 'secondParagraph'],
    ['firstParagraph'],
  ];

  homeLinkIndexes = { i: 0, j: 0 };
  hereLinkIndexes = { i: 1, j: 0 };

  constructor(@Inject('close$') close$, private translate: TranslateService) {
    super(close$);
  }

  getParagraphTranslation(i: number, j: number, paragraph: string): string {
    const translationKey = `statisticsCases.accountabilityProcess.seeProcess.list.${i + 1}.${paragraph}`;
    if (i === this.homeLinkIndexes.i && j === this.homeLinkIndexes.j) {
      return this.translate.instant(translationKey, {
        homeLink: `<a class="link bold" href="${window.location.origin}">${window.location.origin}</a>`,
      });
    } else if (i === this.hereLinkIndexes.i && j === this.hereLinkIndexes.j) {
      return this.translate.instant(translationKey, {
        hereLink: `<a class="link bold" href="${window.location.origin}">${this.translate.instant('global.here').toLowerCase()}</a>`,
      });
    } else {
      return this.translate.instant(translationKey);
    }
  }
}
