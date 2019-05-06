import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-md-food-form',
  templateUrl: './md-food-form.component.html',
  styleUrls: ['./md-food-form.component.scss']
})

export class MdFoodFormComponent implements OnInit {

  public fdForm: FormGroup;
  public isSubmitted: boolean;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {

   this.fdForm = this._fb.group({
    name: ['', [<any> Validators.required]],
    description: ['', [<any> Validators.required]],
    nutritionalInfo: this._fb.group({
      servingSize: '',
      unit: 'g',
      calories: '',
      fat: '',
      protein: '',
      carbs: ''
    })
   });
   this.listenForChanges();
  }

  demoDelayedFormSet(){
    let update = {
      name: 'Banana',
      description: 'yellow and soft',
      nutritionalInfo: {
        servingSize: '1 small',
        unit: 'g',
        calories: '100',
        fat: '3',
        protein: '0',
        carbs: '20'
      }
    }
    this.fdForm.setValue(update);
  }

  demoDelayedNameFieldSet() {
    let control = this.fdForm.controls['name'];
    control.setValue('Grape', {onlySelf: true});

  }

  save(model: Object, isValid: boolean){
    this.isSubmitted = true;
    console.log('Submitted');
  }

  listenForChanges() {
    const formChanges = this.fdForm.valueChanges;

    formChanges.subscribe( changeObject =>
      console.log(changeObject)
    );
  }
}
