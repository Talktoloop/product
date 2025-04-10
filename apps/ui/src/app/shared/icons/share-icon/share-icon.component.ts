import { Component, Input } from '@angular/core';
import { endpoints } from "@core/services/api/endpoints";

@Component({
  selector: 'loop-share-icon',
  templateUrl: './share-icon.component.html',
  styleUrls: ['./share-icon.component.scss'],
})
export class ShareIconComponent {
  @Input() id: string;

  share(): void {
    const shareUrl = `${endpoints.feedbackSharing}${this.id}`;
    navigator.share({ url: shareUrl });
  }
}
