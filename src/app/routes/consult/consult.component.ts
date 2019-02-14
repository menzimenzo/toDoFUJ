import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

interface ToDoRecord {
  desc: string;
  prio: number;
}

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent implements OnInit {
  todolist: ToDoRecord[];

  selectedRecords: Set<ToDoRecord> = new Set<ToDoRecord>();

  f = new FormGroup({
    desc: new FormControl('', [Validators.required]),
    prio: new FormControl('0')
  });

  constructor() { }

  ngOnInit() {
    this.todolist = [
      { desc: 'faire la vaiselle', prio: 2 },
      { desc: 'finir la formation', prio: 1 },
      { desc: 'faire le ménage', prio: 9 }
    ];
  }

  onSubmit() {
    this.todolist.push(this.f.value);
    this.f.reset();
  }

  isSelected(r: ToDoRecord) {
    return this.selectedRecords.has(r);
  }

  toggleSelection(r: ToDoRecord) {
    if (this.isSelected(r)) {
      this.selectedRecords.delete(r);
      return;
    }
    this.selectedRecords.add(r);
  }

  hasSelectedRecord() {
    return this.selectedRecords.size > 0;
  }
}
