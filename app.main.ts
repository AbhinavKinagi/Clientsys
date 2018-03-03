import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
  <!DOCTYPE html>
  <html>
  <body>
  <header class="ng-isolate-scope">
  <div class="header">
  <div class="container"><a ui-sref="home" href="/"><img class="header__logo" src="/images/proximity-marketing/logo.svg"></a>
  <div class="header__sidebar">
  <ul class="sidebar"><li class="sidebar__item"><a class="sidebar__link">Products</a>
  <ul class="sidebar__sub sidebar-sub"><li class="sidebar-sub__item">
  <a class="sidebar-sub__link" ui-sref="proximityMarketing" href="/proximity-marketing/overview">Proximity Marketing</a></li>
  <li class="sidebar-sub__item"><a class="sidebar-sub__link" ui-sref="rtls" href="/rtls/overview">RTLS</a></li>
  <li class="sidebar-sub__item"><a class="sidebar-sub__link" ui-sref="locationAnalytics" href="/location-analytics/overview">Location Analytics</a></li>
  </ul></li><li class="sidebar__item"><a class="sidebar__link" ui-sref="store" href="/store">Store</a><!--      <ul class="sidebar__sub sidebar-sub">
                              <li class="sidebar-sub__item">
                                  <a class="sidebar-sub__link" ui-sref="proximityDemoKit">Proximity Demo Kit</a>
                              </li>
                              <li class="sidebar-sub__item">
                                  <a class="sidebar-sub__link" ui-sref="proximityPilotSmall">Proximity Pilot - Small</a>
                              </li>
                              <li class="sidebar-sub__item">
                                  <a class="sidebar-sub__link" ui-sref="proximityPilotLarge">Proximity Pilot - Large</a>
                              </li>
                              <li class="sidebar-sub__item">
                                  <a class="sidebar-sub__link" ui-sref="rtlsPilot">RTLS Pilot</a>
                              </li>
                          </ul>
                    --></li><li class="sidebar__item"><a class="sidebar__link" ui-sref="forPartners" href="/for-partners">For Partners</a></li><li class="sidebar__item"><a class="sidebar__link" ui-sref="forDevelopers" href="/for-developers">For Developers</a></li><li class="sidebar__item"><a class="sidebar__link" ui-sref="caseStudies" href="/case-studies">Case Studies</a></li><!--<li class="sidebar__item">
                    <a class="sidebar__link" ui-sref="blog">Blog</a>
                </li>--><li class="sidebar__item"><a class="sidebar__link">Company</a><ul class="sidebar__sub sidebar-sub"><li class="sidebar-sub__item"><a class="sidebar-sub__link" ui-sref="companyAndTeam" href="/company-and-team">Company and Team</a></li><li class="sidebar-sub__item"><a class="sidebar-sub__link" ui-sref="resources" href="/resource">Resources</a></li><li class="sidebar-sub__item"><a class="sidebar-sub__link" ui-sref="blog" href="/blog">Blog</a></li><li class="sidebar-sub__item"><a class="sidebar-sub__link" ui-sref="newsroom" href="/newsroom">Newsroom</a></li></ul></li><li class="sidebar__item"><a class="sidebar__link" ui-sref="contactUs" href="/contact-us">Contact us</a></li></ul></div><div class="header__button hidden-xs hidden-sm"><button class="btn-round btn-round--blue ng-isolate-scope" type="button" send-form-popup="Get a quote" is-quote="true">Get a quote</button><!--           <md-button md-theme="ltg-buttons" class="md-button--round md-raised md-accent"
                                  type="button"


                                  send-form-popup="Get a quote">
                           Get a quote
                       </md-button>--></div><div class="header__mobile-menu mobile-menu visible-sm visible-xs ng-isolate-scope" toggle-menu=""><p class="mobile-menu__link">MENU</p><div class="mobile-menu__lines"><span class="mobile-menu__first"></span> <span class="mobile-menu__middle"></span> <span class="mobile-menu__last"></span></div></div></div></div></header>
  </body>
  <link href="/css/vendor-5dba17e7e6.css" rel="stylesheet">
  <link href="/css/style-bb7788cf91.css" rel="stylesheet">
  </html>
  `,
    styleUrls: ['./app.component.css']
})
export class MainComponent {
    title = 'app';
}
