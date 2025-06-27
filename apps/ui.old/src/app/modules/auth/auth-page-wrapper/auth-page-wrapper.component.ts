import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UIService } from '@app/core/services/ui/ui.service';
import { loopDesktopLogoSvg } from '../magic-link-login/loop-logo.svg';

@Component({
  selector: 'app-auth-page-wrapper',
  templateUrl: './auth-page-wrapper.component.html',
  styleUrls: ['./auth-page-wrapper.component.scss'],
})
export class AuthPageWrapperComponent implements OnInit {
  @Output() back = new EventEmitter();
  @Output() signOut = new EventEmitter();
  @Input() currentStep: number;
  @Input() autoHeight: boolean;
  @Input() showSignOutButton: boolean;
  isMobile: boolean;
  loopDesktopLogoSvg = this.sanitizer.bypassSecurityTrustHtml(loopDesktopLogoSvg);

  constructor(private sanitizer: DomSanitizer, private uiService: UIService) {}

  ngOnInit(): void {
    this.uiService.mobileView$.subscribe({
      next: (isMobile) => {
        this.isMobile = isMobile;
      },
    });
  }

  onBack() {
    this.back.emit();
  }

  onSignOut() {
    this.signOut.emit();
  }
}
