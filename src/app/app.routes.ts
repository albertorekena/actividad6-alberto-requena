import {Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {UserComponent} from "./pages/user/user.component";
import {NewUserComponent} from "./pages/new-user/new-user.component";
import {UpdateUserComponent} from "./pages/update-user/update-user.component";
import {Error404Component} from "./pages/error404/error404.component";

export const routes:Routes = [
	{path:"", pathMatch:"full", redirectTo:"home"},
	{path:"home", component:HomeComponent},
	{path:"user/:_id", component:UserComponent},
	{path:"newuser", component:NewUserComponent},
	{path:"updateuser/:_id", component:UpdateUserComponent},
	{path:"**", component:Error404Component}
];