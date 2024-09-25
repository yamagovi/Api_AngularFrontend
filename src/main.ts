import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app/app-routing.module'; 


  bootstrapApplication(AppComponent, {
    providers: [
      // Proveedores globales aquí
      provideClientHydration(),
      { provide: HttpClientModule, useValue: HttpClientModule },
      { provide: FormsModule, useValue: FormsModule },
      AppRoutingModule,
    ]
  }).catch(err => console.error(err));

