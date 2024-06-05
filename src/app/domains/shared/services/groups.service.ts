import { Injectable, signal } from '@angular/core';
import { Group } from '../models/group.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private groups = signal<Group[]>([
    {
      name: 'Pintas',
      products: [
        { name: 'Golden', price: 1900, cost: 1000, code: 'p1', enabled: true },
        { name: 'Scottish', price: 1900, cost: 1000, code: 'p2', enabled: true },
        { name: 'IPA', price: 3100, cost: 2200, code: 'p3', enabled: false },
      ],
      enabled: true,
      optionsDisplayed: false,
      editingName: false,
    },
    {
      name: 'Bebidas',
      products: [],
      enabled: true,
      optionsDisplayed: false,
      editingName: false,
    },
    {
      name: 'Vinos',
      products: [],
      enabled: true,
      optionsDisplayed: false,
      editingName: false,
    },
  ]);

  getGroups() {
    return this.groups;
  }

  changeGroupBool(index: number) {
    this.groups.update((groups) => {
      return groups.map((group, position) => {
        if (position === index) {
          return {
            ...group,
            optionsDisplayed: !group.optionsDisplayed,
          };
        }
        if (group.optionsDisplayed === true) {
          return {
            ...group,
            optionsDisplayed: false,
          };
        }
        return group;
      });
    });
  }

  activeRenameInput(index: number) {
    this.groups.update((groups) => {
      return groups.map((group, position) => {
        if (position === index) {
          return {
            ...group,
            editingName: true,
          };
        }
        return {
          ...group,
          editingName: false,
        };
      });
    });
  }

  updateGroupName(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    this.groups.update((groups) => {
      return groups.map((group, position) => {
        if (position === index) {
          return {
            ...group,
            name: input.value,
            editingName: false,
          };
        }
        return group;
      });
    });
  }

  updateGroupDisponibility(index: number) {
    this.groups.update((groups) => {
      return groups.map((group, position) => {
        if (position === index) {
          return {
            ...group,
            enabled: !group.enabled,
          };
        }
        return group;
      });
    });
  }

  deleteGroup(index: number) {
    this.groups.update((groups) =>
      groups.filter((group, position) => position !== index)
    );
  }

  createGroup(newGroupName: string) {
    const newGroup = {
      name: newGroupName,
      products: [],
      enabled: true,
    };
    this.groups.update((groups) => [...groups, newGroup]);
  }

  constructor() {}
}
