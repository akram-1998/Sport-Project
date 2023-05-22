import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { WorldCupComponent } from './components/world-cup/world-cup.component';
import { ResultComponent } from './components/result/result.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { StatsComponent } from './components/stats/stats.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { MatchsTableComponent } from './components/matchs-table/matchs-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { ProfilComponent } from './components/profil/profil.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { UsersTabComponent } from './components/users-tab/users-tab.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AsterixPipe } from './pipes/asterix.pipe';
import { SearchComponent } from './components/search/search.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { StadiumsTabComponent } from './components/stadiums-tab/stadiums-tab.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { StoreTabComponent } from './components/store-tab/store-tab.component';
import { EditStoreComponent } from './components/edit-store/edit-store.component';
import { SearchTeamComponent } from './components/search-team/search-team.component';
import { HttpClientModule } from "@angular/common/http";
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    WorldCupComponent,
    ResultComponent,
    LatestNewsComponent,
    StatsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    AddMatchComponent,
    AddTeamComponent,
    DashboardComponent,
    AddPlayerComponent,
    MatchsTableComponent,
    TeamsTableComponent,
    PlayersTableComponent,
    MatchesComponent,
    PlayersComponent,
    PlayerComponent,
    MatchInfoComponent,
    EditMatchComponent,
    TeamInfoComponent,
    ProfilComponent,
    SignupAdminComponent,
    UsersTabComponent,
    ReversePipe,
    AsterixPipe,
    SearchComponent,
    AddStadiumComponent,
    StadiumsTabComponent,
    AddStoreComponent,
    StoreTabComponent,
    EditStoreComponent,
    SearchTeamComponent,
    ProfileComponent,
    WeatherComponent,
    ReclamationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
