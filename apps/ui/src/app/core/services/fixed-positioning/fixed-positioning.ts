import { Injectable } from '@angular/core';
import { FixedElementData } from '@core/services/fixed-positioning/fixed-position.model';

@Injectable({
  providedIn: 'root',
})
export class FixedPositioning {
  private static setStyle(element: HTMLElement, style: string, value: string): void {
    element.style[style] = value;
  }

  private static setPosition(element: HTMLElement, from: 'top' | 'bottom', value?: number): void {
    FixedPositioning.setStyle(element, from, value !== undefined ? value + 'px' : 'unset');
  }

  private static switchFixedPosition(element: HTMLElement, isFixed: boolean): void {
    isFixed ? FixedPositioning.setStyle(element, 'position', 'fixed') : FixedPositioning.setStyle(element, 'position', 'absolute');
  }

  private static isElementFitsInContainer(elementHeight: number, containerHeight: number): boolean {
    return elementHeight < containerHeight;
  }

  private static isWindowScrolledToElementTop(
    componentTopOffset: number,
    scrollTopPosition: number,
    documentTopPadding: number,
    fixedElementScroll: number,
  ): boolean {
    return scrollTopPosition > componentTopOffset - documentTopPadding - fixedElementScroll;
  }

  private static isWindowScrolledToElementBottom(
    windowHeight: number,
    scrollPosition: number,
    componentTopOffset: number,
    fixedElementHeight: number,
    fixedElementPadding: number,
  ): boolean {
    return scrollPosition + windowHeight > componentTopOffset + fixedElementHeight + fixedElementPadding;
  }

  private static disable(fixedElement: HTMLElement): void {
    FixedPositioning.setPosition(fixedElement, 'top');
    FixedPositioning.setPosition(fixedElement, 'bottom');
    FixedPositioning.setStyle(fixedElement, 'position', 'unset');
    FixedPositioning.setStyle(fixedElement, 'width', 'unset');
  }

  private static setWidth(fixedElement: HTMLElement, containerElementWidth): void {
    FixedPositioning.switchFixedPosition(fixedElement, true);
    FixedPositioning.setStyle(fixedElement, 'width', containerElementWidth / 2 + 'px');
  }

  private static isScrolledToPageBottom(scrollBottom: number, documentHeight: number): boolean {
    return scrollBottom >= documentHeight;
  }

  positionFixedElement(data: FixedElementData, isDisabled: boolean): void {
    const windowHeight = window.innerHeight;
    const scrollTopPosition = window.scrollY;
    const scrollBottomPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.body.offsetHeight;
    const windowBottomOffsetFromDocument = documentHeight - scrollBottomPosition;
    const fixedElementHeight = data.fixedElement.offsetHeight;
    const componentTopOffset = data.containerElement.offsetTop;
    const componentTopWindowOffset = data.containerElement.getBoundingClientRect().top;
    const visibleContentInWindowHeight = windowHeight - (data.documentTopPadding + data.fixedElementPadding);
    const containerElementWidth = data.containerElement.offsetWidth;
    const containerElementHeight = data.containerElement.offsetHeight;
    let isContainerHeightSet;

    if (isDisabled) {
      FixedPositioning.disable(data.fixedElement);
      return;
    } else {
      FixedPositioning.setWidth(data.fixedElement, containerElementWidth);
    }

    if (FixedPositioning.isElementFitsInContainer(fixedElementHeight, visibleContentInWindowHeight)) {
      FixedPositioning.switchFixedPosition(data.fixedElement, true);
      FixedPositioning.setPosition(data.fixedElement, 'bottom');
      if (
        FixedPositioning.isWindowScrolledToElementTop(
          componentTopOffset,
          scrollTopPosition,
          data.documentTopPadding,
          data.fixedElementPadding,
        )
      ) {
        FixedPositioning.setPosition(data.fixedElement, 'top', data.documentTopPadding + data.fixedElementPadding);
      } else {
        FixedPositioning.switchFixedPosition(data.fixedElement, true);
        FixedPositioning.setPosition(data.fixedElement, 'top', componentTopWindowOffset);
      }
    } else {
      if (fixedElementHeight > containerElementHeight && !isContainerHeightSet) {
        isContainerHeightSet = true;
        FixedPositioning.setStyle(data.containerElement, 'height', fixedElementHeight + 'px');
      }
      FixedPositioning.switchFixedPosition(data.fixedElement, false);
      FixedPositioning.setPosition(data.fixedElement, 'top');
      if (
        FixedPositioning.isWindowScrolledToElementBottom(
          windowHeight,
          scrollTopPosition,
          componentTopOffset,
          fixedElementHeight,
          data.fixedElementPadding,
        )
      ) {
        FixedPositioning.switchFixedPosition(data.fixedElement, true);
        FixedPositioning.setPosition(data.fixedElement, 'bottom', data.fixedElementPadding);
        if (FixedPositioning.isScrolledToPageBottom(scrollBottomPosition, documentHeight)) {
          FixedPositioning.switchFixedPosition(data.fixedElement, true);
          FixedPositioning.setPosition(data.fixedElement, 'bottom', data.fixedElementPadding - windowBottomOffsetFromDocument);
        }
      } else {
        FixedPositioning.switchFixedPosition(data.fixedElement, false);
        FixedPositioning.setPosition(data.fixedElement, 'top', componentTopOffset);
      }
    }
  }
}
