import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {task} from '../models/task.model'
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './lab.component.html',
  styleUrl: './lab.component.css'
})
export class LabComponent {
  title = ''
  tasks = signal<task[]>([
    {
      id: 1,
      title: 'crear tasks',
      completed: false
    },
    {
      id: 2,
      title: 'crear componentes',
      completed: false
    },
    {
      id: 1,
      title: 'completar git',
      completed: false
    }
  ])

  newTask = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('^(?!\s*$).+')
    ]
  })

  createTask(){
    if (this.newTask.valid){
      const addTask = this.newTask.value
      this.tasks.update((tasks) => [...tasks, {
        id: Date.now(),
        title: addTask,
        completed: false
      }])
    }
  }

  ediTask(index:number){
    this.tasks.update((tasks) => tasks.map((task, position) => {
      if (position === index) return { ...task, completed: !task.completed }
      return task
    }))
  }

  deleteTask(index : number){
    this.tasks.update((tasks) => tasks.filter((task, position) => position != index))
  }
}
