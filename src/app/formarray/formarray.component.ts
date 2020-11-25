import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators, FormArray } from '@angular/forms';
import { ok } from 'assert';
import { from } from 'rxjs';



@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})



export class FormarrayComponent implements OnInit {

  registrationForm: FormGroup;
  submited: boolean = false;
  FormArray: any;
  registration: any;
  public tab: [];



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
  onSubmit() {
    this.submited = true;
    if (this.registrationForm.value.invalid) {
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

  // fonction supprimer champ skills

  onsuppskills(index: number) {
    (<FormArray>this.registrationForm.get('skills')).removeAt(index);

  }
  // fonction supprimer champ experience professionnelle

  onsuppexppros(index: number) {
    (<FormArray>this.registrationForm.get('exppros')).removeAt(index);
  }

  // fonction save les données dans le tableau avec localstorage

  onsavejson() {
    let users = JSON.parse(localStorage.getItem('user')) || [];
    users.push(this.registrationForm.value);
    localStorage.setItem('user', JSON.stringify(users));

    // if(localStorage.getItem('tarchoun')==null){
    //   localStorage.setItem('tarchoun', JSON.stringify([this.registrationForm.value]));
    // }

    // else{
    //   let taher = JSON.parse(localStorage.getItem('tarchoun'));
    //   taher.push(this.registrationForm.value);
    //   localStorage.setItem('tarchoun',JSON.stringify(taher));
    // }

  }

  // Ajouter les donnes localstorage dans le TABLEAU tab
  onsavetab(){
    
    tab.push(this.tab);
    localStorage.setItem('users', JSON.stringify(this.tab));
   
   
  }
 

  } 
   




