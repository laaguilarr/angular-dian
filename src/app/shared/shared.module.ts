import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FootbarComponent } from './footbar/footbar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent, FootbarComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [SidebarComponent, FootbarComponent],
})
export class SharedModule {}
