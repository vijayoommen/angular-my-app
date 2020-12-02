import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicateWithInputBindingComponent } from './communicate-with-input-binding.component';

describe('CommunicateWithInputBindingComponent', () => {
  let component: CommunicateWithInputBindingComponent;
  let fixture: ComponentFixture<CommunicateWithInputBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicateWithInputBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicateWithInputBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
