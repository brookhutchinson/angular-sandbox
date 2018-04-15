// modules
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent }     from './app.component';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { UserComponent }    from './components/user/user.component';

@NgModule({
  // modules
  imports: [ BrowserModule, HttpClientModule ],
  // components
  declarations: [ AppComponent, NavbarComponent, UserComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}