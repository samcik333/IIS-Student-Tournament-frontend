import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './user/profile/profile.component';
import { TeamsComponent } from './user/teams/teams.component';
import { TournamentsComponent } from './user/tournaments/tournaments.component';
import { InfoComponent } from './tournament/info/info.component';
import { PlayersComponent } from './tournament/players/players.component';
import { PlayoffComponent } from './tournament/playoff/playoff.component';
import { PlayerComponent } from './info/player/player.component';
import { TeamComponent } from './info/team/team.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/profile', component: ProfileComponent },
  { path: 'user/teams', component: TeamsComponent },
  { path: 'user/tournaments', component: TournamentsComponent },

  { path: 'user', component: PlayerComponent },
  { path: 'team/:id', component: TeamComponent },

  { path: 'tournament/:id', component: InfoComponent },
  { path: 'tournament/:id/players', component: PlayersComponent },
  { path: 'tournament/:id/playoff', component: PlayoffComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
