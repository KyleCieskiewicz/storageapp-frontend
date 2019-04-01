import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageunitListComponent } from './storageunit-list.component';

describe('StorageunitListComponent', () => {
  let component: StorageunitListComponent;
  let fixture: ComponentFixture<StorageunitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageunitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageunitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
