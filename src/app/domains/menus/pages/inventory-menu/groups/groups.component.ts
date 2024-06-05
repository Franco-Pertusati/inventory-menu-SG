import { Component, WritableSignal, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListConfigComponent } from '../../../../shared/components/list-config/list-config.component';
import { GroupItemListComponent } from '../../../../shared/components/group-item-list/group-item-list.component';
import { GroupService } from '../../../../shared/services/groups.service';
import { Group } from '../../../../shared/models/group.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [
    ListConfigComponent,
    GroupItemListComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css',
})
export class GroupsComponent {
  private groupService = inject(GroupService);
  groups!: WritableSignal<Group[]>;

  ngOnInit() {
    this.groups = this.groupService.getGroups();
  }

  newGroupName = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  changeHandler(event: Event) {
    if (this.newGroupName.valid) {
      const value = this.newGroupName.value.trim();
      if (value !== '') {
        this.createGroup(value);
        this.newGroupName.setValue('');
      }
    }
  }

  createGroup(groupName: string) {
    this.groupService.createGroup(groupName);
  }
}
