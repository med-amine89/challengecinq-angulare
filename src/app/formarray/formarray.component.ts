import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators, FormArray } from '@angular/forms';
import { from } from 'rxjs';



@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})



export class FormarrayComponent implements OnInit {

  registrationForm: FormGroup;
  submited: boolean = false;
 
  constructor() {

  }
  // Declaration des FormGroup / FormControl / FormArray

  ngOnInit(): void {

    this.registrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&]).{0,8}$")]),
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      skills: new FormArray([]),
      exppros: new FormArray([])
    });
    
  }
  //  fonction submit 
  onSubmit(){
    this.submited = true;
    if(this.registrationForm.value.invalid){
      return;
    }

    console.log(this.registrationForm.value);
    
  }
// fonction add skills
  onAddskills() {
    
    (<FormArray>this.registrationForm.get('skills')).push(new FormControl(''))
  }

  // fonction add experiences pro
  
  onAddexppros() {
    (<FormArray>this.registrationForm.get('exppros')).push(new FormControl(''))
  }
}
