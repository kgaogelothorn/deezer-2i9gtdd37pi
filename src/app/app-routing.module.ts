import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TracksComponent } from './components/tracks/tracks.component';
import { ArtistComponent } from './components/artist/artist.component';

const routes: Routes = [
  { path: '', redirectTo: 'tracks', pathMatch: 'full'},
  { path: 'tracks', component: TracksComponent},
  { path: 'artist/:id', component: ArtistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
