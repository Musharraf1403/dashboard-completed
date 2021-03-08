import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() togglesidebarForme: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  ontogglesidebar(){
    this.togglesidebarForme.emit();
    setTimeout(()=>{
      window.dispatchEvent(new Event('resize'))
    }, 300)
    
  }
}
