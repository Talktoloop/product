import { AfterViewInit, Directive, ElementRef } from '@angular/core';

interface Input {
  name: string;
  value: string;
}

@Directive({
  selector: '[codeRepresent]',
})
export class CodeRepresentDirective implements AfterViewInit {
  htmlElement: HTMLElement;
  tag: string;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.htmlElement = this.elementRef.nativeElement;
    this.tag = this.htmlElement.tagName.toLowerCase();
    const preElement = document.createElement('pre');
    preElement.innerHTML = this.getCodeRepresentation();
    preElement.children[0].textContent = this.getSelectorWithInputs();
    this.htmlElement.parentNode.appendChild(preElement);
  }

  getCamelized(str: string): string {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match: string, index: any) => {
      if (+match === 0) return ''; //
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }

  getComponentInputs(): Input[] {
    const configAttributes = this.htmlElement.getAttributeNames().filter((attribute: string) => attribute.includes('ng-reflect'));
    const cleanAttributes = new Array<Input>();
    configAttributes.forEach((attribute: string) => {
      const cleanAttribute = this.getCamelized(attribute.replace('ng-reflect-', '')).replace(/-/g, '');
      const attributeValue = this.htmlElement.getAttribute(attribute);
      cleanAttributes.push({
        name: cleanAttribute,
        value: attributeValue,
      });
    });
    return cleanAttributes;
  }

  getInputsString() {
    const inputs = this.getComponentInputs();
    let htmlInputs = '';
    inputs.forEach((input: Input) => {
      const htmlRepresentation = ` [${input.name}]="${input.value}"`;
      htmlInputs += htmlRepresentation;
    });
    return htmlInputs;
  }

  getSelectorWithInputs() {
    return `<${this.tag}${this.getInputsString()}></${this.tag}>`;
  }

  getCodeRepresentation() {
    return `<code></code>`;
  }
}
