import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";
import {Customer} from "../customers/customer";

@Component({
  selector: 'app-reactive-customer-form',
  templateUrl: './reactive-customer-form.component.html',
  styleUrls: ['./reactive-customer-form.component.css']
})
export class ReactiveCustomerFormComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();

  get addresses(): FormArray{
    return <FormArray>this.customerForm.get('addresses');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: [''],
      sendCatalog: true,
      addresses: this.fb.array([this.buildAddress()])
    });
  }

  addAddress(): void {
    this.addresses.push(this.buildAddress());
  }

  buildAddress(): FormGroup {
    return this.fb.group({
      addressType: 'home',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: ''
    })
  }

  save(){
    console.log(this.customerForm);
    console.log(this.customerForm.value);
  }

  populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'Tamil'
    });
  }

}
