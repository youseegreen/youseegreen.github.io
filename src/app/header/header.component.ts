import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbarToggler')
  navbarToggler: ElementRef;
  clang = 'ja';  // current Language

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {      
      const path = this.router.url.substring(1, 3);
      this.switchLanguage(path === "en"? "en": "ja");
    }, 10);
  }

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }

  switchLanguage(lang: string) {
    this.clang = lang;
    const isja = lang === 'ja';
    const isCurrentEn = this.router.url.substring(1, 3) === "en";

    if (isCurrentEn && !isja || !isCurrentEn && isja) return;
    if (isCurrentEn && isja) {
      this.router.navigate([this.router.url.substring(3)]);
    }
    else{
      this.router.navigate(['/en' + this.router.url]).catch((e) => {
        this.router.navigate(["/en"]);
      });
    }
  }
}
