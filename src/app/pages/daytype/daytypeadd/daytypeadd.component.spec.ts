/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DaytypeaddComponent } from './daytypeadd.component';

describe('DaytypeaddComponent', () => {
  let component: DaytypeaddComponent;
  let fixture: ComponentFixture<DaytypeaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaytypeaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaytypeaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
