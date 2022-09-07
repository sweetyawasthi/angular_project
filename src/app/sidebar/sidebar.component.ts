import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  currentPage!: string;
  constructor(private router : Router) {
    router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        this.currentPage = event.url
        console.log(this.currentPage)
      }
    })
  }

  ngOnInit(): void {}
}
