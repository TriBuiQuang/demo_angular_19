import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
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
			{
				path: 'standalone_components_by_default',
				loadComponent: () =>
					import('./features/19/standalone-default/standalone-default.component').then(
						(m) => m.StandaloneDefaultComponent
					),
			},
			{
				path: 'event_replay_enabled_by_default',
				loadComponent: () =>
					import('./features/19/event-replay-enabled-by-default/event-replay-enabled-by-default.component').then(
						(m) => m.EventReplayEnabledByDefaultComponent
					),
			},
			{
				path: 'route_level_render_modes',
				loadComponent: () =>
					import('./features/19/route-level-render-modes/route-level-render-modes.component').then(
						(m) => m.RouteLevelRenderModesComponent
					),
			},
			{
				path: 'stabilization_of_core_reactivity_primitives',
				loadComponent: () =>
					import('./features/19/core-reactivity-primitives/core-reactivity-primitives.component').then(
						(m) => m.CoreReactivityPrimitivesComponent
					),
			},
		],
	},
];
