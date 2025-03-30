import { Component, computed, input, linkedSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldsetModule } from 'primeng/fieldset';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-link-signals-example',
	imports: [FieldsetModule, CommonModule, TabsModule, ButtonModule],
	templateUrl: './link-signals-example.component.html',
	styleUrl: './link-signals-example.component.scss',
})
export class LinkSignalsExampleComponent {
	options = input<string[]>([]);

	// why use linkedSignal
	// selectedOption = computed(() => this.options().at(-1) || null);

	selectedOption = linkedSignal(() => this.options().at(-1) || null);

	// more advance, can be interface
	// selectedOption = linkedSignal({
	// 	source: () => this.options(),
	// 	computation: (source, previous) => {
	// 		console.log('previous: ', previous);
	// 		return source.at(-1) || null;
	// 	},
	// });

	protected isSelected(option: string) {
		return this.selectedOption() === option;
	}
}
