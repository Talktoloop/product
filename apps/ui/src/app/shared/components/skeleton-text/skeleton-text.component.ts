import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-text',
  templateUrl: './skeleton-text.component.html',
  styleUrls: ['./skeleton-text.component.scss'],
})
export class SkeletonTextComponent {
  @Input() set lines(value: any) {
    this._lines = [...Array(value).keys()];
  }

  get lines(): number[] {
    return this._lines;
  }

  private _lines: number[];
}
