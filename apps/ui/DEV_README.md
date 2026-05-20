# Dev readme

## Shared components usage

## Shared services usage

### Notification Service / Toastr

Inject to the constructor:
`private toastr: ToastrService,`

this.toastr.info(`title`, `subtilte`, {`config`} as ToastIndividualConfig).onAction.subscribe((data) => ...);

#### Example

      this.toastr.error(
        this.translateService.instant(`admin.conversationReply.toast.send.error.title`),
        this.translateService.instant(`admin.conversationReply.toast.send.error.subtitle`)
        );

#### Notification types

error | info | success | warning

#### Notification config for buttons

{buttons: `array with buttons`}

public toastButtons: any[] = [
{
id: '1',
title: 'Button Label',
},
];
