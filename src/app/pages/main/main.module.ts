import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { MessageComponent } from 'src/app/shared/components/message/message.component';
import { MainComponent } from './main.component';
const routes: Route[] = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [MessageComponent, MainComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
  bootstrap: [],
})
export class MainPageModule {}
