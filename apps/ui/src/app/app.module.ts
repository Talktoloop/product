import { PlatformModule } from '@angular/cdk/platform';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, ErrorHandler, Injector, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevComponentsModule } from '@app/modules/dev-components/dev-components.module';
import { CoreModule } from '@core/core.module';
import { AuthInterceptor } from '@core/services/interceptors/auth-interceptor.service';
import { CognitoSessionInterceptor } from '@core/services/interceptors/cognito-session-interceptor.service';
import { CsrfInterceptor } from '@core/services/interceptors/csrf-interceptor.service';
import { HttpErrorInterceptor } from '@core/services/interceptors/http-error-interceptor.service';
import { LangInterceptor } from '@core/services/interceptors/lang-interceptor.service';
import { environment } from '@env/environment';
import { TranslateModule } from '@ngx-translate/core';
import { AsideModule } from '@shared/components/aside/aside.module';
import { InlineLoadingModule } from '@shared/components/inline-loading/inline-loading.module';
import { LoopToastComponent } from '@shared/components/loop-toast/loop-toast.component';
import { NotFoundModule } from '@shared/components/not-found/not-found.module';
import { setAppInjector } from '@shared/consts/app-injector';
import { CloseIconModule } from '@shared/icons/close-icon/close-icon.module';
import { InfoIconModule } from '@shared/icons/info-icon/info-icon.module';
import { RollbarErrorHandler } from '@shared/logger/rollbar/rollbar';
import { LoopDesignSystemModule } from '@shared/loop-design-system/loop-design-system.module';
import { SharedModule } from '@shared/shared.module';
import { MatDayjsDateModule, MAT_DAYJS_DATE_ADAPTER_OPTIONS } from '@vanrossumict/material-dayjs-adapter';
import { AutosizeModule } from 'ngx-autosize';
import { CookieService } from 'ngx-cookie-service';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { ToastrModule } from 'ngx-toastr';
import { appPreInit } from './app-preinit';
import { AppPreinitService } from './app-preinit.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, LoopToastComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    NotFoundModule,
    SharedModule,
    InlineLoadingModule,
    TranslateModule,
    PlatformModule,
    MatDayjsDateModule,
    AsideModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGoogleAnalyticsModule.forRoot(environment.gaTrackingCode),
    NgxGoogleAnalyticsRouterModule,
    ToastrModule.forRoot({
      toastComponent: LoopToastComponent,
      closeButton: true,
      timeOut: 40000,
      toastClass: '',
    }),
    InfoIconModule,
    CloseIconModule,
    LoopDesignSystemModule,
    DevComponentsModule,
    AutosizeModule,
  ],
  providers: [
    AppPreinitService,
    {
      provide: APP_INITIALIZER,
      useFactory: appPreInit,
      multi: true,
      deps: [AppPreinitService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CsrfInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CognitoSessionInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LangInterceptor,
      multi: true,
    },
    CookieService,
    {
      provide: ErrorHandler,
      useClass: RollbarErrorHandler,
    },
    { provide: MAT_DAYJS_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    setAppInjector(injector);
  }
}
