import { Component } from '@angular/core';
import { GlassmorphismCard } from '../../Components/glassmorphism-card/glassmorphism-card';
import { MatIconModule } from '@angular/material/icon';
import { getLevelPercentage, getRanking } from '../../Enums/ranking';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-profile',
  imports: [GlassmorphismCard, MatIconModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  getRanking = getRanking;
  getLevelPercentage = getLevelPercentage;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'xp',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/xp-icon.svg')
    );
  }

  profile: any = {
    username: 'John Doe',
    sessions: 13,
    favTrack: 'Track 1',
    tracks: 10,
    time: '10000s',
    wins: 10,
    losses: 10,
    winRate: 50,
    longestWinStreak: 10,
    longestLossStreak: 10,
    currentStreak: 10,
    totalStreak: 10,
    ranking: {},
  };

  ngOnInit() {
    this.profile.ranking = this.getRanking(this.profile.sessions);
  }
}
