import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay, withIncrementalHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		// this will enable Incremental Hydration
		// provideClientHydration(withIncrementalHydration()), // 🔥 Kích hoạt Hydration từng phần
		provideClientHydration(withEventReplay()), // 🔥 Kích hoạt Hydration giữ lại sự kiện
		provideAnimationsAsync(),
		providePrimeNG({
			theme: {
				preset: Aura,
			},
			ripple: true,
		}),
	],
};
