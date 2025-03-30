import { Component, linkedSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldsetModule } from 'primeng/fieldset';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { LinkSignalsExampleComponent } from 'app/features/19/core-reactivity-primitives/link-signals-example/link-signals-example.component';

@Component({
	selector: 'app-core-reactivity-primitives',
	imports: [FieldsetModule, CommonModule, TabsModule, ButtonModule, LinkSignalsExampleComponent],
	templateUrl: './core-reactivity-primitives.component.html',
	styleUrl: './core-reactivity-primitives.component.scss',
})
export class CoreReactivityPrimitivesComponent {
	imgSrcInputExample = './assets/img/reactivity_input.png';
	imgSrcOutputExample = './assets/img/reactivity_output.png';
	imgSrcViewChildChildExample = './assets/img/reactivity_viewchild_child_component.png';
	imgSrcViewChildParentExample = './assets/img/reactivity_viewchild_parent_component.png';

	imgSrcLinkedSignalExample = './assets/img/reactivity_linked_signal.png';
	imgSrcResourceExample = './assets/img/reactivity_resource.png';

	options = signal(['apple', 'banana', 'fig']);
	currentTab = signal(0);

	// Choice defaults to the first option, but can be changed.
	choice = linkedSignal(() => this.options()[0]);

	onClickSetLinkSignal = () => {
		console.log(this.choice());
		if (this.choice() === 'apple') {
			this.choice.set('fig');
		} else if (this.choice() === 'fig') {
			this.options.set(['peach', 'kiwi']);
		} else if (this.choice() === 'peach') {
			this.options.set(['apple', 'banana', 'fig']);
		}
	};

	onChangeTab = (index: any) => {
		if (index === this.currentTab()) return;
		console.log('onChange tab', index, typeof index);
		this.currentTab.set(index);
	};
}
