import { Component, Input, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
    selector: 'shared-lazy-image',
    standalone: false,
    templateUrl:'./lazy-image.component.html',
    styleUrl: './lazy-image.component.scss'
})
export class LazyImageComponent implements OnInit{
    @Input()
    public url!: string;
    @Input()
    public alt: string = 'Default Text';

    public hasLoaded: boolean = false;
    
    ngOnInit(): void {
        if (!this.url) throw new Error('URL property is required.');
    }

    onLoad() {
        setTimeout( () => {this.hasLoaded = true}, 1000 );
    }
}
