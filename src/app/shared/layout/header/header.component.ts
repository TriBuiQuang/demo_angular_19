import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';

import { HEADER_ITEMS } from './header.constant';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	imports: [Menubar, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule, RouterLink],
})
export class HeaderComponent implements OnInit {
	items: MenuItem[] | undefined;

	ngOnInit() {
		this.items = HEADER_ITEMS;
		console.log('this. in hdaer');
	}

	// ngOnInit() {
	// 	this.items = [
	// 		{
	// 			label: 'Router',
	// 			icon: 'pi pi-palette',
	// 			items: [
	// 				{
	// 					label: 'Installation',
	// 					route: '/installation',
	// 				},
	// 				{
	// 					label: 'Configuration',
	// 					route: '/configuration',
	// 				},
	// 			],
	// 		},
	// 	];
	// }
}
