import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  form: FormGroup;

  constructor(private cc: ControlContainer) {}

  ngOnInit(): void {
    this.form = this.cc.control as FormGroup;
  }
}
