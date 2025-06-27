import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BannerTheme } from '@app/shared/loop-design-system/components/banner/banner-theme.enum';
import { RequiredTagState } from '@app/shared/loop-design-system/components/tags/required-tag-state.enum';
import { SimpleTagTheme } from '@app/shared/loop-design-system/components/tags/simple-tag-theme.enum';
import { TagSize } from '@app/shared/loop-design-system/components/tags/tag-size.enum';
import { StoryCategory } from '@app/shared/types/story-category.type';
import LoopIcon from '@shared/loop-design-system/components/loop-icon';

@Component({
  selector: 'app-dev-components',
  templateUrl: './dev-components.component.html',
  styleUrls: ['./dev-components.component.scss'],
})
export class DevComponentsComponent {
  BannerTheme = BannerTheme;
  LoopIcon = LoopIcon;
  RequiredTagState = RequiredTagState;
  SimpleTagTheme = SimpleTagTheme;
  StoryCategory = StoryCategory;
  TagSize = TagSize;

  constructor(private sanitizer: DomSanitizer) {}

  getSanitizedUrl(url): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
