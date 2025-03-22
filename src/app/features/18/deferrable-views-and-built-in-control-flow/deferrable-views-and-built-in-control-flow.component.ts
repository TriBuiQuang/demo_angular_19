import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';

import { ExampleDeferComponent } from './example-defer/example-defer.component';

@Component({
	selector: 'app-deferrable-views-and-built-in-control-flow',
	imports: [FieldsetModule, ExampleDeferComponent],
	templateUrl: './deferrable-views-and-built-in-control-flow.component.html',
	styleUrl: './deferrable-views-and-built-in-control-flow.component.scss',
})
export class DeferrableViewsAndBuiltInControlFlowComponent {
	user = {
		name: 'John Doe',
	};

	items = Array.from({ length: 10 }).map((_, index) => ({ id: index, name: `Item ${index}` }));
}
