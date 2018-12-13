import { Injectable } from '@angular/core';
import { CanLoad,
         Route,
         UrlSegment,
         Router,
         UrlTree } from '@angular/router';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class CanLoadGuard implements CanLoad {

  constructor(private router: Router) {}

  // This return signature is incorrect - can't return a UrlTree here
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    console.log('in can load guard');
    console.log(route);
    console.log(segments);

    // returning a UrlTree here will not cause a redirect
    const url = 'target';
    const tree: UrlTree = this.router.parseUrl(url);

    // return true to load the feature comp
    return (tree as any);
  }
}
