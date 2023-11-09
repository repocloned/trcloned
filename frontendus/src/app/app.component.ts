import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faktor = new FormControl('')


setOperation(arg0: string) {
  this.operation = arg0;
}

value ="0"
operation = ''
getOperation() {
  return this.operation;
}
getCurrentValue() {
  return this.value;
}

addToFaktor(arg0: string) {
  this.faktor.setValue(this.faktor.getRawValue()+arg0);

}

queryBackend(){
  if(this.operation == "+"){
    fetch('http://3.74.107.199:8100/add', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ "wert1": this.value, "wert2": this.faktor.getRawValue() })
})
   .then(response => response.json())
   .then(response => {
    this.value = response;
    this.faktor.setValue('')
    console.log(JSON.stringify(response))})
  }
  if(this.operation == "*"){

    fetch('http://3.74.107.199:8100/add', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ "wert1": this.value, "wert2": this.faktor.getRawValue() })
})
   .then(response => response.json())
   .then(response => {
    this.value = response;
    this.faktor.setValue('')
    console.log(JSON.stringify(response))})
  }
  if(this.operation == "-"){
    fetch('http://3.74.107.199:8100/add', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ "wert1": this.value, "wert2": this.faktor.getRawValue() })
})
   .then(response => response.json())
   .then(response => {
    this.value = response;
    this.faktor.setValue('')
    console.log(JSON.stringify(response))})
  }
}

  title = 'frontendus';

}


