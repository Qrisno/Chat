import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './core/services/auth.service';
import { SocketService } from './core/services/socket.service';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [SocketService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
