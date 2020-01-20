import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import * as Muuri from 'muuri';
//declare var Muuri: any;

@Directive({
    selector: '[muuriGrid]'
})
export class MuuriGridDirective implements OnInit, OnDestroy {
    layoutConfig = {
        items: [],
        layoutOnInit: false,
        dragEnabled: true,
        layout: {
            fillGaps: true,
            horizontal: false,
            alignRight: false,
            alignBottom: false,
            rounding: true
        },
        dragStartPredicate: {
            distance: 0,
            delay: 0,
            handle: '.tile-handle'
        },
        dragSortInterval: 0,
        dragSortPredicate: {
            threshold: 40,
            action: 'swap'
        }
    };
    layout: any;
    addItemChangeSubscription: any;

    private events: string[];
    private items: ElementRef[];
    private addItemChange = new BehaviorSubject<boolean>(false);

    constructor(private elRef: ElementRef) {
        this.events = [];
        this.items = [];
    }

    ngOnInit(): void {
        this.addItemChangeSubscription = this.addItemChange
            .pipe(
                filter(t => !!t),
                debounceTime(25)
            )
            .subscribe(t => {
                this.addItems(this.items);
                this.refresh();
            });

        this.init(this.elRef.nativeElement, true);
    }

    init(grid: ElementRef, fillGaps: boolean, sortAction: string = null, dragHandle: string = null) {
        if (dragHandle) {
            this.layoutConfig.dragStartPredicate.handle = dragHandle;
        }
        if (sortAction) {
            this.layoutConfig.dragSortPredicate.action = sortAction;
        }
        this.layoutConfig.layout.fillGaps = fillGaps;

        this.layout = new Muuri(grid, this.layoutConfig);
    }

    private addItems(items) {
        let existingItems = this.layout.getItems();
        if (existingItems && existingItems.length > 0) {
            this.layout.remove(existingItems, { layout: false });
        }

        this.layout.add(items, { layout: false });
        this.items = [];
    }

    addItem(item: ElementRef) {
        this.items.push(item);
        this.addItemChange.next(true);
    }

    on(eventName: string, action: any) {
        if (this.events.find(x => x === eventName)) {
            return;
        }

        this.layout.on(eventName, function(item, event) {
            action(item, event);
        });
        this.events.push(eventName);
    }

    destroyLayout() {
        this.events.forEach(eventName => {
            this.layout.off(eventName);
        });
        this.events = [];

        this.layout.destroy();
        this.layout = null;
    }

    refresh() {
        this.layout.refreshItems();
        this.layout.layout();
    }

    ngOnDestroy(): void {
        this.destroyLayout();
        if (this.addItemChangeSubscription) {
            this.addItemChangeSubscription.unsubscribe();
        }
    }
}