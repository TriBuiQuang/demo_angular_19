import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';

import { HEADER_ITEMS } from './header.constant';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule, RouterLink],
})
export class HeaderComponent implements OnInit {
	items: MenuItem[] | undefined = HEADER_ITEMS;

	ngOnInit() {
		this.items = HEADER_ITEMS;
		console.log('this.');
	}
}
