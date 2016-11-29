/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IComponent } from './i.component';

describe('IComponent', () => {
  let component: IComponent;
  let fixture: ComponentFixture<IComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});