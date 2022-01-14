import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-collapse',
  template: `
        <div (click)="toggleCollapsed()" class="root">
            <h2>{{title}}</h2>
            <div *ngIf="!collapsed">
                <ng-content></ng-content>
            </div>
        </div>
    `,
  styles: [
    `.root{
            display: flex;
            flex-direction: column;
        }`,
  ],

})
export class CollapseComponent {
    @Input() title: string = '';

    collapsed: boolean = true;

    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    }
}
