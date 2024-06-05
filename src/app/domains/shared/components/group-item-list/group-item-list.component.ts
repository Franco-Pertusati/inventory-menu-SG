import { Component, inject, OnInit, WritableSignal } from '@angular/core';
import { Group } from '../../models/group.model';

import { GroupService } from '../../services/groups.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-group-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-item-list.component.html',
  styleUrls: ['./group-item-list.component.css'],
})
export class GroupItemListComponent implements OnInit {
  private groupService = inject(GroupService);
  groups!: WritableSignal<Group[]>;

  ngOnInit(): void {
    this.groups = this.groupService.getGroups();
  }

  toggleOptions(index: number): void {
    this.groupService.changeGroupBool(index);
  }

  renameGroup(index: number, event: Event): void {
    this.groupService.updateGroupName(index, event);
  }

  toggleDisponibility(index: number): void {
    this.groupService.updateGroupDisponibility(index);
  }

  deleteGroup(index: number): void {
    this.groupService.deleteGroup(index);
  }

  activeRenameInput(index: number): void {
    this.groupService.activeRenameInput(index)
  }
}
