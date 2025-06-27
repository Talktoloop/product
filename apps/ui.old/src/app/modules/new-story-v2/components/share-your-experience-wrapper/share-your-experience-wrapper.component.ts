import { Component, OnInit } from '@angular/core';
import { ShareExperienceModalComponent } from '@app/modules/new-story-v2/modals/share-experience-modal/share-experience-modal.component';
import { ModalServiceV2 } from '@core/services/modal/modal-v2.service';

@Component({
  template: ``,
})
export class ShareYourExperienceWrapperComponent implements OnInit {
  constructor(private modalService: ModalServiceV2) {}

  ngOnInit(): void {
    this.modalService.open(ShareExperienceModalComponent);
  }
}
