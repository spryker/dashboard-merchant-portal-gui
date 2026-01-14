import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
    template: `
        <mp-dashboard>
            <span title></span>
            <span class="default-slot"></span>
        </mp-dashboard>
    `,
    standalone: false,
})
class TestHostComponent {}

describe('DashboardComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [DashboardComponent, TestHostComponent],
            schemas: [NO_ERRORS_SCHEMA],
        });

        fixture = TestBed.createComponent(TestHostComponent);
        await fixture.detectChanges();
    });

    it('should render <spy-headline> component', () => {
        const headlineComponent = fixture.debugElement.query(By.css('spy-headline'));

        expect(headlineComponent).toBeTruthy();
    });

    it('should render `title` slot to the <spy-headline> component', () => {
        const titleSlot = fixture.debugElement.query(By.css('spy-headline [title]'));

        expect(titleSlot).toBeTruthy();
    });

    it('should render default slot after <spy-headline> component', () => {
        const defaultSlot = fixture.debugElement.query(By.css('spy-headline + .default-slot'));

        expect(defaultSlot).toBeTruthy();
    });
});
