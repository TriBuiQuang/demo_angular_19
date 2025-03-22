import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
	selector: 'app-core-reactivity-primitives',
	imports: [FieldsetModule],
	templateUrl: './core-reactivity-primitives.component.html',
	styleUrl: './core-reactivity-primitives.component.scss',
})
export class CoreReactivityPrimitivesComponent {
	imgSrcInputExample = './assets/img/reactivity_input.png';
	imgSrcOutputExample = './assets/img/reactivity_output.png';
	imgSrcViewChildChildExample = './assets/img/reactivity_viewchild_child_component.png';
	imgSrcViewChildParentExample = './assets/img/reactivity_viewchild_parent_component.png';

	imgSrcLinkedSignalExample = './assets/img/reactivity_linked_signal.png';
}
