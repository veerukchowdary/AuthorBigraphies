import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthorService } from 'src/app/services/authorservices/authorservices.service';
import { CommunicatinserviceService } from 'src/app/services/communicationservice.service';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.scss']
})
export class AuthorInfoComponent implements OnInit, OnDestroy {

  public selectedAuthorKey: string = "";
  private subscription: Subscription = new Subscription;

  authorDetails: any;
  authorEntries: any;
  isGridView: boolean = true;
  
  
  constructor(
    private authorService: AuthorService,
    private communicationService: CommunicatinserviceService
  ) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.communicationService.getSelectedAuthor().subscribe(
      selectedAuthor => {
        this.selectedAuthorKey = selectedAuthor;
        this.authorDetails = null;
        this.authorEntries = null;
        if(this.selectedAuthorKey) {
          this.authorService.getAuthorDetails(this.selectedAuthorKey).subscribe(data => {
            this.authorDetails = data;
          });
          this.authorService.getAuthorWorks(this.selectedAuthorKey).subscribe(data => {
            this.authorEntries = data.entries;
          });
        }
      });
  }
}
