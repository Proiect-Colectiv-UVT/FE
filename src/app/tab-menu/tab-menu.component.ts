import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'navbar',
  template: `<p-tabMenu [model]="items"  > <button>click</button></p-tabMenu>`,
  styleUrls: ['./tab-menu.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TabMenuComponent implements OnInit {
  public items!: MenuItem[];
  //Behaviour subject
  
  constructor() { }
  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home']},
      {label: 'Create poll', icon: 'pi pi-plus', routerLink: ['/createpoll']},
      {label: 'View results', icon: 'pi pi-chart-bar'},
      {label: 'Settings', icon: 'pi pi-fw pi-cog', routerLink:['/profile/:id']}
  ];
  }

}
