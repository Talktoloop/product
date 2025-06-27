import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  StaticProvider,
  TemplateRef,
  Type,
} from '@angular/core';
import { ModalBase } from '@app/modules/new-story-v2/modals/modal.base';
import { ModalRoutingService } from '@app/shared/utils/modal-routing.service';
import { ModalV2Component } from '@shared/components/modal-v2/modal-v2.component';
import { Observable, Subject, Subscription } from 'rxjs';
import { UIService } from '../ui/ui.service';

@Injectable({ providedIn: 'root' })
export class ModalServiceV2 {
  private userClickedBackButton$: Subscription;
  constructor(
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private ui: UIService,
    private modalRoutingService: ModalRoutingService,
  ) {}

  open<T>(type: Type<T & ModalBase>, config?: any): T {
    this.setVisibleVariables();
    const componentRef = this.createComponent(type, config);
    const modalId = this.modalRoutingService.routeToModal();
    this.attachComponentToView(componentRef, componentRef.instance.close$, modalId);
    return componentRef.instance;
  }

  openWithTemplate(templateRefs: TemplateRef<any>[]): ModalV2Component {
    const close$ = new Subject<void>();
    this.setVisibleVariables();
    const componentRef = this.createPureModalComponentWithTemplates(templateRefs, close$);
    const modalId = this.modalRoutingService.routeToModal();
    this.attachComponentToView(componentRef, close$, modalId);
    return componentRef.instance;
  }

  destroy(componentRef: ComponentRef<any>): void {
    this.userClickedBackButton$.unsubscribe();
    setTimeout(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    }, 300);
  }

  private createComponent<T>(type: Type<T>, config?: any): ComponentRef<T> {
    const injector = Injector.create({ providers: this.prepareInputProviders(config) });
    return this.cfr.resolveComponentFactory(type).create(injector);
  }

  private createPureModalComponentWithTemplates(templateRefs: TemplateRef<any>[], close$: Subject<any>): ComponentRef<ModalV2Component> {
    const templateArr = templateRefs.map((t) => {
      const eView = t.createEmbeddedView({});
      eView.detectChanges();
      return eView.rootNodes;
    });
    const inj = Injector.create({
      providers: [
        {
          provide: 'close$',
          useValue: close$,
        },
      ],
    });
    return this.cfr.resolveComponentFactory(ModalV2Component).create(inj, templateArr);
  }

  private prepareInputProviders(config?: any): StaticProvider[] {
    const providers: StaticProvider = new Array<StaticProvider>();
    providers.push({
      provide: 'close$',
      useValue: new Subject(),
    });

    const additionalProviders =
      config &&
      Object.keys(config).map((key) => {
        return {
          provide: key,
          useValue: config[key],
        };
      });
    return additionalProviders ? [...providers, ...additionalProviders] : providers;
  }

  private attachComponentToView<T>(componentRef: ComponentRef<T>, close$: Observable<void>, modalId: number): void {
    close$.subscribe(() => {
      this.destroy(componentRef);
      this.modalRoutingService.routeFromModal(true);
    });
    this.userClickedBackButton$ = this.modalRoutingService.userClickedBackButton$.subscribe((closingNowModalId: number) => {
      if (modalId !== closingNowModalId) {
        return;
      }
      this.destroy(componentRef);
      this.modalRoutingService.routeFromModal(false);
    });
    this.appRef.attachView(componentRef.hostView);
    const domEl = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    setTimeout(() => {
      this.appRef.components[0].location.nativeElement.appendChild(domEl);
    });
  }

  private setVisibleVariables(): void {
    this.ui.animationStart = true;
  }
}
