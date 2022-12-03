import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {TicketService} from "../../../service/ticket.service";
import {CarHouse} from "../../../model/carHouse";
import {Ticket} from "../../../model/ticket";
import {Router} from "@angular/router";

export const checkQuantity: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const quantityTicket = control.get("quantity").value;
  if (quantityTicket <= 0 && quantityTicket != null) {
    return {"checkQuantity": true};
  } else {
    return null;
  }
}

export const checkPrice: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const priceTicket = control.get("price").value;

  if (priceTicket <= 0 && priceTicket != null) {
    return {"checkPrice": true};
  } else {
    return null;
  }
}
export const checkDayFrom: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const dayFrom = new Date(control.get('dayFrom').value)
  const dayNow = new Date();
  if (dayFrom < dayNow) {
    return {"checkDayFrom": true};
  } else {
    return null;
  }
}
export const checkLocalTo: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const localTo = control.get('localTo').value;
  const localFrom = control.get('localFrom').value;
  if (localTo === localFrom) {
    return {"checkLocalTo": true};
  } else {
    return null;
  }
}


@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent implements OnInit {
  rfTicket: FormGroup;
  carHouseList: CarHouse[] | undefined;
  ticketList: Ticket[] | undefined;
  ticket: Ticket | undefined;


  constructor(private _formBuilder: FormBuilder,
              private _ticketService: TicketService,
              private _router: Router) {

  }

  ngOnInit(): void {
    this._ticketService.getListCarHouses().subscribe(
      carHousedata => {
        this.carHouseList = carHousedata;
        this._ticketService.getListTicket().subscribe(
          data => {
            this.ticketList = data;
            this.rfTicket = this._formBuilder.group({
              id: [],
              localFrom: ['',
                [Validators.required,
                 Validators.pattern('^[A-ZÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ](?:\'[A-ZÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ])*[a-zàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹý]*(?: [A-ZÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ](?:\'[A-ZÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ])*[a-zàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹý]*)*$')
                ]
              ],
              localTo: ['',
                [Validators.required,
                 Validators.pattern('^[A-ZÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ](?:\'[A-ZÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ])*[a-zàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹý]*(?: [A-ZÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ](?:\'[A-ZÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ])*[a-zàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹý]*)*$')
                ]],
              carHouse: ['', [Validators.required]],
              dayFrom: ['', [Validators.required]],
              hourForm: ['', [Validators.required]],
              quantity: [, [Validators.required]],
              price: [, [Validators.required]]
            }, {validators: [checkPrice, checkQuantity, checkDayFrom, checkLocalTo, this.checkMatch]});
          });
      });
  }

  onSubmit() {
    this._ticketService.add(this.rfTicket.value).subscribe(
      data => {
        this.ticket = data;
        this._ticketService.setMessage('Add New Ticket Go From ' + this.ticket.localFrom + ' To ' + this.ticket.localTo + ' Success!');
        this._router.navigateByUrl("");
      }
    )
  }

  checkMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const localFrom = control.get('localFrom').value;
    const localTo = control.get('localTo').value;
    let result = null;
    this.ticketList.filter(value => {
      if (localFrom === value.localFrom && localTo === value.localTo) {
        result = {"checkMatch": true};
      }
    })
    return result;
  }
}
