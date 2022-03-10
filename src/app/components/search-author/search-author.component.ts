import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/authorservices/authorservices.service';
import { CommunicatinserviceService } from 'src/app/services/communicationservice.service';

@Component({
  selector: 'app-search-author',
  templateUrl: './search-author.component.html',
  styleUrls: ['./search-author.component.scss']
})
export class SearchAuthorComponent implements OnInit {

  selectedAuthor: any;

  results: any;
  //authorDetails: any;
  //authorEntries: any;

  constructor(
    private authorService: AuthorService,
    private communicationService: CommunicatinserviceService
    ) { }

  ngOnInit(): void {
  }

  search(event: any) {
    this.selectedAuthor = null;
    this.communicationService.updateSelectedAuthor(this.selectedAuthor);
    this.authorService.getAuthors(event.query).subscribe((data: any) => {
      this.results = data.docs;
    });
  }

  onSelect(value: any) {
    console.log("On select");
    this.selectedAuthor = value;
    if(this.selectedAuthor && this.selectedAuthor.key) {
      console.log("Selected Author: ", this.selectedAuthor.key)
      this.communicationService.updateSelectedAuthor(this.selectedAuthor.key);
    }
  }
}
