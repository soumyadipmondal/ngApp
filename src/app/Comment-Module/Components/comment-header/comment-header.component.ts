import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-header',
  templateUrl: './comment-header.component.html',
  styleUrls: ['./comment-header.component.css']
})
export class CommentHeaderComponent implements OnInit {
  @Input() isActive: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
