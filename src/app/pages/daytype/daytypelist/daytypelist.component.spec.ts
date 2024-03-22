/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DaytypelistComponent } from './daytypelist.component';

describe('DaytypelistComponent', () => {
  let component: DaytypelistComponent;
  let fixture: ComponentFixture<DaytypelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaytypelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaytypelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
