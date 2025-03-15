import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import { CommonModule } from '@angular/common';
import esLocate from '@fullcalendar/core/locales/es';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule, MatIconModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

  constructor(private router: Router) {}
  
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin],
    locale: esLocate,
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'dayGridMonth,timeGridWeek,timeGridDay',
      right: 'title',
    },
    events: [
      {
        title: 'Obra de teatro', start: '2025-03-12T10:00:00',
        color: "#00eac3",
			  textColor: "#ffffff",
        className: 'evento-importante',
      },
      {
        title: 'Desfile deportivo', start: '2025-03-07T15:00:00',
        color: "#00eac3",
			  textColor: "#ffffff",
        className: 'evento-importante',
      }
    ],
    eventDidMount: (info) => {
      const datePipe = new DatePipe('en-US');
      const formattedTime = datePipe.transform(info.event.start, 'h:mm a'); 
  
      const eventElement = info.el.querySelector('.fc-event-time') || info.el.querySelector('.fc-event-main');

      if (eventElement && formattedTime) {
        console.log(info.event);
        eventElement.innerHTML = `${formattedTime}`;
      }
    }
  };
  
  irAProfile() {
    this.router.navigate(['/profile']);
  }

}
