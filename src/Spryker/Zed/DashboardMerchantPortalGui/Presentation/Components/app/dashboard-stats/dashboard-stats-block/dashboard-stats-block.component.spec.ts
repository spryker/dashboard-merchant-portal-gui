import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DashboardStatsBlockComponent } from './dashboard-stats-block.component';

describe('DashboardStatsBlockComponent', () => {
    let fixture: ComponentFixture<DashboardStatsBlockComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardStatsBlockComponent],
            schemas: [NO_ERRORS_SCHEMA],
        });

        fixture = TestBed.createComponent(DashboardStatsBlockComponent);
    });

    it('should render `@Input(count)` to the `.mp-dashboard-stats-block__text--count` element', () => {
        const mockCount = 'count';
        fixture.componentRef.setInput('count', mockCount);
        fixture.detectChanges();

        const countContentElem = fixture.debugElement.query(By.css('.mp-dashboard-stats-block__text--count'));

        expect(countContentElem.nativeElement.textContent).toContain(mockCount);
    });

    it('should render `@Input(name)` to the `.mp-dashboard-stats-block__text:last-child` element', () => {
        const mockName = 'name';
        fixture.componentRef.setInput('name', mockName);
        fixture.detectChanges();

        const nameContentElem = fixture.debugElement.query(By.css('.mp-dashboard-stats-block__text:last-child'));

        expect(nameContentElem.nativeElement.textContent).toContain(mockName);
    });
});
