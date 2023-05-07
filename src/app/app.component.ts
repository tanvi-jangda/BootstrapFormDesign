import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BootstrapFormDesign';
  states:any=["Maharashtra","Gujrat","Uttar Pradesh"];

  constructor(public fbObj:FormBuilder)
  {
  }
  ContactDetailsForm=this.fbObj.group({
    FName:['',[Validators.required,Validators.pattern(/^[a-zA-Z]*$/)]],
    LName:['',[Validators.required,Validators.pattern(/^[a-zA-Z]*$/)]],
    Email:['',[Validators.required,Validators.email]],
    Phone:['',[Validators.required,Validators.maxLength(10),Validators.pattern(/^[0-9]*$/)]],
    City:['',[Validators.required , Validators.minLength(4),Validators.pattern(/^[a-zA-Z]*$/)]],
    State:['',this.stateNameValid],
    ZipCode:['',[Validators.maxLength(6), Validators.pattern(/^[0-9]*$/)]],
    Comments:['',[Validators.minLength(30)]]
  });

  get contactFormControl() {
    return this.ContactDetailsForm.controls;
  }

stateNameValid(control:FormControl)
{
if(control.value=="Select State")
return {
  stateNameInValid:true
};
else 
return {
  stateNameInvalid:null
};
}


  btnSubmit()
  {
    console.log(this.ContactDetailsForm);
  }

}
