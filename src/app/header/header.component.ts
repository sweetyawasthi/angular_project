import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentPage!: string;
  constructor(private router : Router) {
    router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        this.currentPage = event.url
      }
    })
  }

  ngOnInit(): void {
  }
}
