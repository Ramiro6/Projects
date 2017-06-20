import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';
import { ProposalService } from '../proposal-show/proposal.service';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css'],
  providers: [ ProposalService ]
})
export class ProposalListComponent implements OnInit {
  proposals: Proposal[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private ProposalService: ProposalService
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getProposals());
  }
  getProposals(){
    this.ProposalService.getProposals()
        .subscribe(
          proposals => this.proposals = proposals,
          error => this.errorMessage = <any>error
        );
  }

}
