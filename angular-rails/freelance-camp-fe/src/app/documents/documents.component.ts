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
      image_url: "http://google.com",
    },
    {
      title: "My second Doc",
      description: "jasjasjsajkasjkasjk",
      file_url: "http://google.com",
      update_at: "06/05/17",
      image_url: "http://google.com",
    },
    {
      title: "My last Doc",
      description: "jasjasjsajkasjkasjk",
      file_url: "http://google.com",
      update_at: "06/05/17",
      image_url: "http://google.com",
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
