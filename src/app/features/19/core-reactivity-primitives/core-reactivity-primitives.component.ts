import { Component, computed, linkedSignal, resource, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';

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

	//#region Linked Signal
	options = signal(['apple', 'banana', 'fig']);
	currentTab = signal(0);

	// Choice defaults to the first option, but can be changed.
	choice = linkedSignal(() => this.options()[0]);
	// choiceComputed = computed(() => this.options()[0]);
	//#endregion Linked Signal

	//#region Resource
	query = signal('');

	// Can be do this with resource
	// products = resource({
	// 	loader: async () => {
	// 		const products = await fetch('http://localhost:3000/api/products');
	// 		return products.json();
	// 	},
	// });

	products = resource<any[], { query: string }>({
		request: () => ({ query: this.query() }),
		loader: async ({ request, abortSignal }) => {
			console.log('request : ', request);
			let filter = request.query ? '?name=' + request.query : '';

			const products = await axios.get(`http://localhost:3000/api/products${filter}`, {
				signal: abortSignal,
			});
			// .catch((error) => {
			// 	console.error('error : ', error);
			// 	return { data: [] };
			// });

			console.log('products : ', products.data.data);
			return products.data.data;
		},
	});

	//#endregion Resource

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

	addProduct() {
		console.log('this.products', this.products.value());
		const product = { id: this.products.value()?.length || 0, name: this.query() };

		this.products.update((products) => (products ? [product, ...products] : [product]));
		axios.post('http://localhost:3000/api/products', { name: this.query() });
	}
}
