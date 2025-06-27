import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { UIService } from '@core/services/ui/ui.service';

@Component({
  selector: 'loop-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectOptionComponent implements AfterViewInit, OnChanges {
  @ViewChild('content') content: ElementRef;
  @Input() prefix: boolean;
  @Input() suffix: boolean;
  @Input() autofocus: boolean;
  @Input() disabled: boolean;
  @Input() highlightedPhrase?: string;
  @Output() clicked = new EventEmitter<Event>();
  @ViewChild('optionContainer') optionContainerRef: ElementRef;
  private fullContent: string;

  constructor(private ui: UIService) {}

  handleOptionClick(event: Event): void {
    event.preventDefault();
    this.clicked.emit(event);
  }

  ngAfterViewInit(): void {
    if (this.highlightedPhrase) {
      this.fullContent = this.content?.nativeElement?.innerHTML;
    }
    this.highlightPhrase();
    if (this.autofocus) {
      setTimeout(() => {
        this.optionContainerRef.nativeElement.focus();
      });
    }
  }

  private highlightPhrase(): void {
    if (!this.fullContent) {
      return;
    }
    this.content.nativeElement.innerHTML = this.ui.getBoldPhrase(this.highlightedPhrase, this.fullContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.highlightPhrase();
  }
}
