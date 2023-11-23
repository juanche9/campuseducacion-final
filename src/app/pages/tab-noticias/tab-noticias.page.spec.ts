import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabNoticiasPage } from './tab-noticias.page';

describe('TabNoticiasPage', () => {
  let component: TabNoticiasPage;
  let fixture: ComponentFixture<TabNoticiasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabNoticiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
