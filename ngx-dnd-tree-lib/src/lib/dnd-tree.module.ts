import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// import {DndTreeItemDirective} from './directives/dnd-tree-item.directive';
import {SkyhookDndModule} from '@angular-skyhook/core';
import {SkyhookSortableModule} from '@angular-skyhook/sortable';
import {SkyhookMultiBackendModule} from '@angular-skyhook/multi-backend';
import {DndTreeListComponent} from './components/dnd-tree-list.component';
import {DndTreeItemComponent} from './components/dnd-tree-item.component';
import {
	DndTreeComponent,
	DragPreviewTemplateDirective,
	TreeItemTemplateDirective
} from './components/dnd-tree.component';

const EXPORTS = [
	DndTreeComponent,
	DndTreeListComponent,
	DndTreeItemComponent,
	TreeItemTemplateDirective,
	DragPreviewTemplateDirective,
	// DndTreeItemDirective,
];

@NgModule({
	imports: [
		CommonModule,
		SkyhookDndModule,
		SkyhookSortableModule,
		SkyhookMultiBackendModule,
	],
	declarations: [
		...EXPORTS,
		// DndTreeItemComponent,
	],
	exports: EXPORTS,
})
export class DndTreeModule {
}
