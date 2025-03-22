import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
	selector: 'app-zoneless-change-detection',
	imports: [FieldsetModule],
	templateUrl: './zoneless-change-detection.component.html',
	styleUrl: './zoneless-change-detection.component.scss',
})
export class ZonelessChangeDetectionComponent {
	imgSrc = 'assets/img/zoneless_change_detection.png';
	imgWithOutPolyfillsSrc = 'assets/img/without_polyfills.png';
	imgWithPolyfillsSrc = 'assets/img/with_polyfills.png';
}
