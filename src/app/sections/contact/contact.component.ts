import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactModel = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted', this.contactModel);
  }
}
