import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DashboardTableComponent } from './dashboard-table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('DashboardTableComponent', () => {
    let fixture: ComponentFixture<DashboardTableComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardTableComponent],
            schemas: [NO_ERRORS_SCHEMA],
        });

        fixture = TestBed.createComponent(DashboardTableComponent);
    });

    it('should render <spy-table> component', () => {
        const tableComponent = fixture.debugElement.query(By.css('spy-table'));

        expect(tableComponent).toBeTruthy();
    });

    it('should bound `@Input(config)` to the `config` input of <spy-table> component', async () => {
        const mockTableConfig = {
            config: 'config',
            data: 'data',
            columns: 'columns',
        };
        fixture.componentRef.setInput('config', mockTableConfig);
        await fixture.detectChanges();
        const tableComponent = fixture.debugElement.query(By.css('spy-table'));

        expect(tableComponent.properties.config).toEqual(mockTableConfig);
    });

    it('should bound `@Input(tableId)` to the `tableId` input of <spy-table> component', async () => {
        const mockTableId = 'mockTableId';
        fixture.componentRef.setInput('tableId', mockTableId);
        await fixture.detectChanges();
        const tableComponent = fixture.debugElement.query(By.css('spy-table'));

        expect(tableComponent.properties.tableId).toEqual(mockTableId);
    });
});
