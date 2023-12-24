import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { AudioComponent } from '../../components/audio/audio.component';
import { HighlightDirective } from 'app/pages/ecommerce/directives/highlight.directive';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, AudioComponent, HighlightDirective, HeaderComponent],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  duration = signal(0)
  message = signal('')

  changeDuration(event: Event){
    const input = event.target as HTMLInputElement
    this.duration.set(input.valueAsNumber)
  }

  changeMessage(event: Event){
    const input = event.target as HTMLInputElement
    this.message.set(input.value)
  }
}
