// modules
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent }     from './app.component';
import { NavbarComponent }  from './components/navbar/navbar.component';

@NgModule({
  // modules
  imports: [ BrowserModule, HttpClientModule ],
  // components
  declarations: [ AppComponent, NavbarComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}