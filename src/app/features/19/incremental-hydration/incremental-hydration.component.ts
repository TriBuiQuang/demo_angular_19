import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
	selector: 'app-incremental-hydration',
	imports: [FieldsetModule],
	templateUrl: './incremental-hydration.component.html',
	styleUrl: './incremental-hydration.component.scss',
})
export class IncrementalHydrationComponent {
	imgSrcHistory = './assets/img/hydration_history_in_angular.png';
	imgSrcHowWork = './assets/img/how_does_hydration_work.png';
}
