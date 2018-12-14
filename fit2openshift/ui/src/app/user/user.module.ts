import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {UserListComponent} from './user-list/user-list.component';
import {CoreModule} from '../core/core.module';
import {UserService} from './user.service';
import { UserCreateComponent } from './user-create/user-create.component';

@NgModule({
  declarations: [UserComponent, UserListComponent, UserCreateComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [UserService]
})
export class UserModule {
}
