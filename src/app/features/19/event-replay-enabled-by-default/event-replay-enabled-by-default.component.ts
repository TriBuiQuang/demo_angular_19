import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
	selector: 'app-event-replay-enabled-by-default',
	imports: [FieldsetModule],
	templateUrl: './event-replay-enabled-by-default.component.html',
	styleUrl: './event-replay-enabled-by-default.component.scss',
})
export class EventReplayEnabledByDefaultComponent {
	imgConfig = './assets/img/event_replay_hydration_config.png';
	imgIssueTree = './assets/img/even_replay_dom_tree_contains_button.png';
	imgIssueCodeButton = './assets/img/even_replay_dom_tree_contains_button.png';
	imgIssueTreeAfterClick = './assets/img/even_replay_dom_tree_contains_button_after_click.png';
	imgIssueWhenDeActive = './assets/img/event_replay_issue_when_deactive.png';
}
