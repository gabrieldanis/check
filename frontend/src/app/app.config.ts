import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { LucideDumbbell, provideLucideIcons, LucideBroom, LucideBookOpenText, LucideUserGroup } from '@lucide/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
      provideLucideIcons(
        LucideDumbbell,
        LucideBroom,
        LucideBookOpenText,
        LucideUserGroup
    ),
  ]
};
