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
    // si on met la ligne du dessous, a chaque clic sur le bouton submit on met le meme objet en mémoire
    // this.todolist.push(this.f.value);

    // du coup, on pousse un clone : on passe un nouvel objet qui contient les valeurs voulues
    //this.todolist.push({prio:this.f.value.prio, desc:this.f.value.desc});

    // en version abbrégée, ca donne ca :
    this.todolist.push({...this.f.value});

    // this.f.reset();
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

  hasSelectedOnlyOneRecord() {
    if (this.selectedRecords.size < 2 && this.selectedRecords.size > 0 ) {
      return true ;
    }
  }
  removeSelection() {
    console.log('suppression en cours');
    this.selectedRecords.forEach(r => {
      const index = this.todolist.findIndex(x=> x === r);
      this.todolist.splice(index, 1);
    });
    this.selectedRecords.clear();
  }

  updateSelection() {
    console.log('test');
  }
}
