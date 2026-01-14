import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { CardModule } from '@spryker/card';
import { DashboardStatsComponent } from './dashboard-stats.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
    template: `
        <mp-dashboard-stats>
            <span title></span>
            <span class="default-slot"></span>
        </mp-dashboard-stats>
    `,
    standalone: false,
})
class TestHostComponent {}

describe('DashboardStatsComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [DashboardStatsComponent, TestHostComponent],
            imports: [CardModule],
            schemas: [NO_ERRORS_SCHEMA],
        });

        fixture = TestBed.createComponent(TestHostComponent);
        await fixture.detectChanges();
    });

    it('should render `title` slot to the `.ant-card-head-title` element', () => {
        const titleSlot = fixture.debugElement.query(By.css('.ant-card-head-title [title]'));

        expect(titleSlot).toBeTruthy();
    });

    it('should render default slot to the `.ant-card-body` element', () => {
        const defaultSlot = fixture.debugElement.query(By.css('.ant-card-body .default-slot'));

        expect(defaultSlot).toBeTruthy();
    });
});
