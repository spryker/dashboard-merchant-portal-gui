import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { CardModule } from '@spryker/card';
import { DashboardCardComponent } from './dashboard-card.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
    template: `
        <mp-dashboard-card [count]="count">
            <span title>Title Content</span>
            <span actions>Actions Content</span>
            <span class="default-slot">Default Content</span>
        </mp-dashboard-card>
    `,
    standalone: false,
})
class TestHostComponent {
    @Input() count?: string;
}

describe('DashboardCardComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [DashboardCardComponent, TestHostComponent],
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

    it('should render `actions` slot to the `.ant-card-extra` element', () => {
        const actionsSlot = fixture.debugElement.query(By.css('.ant-card-extra [actions]'));

        expect(actionsSlot).toBeTruthy();
    });

    it('should render default slot to the `.ant-card-body` element', () => {
        const defaultSlot = fixture.debugElement.query(By.css('.ant-card-body .default-slot'));

        expect(defaultSlot).toBeTruthy();
    });

    it('should render <spy-chips> component to the `.ant-card-head-title` element if `@Input(count)` has bound', () => {
        const mockCount = '5';
        fixture.componentRef.setInput('count', mockCount);
        fixture.detectChanges();
        const chipsComponent = fixture.debugElement.query(By.css('.ant-card-head-title spy-chips'));

        expect(chipsComponent).toBeTruthy();
        expect(chipsComponent.nativeElement.textContent).toContain(mockCount);
    });
});
