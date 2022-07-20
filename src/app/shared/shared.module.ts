import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';

@NgModule({
  declarations: [SidebarMenuComponent],
  exports: [SidebarMenuComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
