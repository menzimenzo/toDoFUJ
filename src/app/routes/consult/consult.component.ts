import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.todolist = [
      { desc: 'faire la vaiselle', prio: 2 },
      { desc: 'finir la formation', prio: 1 },
      { desc: 'faire le ménage', prio: 9 }
    ];
  }

}
