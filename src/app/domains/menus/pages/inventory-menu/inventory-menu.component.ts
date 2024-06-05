import { Component } from '@angular/core';
import { GroupsComponent } from './groups/groups.component';

@Component({
  selector: 'app-inventory-menu',
  standalone: true,
  imports: [GroupsComponent],
  templateUrl: './inventory-menu.component.html',
  styleUrl: './inventory-menu.component.css',
})
export class InventoryMenuComponent {}
