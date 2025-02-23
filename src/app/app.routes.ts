import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
	},
	{
		path: '17',
		children: [
			{
				path: 'introduce',
				loadComponent: () =>
					import('./features/17/introduce/introduce.component').then((m) => m.IntroduceComponent),
			},
		],
	},
	{
		path: '18',
		children: [
			{
				path: 'introduce',
				loadComponent: () =>
					import('./features/18/introduce/introduce.component').then((m) => m.IntroduceComponent),
			},
		],
	},
	{
		path: '19',
		children: [
			{
				path: 'introduce',
				loadComponent: () =>
					import('./features/19/introduce/introduce.component').then((m) => m.IntroduceComponent),
			},
			{
				path: 'incremental_hydration',
				loadComponent: () =>
					import('./features/19/incremental-hydration/incremental-hydration.component').then(
						(m) => m.IncrementalHydrationComponent
					),
			},
		],
	},
];
