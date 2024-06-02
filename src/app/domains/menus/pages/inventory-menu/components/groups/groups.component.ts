import { Component } from '@angular/core';
import { ListConfigComponent } from '../../../../../shared/components/list-config/list-config.component';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [ListConfigComponent],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css',
})
export class GroupsComponent {}
