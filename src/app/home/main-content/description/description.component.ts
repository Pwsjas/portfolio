import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  @Input() title: string = '';
  @Input() images: string[] = [];
  @Input() description: string = '';
  @Input() links: string[] = [];


  selectedImage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  viewImage(image: string) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = '';
  }
}
