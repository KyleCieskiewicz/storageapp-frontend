import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageunitComponent } from './storageunit.component';

describe('StorageunitComponent', () => {
  let component: StorageunitComponent;
  let fixture: ComponentFixture<StorageunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
