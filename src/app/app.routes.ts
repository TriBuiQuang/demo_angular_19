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
				path: '',
				loadComponent: () =>
					import('./features/17/introduce/introduce.component').then((m) => m.IntroduceComponent),
			},
			{
				path: 'built_in_control_flow_syntax',
				loadComponent: () =>
					import('./features/17/built-in-control-flow-syntax/built-in-control-flow-syntax.component').then(
						(m) => m.BuiltInControlFlowSyntaxComponent
					),
			},
			{
				path: 'deferrable_views',
				loadComponent: () =>
					import('./features/17/deferrable-views/deferrable-views.component').then(
						(m) => m.DeferrableViewsComponent
					),
			},
			{
				path: 'enhanced_server_side',
				loadComponent: () =>
					import(
						'./features/17/enhanced-server-side-rendering-support/enhanced-server-side-rendering-support.component'
					).then((m) => m.EnhancedServerSideRenderingSupportComponent),
			},
			{
				path: 'performance_enhancements',
				loadComponent: () =>
					import('./features/17/performance-enhancements/performance-enhancements.component').then(
						(m) => m.PerformanceEnhancementsComponent
					),
			},
		],
	},
	{
		path: '18',
		children: [
			{
				path: '',
				loadComponent: () =>
					import('./features/18/introduce/introduce.component').then((m) => m.IntroduceComponent),
			},
			{
				path: 'zoneless_change_detection',
				loadComponent: () =>
					import('./features/18/zoneless-change-detection/zoneless-change-detection.component').then(
						(m) => m.ZonelessChangeDetectionComponent
					),
			},
			{
				path: 'deferrable_views_and_built_in_control_flow',
				loadComponent: () =>
					import(
						'./features/18/deferrable-views-and-built-in-control-flow/deferrable-views-and-built-in-control-flow.component'
					).then((m) => m.DeferrableViewsAndBuiltInControlFlowComponent),
			},
			{
				path: 'let_syntax',
				loadComponent: () =>
					import('./features/18/let-syntax/let-syntax.component').then((m) => m.LetSyntaxComponent),
			},
			{
				path: 'stable_material_component',
				loadComponent: () =>
					import('./features/18/stable-material-component/stable-material-component.component').then(
						(m) => m.StableMaterialComponentComponent
					),
			},
		],
	},
	{
		path: '19',
		children: [
			{
				path: '',
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
