import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavHolderComponent } from './fav-holder.component';

describe('FavHolderComponent', () => {
  let component: FavHolderComponent;
  let fixture: ComponentFixture<FavHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
