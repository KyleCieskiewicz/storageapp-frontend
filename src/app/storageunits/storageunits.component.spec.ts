import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageunitsComponent } from './storageunits.component';

describe('StorageunitsComponent', () => {
  let component: StorageunitsComponent;
  let fixture: ComponentFixture<StorageunitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageunitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
