//http://stackoverflow.com/questions/36325212/angular-2-dynamic-tabs-with-user-click-chosen-components/36325468#36325468

import { Compiler,
         Component,
         ComponentRef,
         ComponentFactory,
         ComponentFactoryResolver,
         Input,
         OnChanges,
         OnDestroy,
         OnInit,
         AfterViewInit,
         ViewChild,
         ViewContainerRef }         from '@angular/core';
import { ActivatedRoute }           from '@angular/router';

@Component({
    selector: 'dyn-content',
    template: `<div #target></div>`,
})
export class DynamicContentComponent implements OnChanges, OnDestroy, AfterViewInit {
    @ViewChild('target', { read: ViewContainerRef })target;
    type: any;
    content: ComponentRef<any>;
    private isViewInitialized: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private resolver: ComponentFactoryResolver,
        private compiler: Compiler) { }

    updateContent() {
        if (!this.isViewInitialized) {
            return;
        }
        if (this.content) {
            this.content.destroy();
        }

        let factory = this.resolver.resolveComponentFactory(this.type);
        this.content = this.target.createComponent(factory);
        // this.content.someProperty = someValue
    }

    ngOnInit() {
        this.route.data.forEach((data: { contentType: any }) => {
			this.type = data.contentType;
		});
    }

    ngOnChanges() {
        this.updateContent();
    }

    ngAfterViewInit() {
        this.isViewInitialized = true;
        this.updateContent();
    }

    ngOnDestroy() {
        if(this.content) {
            this.content.destroy();
        }
    }
}