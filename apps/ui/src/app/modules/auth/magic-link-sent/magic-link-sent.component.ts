import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth/auth.service';

@Component({
  selector: 'app-magic-link-sent',
  templateUrl: './magic-link-sent.component.html',
  styleUrls: ['./magic-link-sent.component.scss'],
})
export class MagicLinkSentComponent implements OnInit {
  email: string;
  timeLeft: number;
  private readonly TIMER_DURATION_IN_SECONDS = 60;

  constructor(private router: Router, private authService: AuthService) {
    this.email = this.router.getCurrentNavigation().extras.state.email;
  }

  ngOnInit(): void {
    this.startTimer();
  }

  resendEmail() {
    this.authService.sendMagicLink(this.email).subscribe({
      next: () => {
        this.startTimer();
      },
      error: () => {
        this.startTimer();
      },
    });
  }

  private startTimer() {
    this.timeLeft = this.TIMER_DURATION_IN_SECONDS;
    const interval = setInterval(() => {
      this.timeLeft -= 1;

      if (this.timeLeft < 1) {
        clearInterval(interval);
      }
    }, 1000);
  }
}
