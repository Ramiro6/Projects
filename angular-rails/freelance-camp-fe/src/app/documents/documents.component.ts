import { Component, OnInit } from '@angular/core';
import { Document } from './documents';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My first Doc",
      description: "jasjasjsajkasjkasjk",
      file_url: "http://google.com",
      update_at: "06/05/17",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg",
    },
    {
      title: "My second Doc",
      description: "jasjasjsajkasjkasjk",
      file_url: "http://google.com",
      update_at: "06/05/17",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg",
    },
    {
      title: "My last Doc",
      description: "jasjasjsajkasjkasjk",
      file_url: "http://google.com",
      update_at: "06/05/17",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg",
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
