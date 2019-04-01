import {Component, OnInit} from '@angular/core';
import {Connection, IotherBody, IVirtualMachine, OtherBody, VirtualMachine, VMState} from './VirtualMachine/VirtualMachine.model';
import {equal} from 'assert';
import {fromJS, List} from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'immutable';

  constructor() {

  }


  ngOnInit(): void {
    // const user1: User = new User({email: 'abc@test.com'});
    // user1.toJs();
    // const updateUser: User = user1.with({firstName: 'David', lastName: 'Yu'});
    // updateUser.toJs();
    // console.log(updateUser.equals(user1));
    // const vm = new VirtualMachine({id: '123', state: VMState.Running});
    // const vm2 = vm.set('id', '')
    //

    const a: IVirtualMachine = {
      id: '',
      state: VMState.Running,
      connection: new Connection({}),
      screenshot: '',
      brothers: List<OtherBody>()
    };

    const vm2 = new VirtualMachine(a);
    const vm2List = vm2.get('brothers');
    console.log(List.isList(vm2List));

    const vm3 = new VirtualMachine(fromJS(JSON.parse(JSON.stringify(a))));
    const vm3List = vm3.get('brothers');
    console.log(List.isList(vm3List));
    console.log(List.isList(List()));
    // const vm4 = vm3.get('brothers').insert(0, {hand: 'hand', leg: 'leg'});
    // console.log(vm4);

  }

}
