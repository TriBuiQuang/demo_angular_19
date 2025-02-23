import { Component } from '@angular/core';

@Component({
	selector: 'app-zoneless-change-detection',
	imports: [],
	templateUrl: './zoneless-change-detection.component.html',
	styleUrl: './zoneless-change-detection.component.scss',
})
export class ZonelessChangeDetectionComponent {
	codeZoneLess = `
	Example: typescript Copy Edit import { bootstrapApplication } from '@angular/platform-browser';
	import { provideExperimentalZonelessChangeDetection } from '@angular/core'; import { AppComponent } from './app.component';

	bootstrapApplication(AppComponent, {
		providers: [provideExperimentalZonelessChangeDetection()],
	});
	`;
}
