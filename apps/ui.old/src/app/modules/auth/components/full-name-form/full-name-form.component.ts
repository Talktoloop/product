import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '@app/core/services/api/profile/profile.service';
import { take } from 'rxjs';

const validationRegex = '^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,()]{1,}';

@Component({
  selector: 'app-full-name-form',
  templateUrl: './full-name-form.component.html',
  styleUrls: ['./full-name-form.component.scss'],
})
export class FullNameFormComponent implements OnInit {
  @Input() prefill: boolean;
  @Input() hideLastName = false;
  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(validationRegex)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(validationRegex)]),
  });

  get firstName(): string {
    return this.form.controls.firstName.value;
  }

  @Input() set firstName(value: string) {
    this.form.controls.firstName.setValue(value);
  }

  get lastName(): string {
    return this.form.controls.lastName.value;
  }

  @Input() set lastName(value: string) {
    this.form.controls.lastName.setValue(value);
  }

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    if (!this.prefill) {
      return;
    }
    this.profileService
      .getProfile()
      .pipe(take(1))
      .subscribe({
        next: (profile) => {
          this.form.setValue({
            firstName: profile.firstName,
            lastName: profile.lastName,
          });
        },
      });
  }

  getCustomErrorKeys(): Map<string, string> {
    const map = new Map<string, string>();
    map.set('minlength', 'auth.registerIndividual.form.errors.minLength');
    map.set('pattern', 'auth.registerIndividual.form.errors.pattern');
    map.set('required', 'auth.registerIndividual.form.errors.required');
    return map;
  }

  onHideLastNameChanged(hideLastName) {
    this.hideLastName = hideLastName;
  }

  checkAndMarkValidationErrors() {
    const firstName = this.form.controls.firstName.value;
    const lastName = this.form.controls.lastName.value;

    if (this.form.invalid) {
      this.form.controls.firstName.markAsDirty();
      this.form.controls.firstName.markAsTouched();
      this.form.controls.lastName.markAsDirty();
      this.form.controls.lastName.markAsTouched();
      this.form.setValue({ firstName, lastName });
      return;
    }
  }
}
