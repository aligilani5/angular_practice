import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.scss']
})
export class EmployeeCountComponent implements OnInit {

  public selectedRadioButtonValue: string = 'All';

  @Input() all: number = 0;
  @Input() male: number = 0;
  @Input() female: number = 0;

  @Output() radioButtonValueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onRadioButtonValueChange(): void{

    this.radioButtonValueChange.emit(this.selectedRadioButtonValue);

  }

}
