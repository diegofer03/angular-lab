import { CommonModule } from '@angular/common';
import { Component, inject, Injector, computed, effect, signal } from '@angular/core';
import {task, filter} from '../models/task.model'
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
  tasks = signal<task[]>([])
  injector = inject(Injector);

  ngOnInit(){
    const tasksStore = localStorage.getItem('tasks')
    if(tasksStore){
      this.tasks.set(JSON.parse(tasksStore))
    }
    this.trackTask()
  }

  trackTask(){
    effect(()=>{
      const tasks = this.tasks()
      localStorage.setItem('tasks', JSON.stringify(tasks))
    },{injector: this.injector})
  }

  filter = signal<filter>('all')

  newTask = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('^(?!\s*$).+')
    ]
  })

  editableTask = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('^(?!\s*$).+')
    ]
  })

  taskByFilter = computed(() => {
    const tasks = this.tasks()
    const filter = this.filter()

    if(filter === 'pending') return tasks.filter(task => !task.completed)
    if(filter === 'completed') return tasks.filter(task => task.completed)
    return tasks
  })

  createTasks(){
    if (this.newTask.valid){
      const addTask = this.newTask.value
      this.tasks.update((tasks) => [...tasks, {
        id: Date.now(),
        title: addTask,
        completed: false
      }])
    }
  }

  completeTask(id:number){
    this.tasks.update((tasks) => tasks.map((task) => {
      if (task.id === id) return { ...task, completed: !task.completed }
      return task
    }))
  }

  editingTask(id:number){
    this.tasks.update((tasks) => tasks.map((task) => {
      if (task.id === id && !task.completed) {
        this.editableTask.setValue(task.title)
        return { ...task, editing: true }
      }
      return {...task, editing: false}
    }))
  }

  editTask(id:number){
    console.log('asdasd')
    this.tasks.update((tasks) => tasks.map((task) => {
      if (task.id === id) return { ...task, editing: false, title: this.editableTask.value }
      return {...task}
    }))
  }

  deleteTask(id : number){
    this.tasks.update((tasks) => tasks.filter((task) => task.id != id))
  }

  changeFilter(flt: filter){
    this.filter.set(flt)
  }
}
