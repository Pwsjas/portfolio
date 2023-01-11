import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  @Input() title: string = '';
  @Input() images: string[] = [];
  @Input() description: string = 'My name is Philip, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac rhoncus tortor. Integer dictum eros ut neque tincidunt, eget ullamcorper lectus laoreet. Donec malesuada elit sit amet commodo suscipit. Nam lobortis pretium risus, ut euismod est lacinia non. Nulla pellentesque velit vel condimentum pellentesque. Sed.';
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
