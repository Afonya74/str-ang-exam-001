import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  phrase: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
    this.router.navigate(['/heroes', { phrase: this.phrase }]);
  }
}
