import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {task} from '../models/task.model'

@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [CommonModule],
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

  createTask(event : Event){
    const input = event.target as HTMLInputElement
    const newTask = input.value
    this.tasks.update((tasks) => [...tasks, {
      id: Date.now(),
      title: newTask,
      completed: false
    }])
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
