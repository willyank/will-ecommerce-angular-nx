import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EditFormLayoutModule } from '@willyan-company/generics';
import { MessageService } from 'primeng/api';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputTextModule } from 'primeng/inputtext';

import { CategoriesFormComponent } from './categories-form.component';

describe('FooterComponent', () => {
  let component: CategoriesFormComponent;
  let fixture: ComponentFixture<CategoriesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
        EditFormLayoutModule,
        ColorPickerModule,
        InputTextModule,
      ],
      declarations: [CategoriesFormComponent],
      providers: [HttpClient, MessageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form can not save', () => {
    expect(component.form.invalid).toBeTruthy();
  });

  it('name input tests', () => {
    const nameControl = component.form.controls.name;
    nameControl.markAsTouched();

    expect(nameControl.invalid).toBeTruthy();

    nameControl.patchValue('12');
    expect(nameControl.invalid).toBeTruthy();

    nameControl.patchValue('above minlength of 3');
    expect(nameControl.valid).toBeTruthy();
  });
});
