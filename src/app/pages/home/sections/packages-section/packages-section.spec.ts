import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PackagesSection } from './packages-section';

describe('PackagesSection', () => {
  let component: PackagesSection;
  let fixture: ComponentFixture<PackagesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackagesSection],
    }).compileComponents();

    fixture = TestBed.createComponent(PackagesSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
