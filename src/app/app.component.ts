import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title, Meta } from "@angular/platform-browser";
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //title = 'youseegreen-github-io';

  constructor(public router: Router, private route: ActivatedRoute, private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    //app.route.tsからmeta tagデータを引っ張り出してくるメソッド
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.route),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)).subscribe((event) => {
        this.updateDescription(event['title'], event['description'], event['keyword'], event['ogUrl']);
      });
  }

  // metaタグをアップデートするメソッド
  updateDescription(title: string, desc: string, keywords: string, url: string) {
    this.titleService.setTitle(title);
    this.meta.updateTag({ name: 'description', content: desc })
    this.meta.updateTag({ name: 'keywords', content: keywords })
    this.meta.updateTag({ property: 'og:url', content: url })
    //  this.meta.updateTag({ property: 'og:title', content: title })
    //  this.meta.updateTag({ property: 'og:description', content: desc })
  }
}

