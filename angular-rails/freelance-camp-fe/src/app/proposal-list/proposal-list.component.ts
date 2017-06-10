import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {
  proposalOne: Proposal = new Proposal(15, 'xyz company', 'http://, portafolio.jordanhudgens.com', 'ror', 150,120,15,'ramiro@gmail.com')
  proposalTwo: Proposal = new Proposal(99, 'abc company', 'http://, portafolio.jordanhudgens.com', 'ror', 150,120,15,'ramiro@gmail.com')
  proposalThree: Proposal = new Proposal(300, 'tt company', 'http://, portafolio.jordanhudgens.com', 'ror', 150,120,15,'ramiro@gmail.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]

  constructor() { }

  ngOnInit() {
  }

}
