import {Component, inject, Input} from "@angular/core";
import {RouterLink} from "@angular/router";

@Component({
  selector:"app-pagination-buttons",
  imports:[RouterLink],
  templateUrl:"./pagination-buttons.component.html",
  styleUrl:"./pagination-buttons.component.css"
})
export class PaginationButtonsComponent {
  @Input()
  page:number = 1;

  @Input()
  totalPages:number = 1;

  getPageNumbers():number[] {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }
};