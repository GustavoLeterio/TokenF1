import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassmorphismCard } from './glassmorphism-card';

describe('GlassmorphismCard', () => {
  let component: GlassmorphismCard;
  let fixture: ComponentFixture<GlassmorphismCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlassmorphismCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlassmorphismCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
