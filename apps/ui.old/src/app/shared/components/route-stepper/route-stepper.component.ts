import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteStep } from './route-step.model';

@Component({
  selector: 'app-route-stepper',
  templateUrl: './route-stepper.component.html',
  styleUrls: ['./route-stepper.component.scss'],
})
export class RouteStepperComponent {
  @Input() steps: RouteStep[] = [];

  constructor(public activatedRoute: ActivatedRoute) {}
}
