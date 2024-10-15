import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarBgComponent } from './star-bg.component';

describe('StarBgComponent', () => {
  let component: StarBgComponent;
  let fixture: ComponentFixture<StarBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarBgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
