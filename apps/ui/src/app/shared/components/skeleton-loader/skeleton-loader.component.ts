import { Component, Input } from '@angular/core';
import { SkeletonLine } from '@shared/components/skeleton-loader/line-type.type';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
})
export class SkeletonLoaderComponent {
  @Input() lines: SkeletonLine[] = [];

  trackByLine(index: number, line: SkeletonLine): any {
    return index + line;
  }
}
