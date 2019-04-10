import { Component, OnInit } from '@angular/core';
import {PoolbuyService} from '../../services/poolbuy.service'

@Component({
  selector: 'app-demand',
  template: `<table>
  <thead>
      <th>Name</th>
      <th>Index</th>
  </thead>
  <tbody>
      <tr *ngFor="let state of states">
          <td>{{state.stateKey}}</td>
          <td>{{state.name}}</td>
      </tr>
  </tbody>
</table>`,
  styleUrls: ['./demand.component.css'],
 providers:[PoolbuyService]
})

export class DemandComponent implements OnInit {
  // states = [
  //   {id: 1, name:'Superman'},
  //   {id: 2, name:'Batman'},
  //   {id: 5, name:'BatGirl'},
  //   {id: 3, name:'Robin'},
  //   {id: 4, name:'Flash'}
  // ];
  states;
  // constructor(private rest:PoolbuyService, private route: ActivatedRoute, private router: Router) { }
  constructor(private service:PoolbuyService) { }

  ngOnInit() {
    this.getStates();
  }

  getStates() {
    this.service.getStates().subscribe(
      data => {this.states = data},
      err => console.error(err),
      () => console.log('States loaded')
    )

  }

}
