import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { ProfilComponent } from './components/profil/profil.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { SearchComponent } from './components/search/search.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { EditStoreComponent } from './components/edit-store/edit-store.component';
import { SearchTeamComponent } from './components/search-team/search-team.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';



const routes: Routes = [
  /*le path pour afficher le path au URL haut du page */
  /*le component pour limportation du ficher volu a afficher */
  { path: "", component: HomeComponent },
  { path: "signin", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "addMatch", component: AddMatchComponent },
  { path: "addTeam", component: AddTeamComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "addPlayer", component: AddPlayerComponent },
  { path: "matches", component: MatchesComponent },
  { path: "players", component: PlayersComponent },
  { path: "matchInfo/:id", component: MatchInfoComponent },
  { path: "editMatch/:id", component: EditMatchComponent },
  { path: "teamInfo/:x", component: TeamInfoComponent },
  { path: "signupAdmin", component: SignupAdminComponent },
  { path: "searchMatches", component: SearchComponent },
  { path: "addStaduims", component: AddStadiumComponent },
  { path: "addStore", component: AddStoreComponent },
  { path: "editStore/:id", component: EditStoreComponent },
  { path: "searchTeam", component: SearchTeamComponent },
  { path: "profile", component: ProfilComponent },
  { path: "weather", component: WeatherComponent },
  { path: "reclamation", component: ReclamationComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
