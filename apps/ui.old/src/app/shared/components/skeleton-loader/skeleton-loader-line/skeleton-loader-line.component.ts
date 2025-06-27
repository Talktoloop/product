import { Component, Input } from '@angular/core';
import { SkeletonLine } from '@shared/components/skeleton-loader/line-type.type';

@Component({
  selector: 'app-skeleton-loader-line',
  templateUrl: './skeleton-loader-line.component.html',
  styleUrls: ['./skeleton-loader-line.component.scss'],
})
export class SkeletonLoaderLineComponent {
  @Input() type: SkeletonLine;
}
