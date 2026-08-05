import { Component } from '@angular/core';
import { GlassmorphismCard } from '../../Components/glassmorphism-card/glassmorphism-card';
import { MatIconModule } from '@angular/material/icon';
import { getLevelPercentage, getRanking } from '../../Enums/ranking';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexOptions } from 'apexcharts';


@Component({
  selector: 'app-profile',
  imports: [GlassmorphismCard, MatIconModule, NgApexchartsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  getRanking = getRanking;
  getLevelPercentage = getLevelPercentage;

  glassmorphismCardStyle: any = {
    gap: '2rem',
    borderRadius: '1.5rem',
    padding: '1rem',
  }

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'xp',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg/xp-icon.svg')
    );
  }

  profile: any = {
    username: 'John Doe',
    sessions: 15,
    favTrack: 'Track 1',
    tracks: 12,
    time: '10000s',
    win: 10,
    loss: 10,
    matches: [
      {
        session: {
          id: 13,
        },
        trackData: {
          name: 'Interlagos GP',
          description: 'Interlagos GP is a track in Brazil with a long history of racing. It is a 4.328 km track with 13 turns.',
        },
        date: '2026-01-01',
        gridPosition: 3,
        position: 1,
        bestLapTime: '1.31.234',
      },
      {
        session: {
          id: 2,
        },
        trackData: {
          name: 'Monza GP',
          description: 'Monza GP is a track in Italy with a long history of racing. It is a 5.793 km track with 11 turns.',
        },
        date: '2026-01-02',
        gridPosition: 1,
        position: 2,
        bestLapTime: '1.41.234',
      },
      {
        session: {
          id: 3,
        },
        trackData: {
          name: 'Silverstone GP',
          description: 'Silverstone GP is a track in England with a long history of racing. It is a 5.9 km track with 18 turns.',
        },
        date: '2026-01-03',
        gridPosition: 2,
        position: 3,
        bestLapTime: '1.51.234',
      }, {
        session: {
          id: 1,
        },
        trackData: {
          name: 'Interlagos GP',
          description: 'Interlagos GP is a track in Brazil with a long history of racing. It is a 4.328 km track with 13 turns.',
        },
        date: '2026-01-01',
        gridPosition: 3,
        position: 1,
        bestLapTime: '1.31.234',
      },
      {
        session: {
          id: 2,
        },
        trackData: {
          name: 'Monza GP',
          description: 'Monza GP is a track in Italy with a long history of racing. It is a 5.793 km track with 11 turns.',
        },
        date: '2026-01-02',
        gridPosition: 1,
        position: 2,
        bestLapTime: '1.41.234',
      },
      {
        session: {
          id: 3,
        },
        trackData: {
          name: 'Silverstone GP',
          description: 'Silverstone GP is a track in England with a long history of racing. It is a 5.9 km track with 18 turns.',
        },
        date: '2026-01-03',
        gridPosition: 2,
        position: 3,
        bestLapTime: '1.51.234',
      }, {
        session: {
          id: 1,
        },
        trackData: {
          name: 'Interlagos GP',
          description: 'Interlagos GP is a track in Brazil with a long history of racing. It is a 4.328 km track with 13 turns.',
        },
        date: '2026-01-01',
        gridPosition: 3,
        position: 1,
        bestLapTime: '1.31.234',
      },
      {
        session: {
          id: 2,
        },
        trackData: {
          name: 'Monza GP',
          description: 'Monza GP is a track in Italy with a long history of racing. It is a 5.793 km track with 11 turns.',
        },
        date: '2026-01-02',
        gridPosition: 1,
        position: 2,
        bestLapTime: '1.41.234',
      },
      {
        session: {
          id: 3,
        },
        trackData: {
          name: 'Silverstone GP',
          description: 'Silverstone GP is a track in England with a long history of racing. It is a 5.9 km track with 18 turns.',
        },
        date: '2026-01-03',
        gridPosition: 2,
        position: 3,
        bestLapTime: '1.51.234',
      }, {
        session: {
          id: 1,
        },
        trackData: {
          name: 'Interlagos GP',
          description: 'Interlagos GP is a track in Brazil with a long history of racing. It is a 4.328 km track with 13 turns.',
        },
        date: '2026-01-01',
        gridPosition: 3,
        position: 1,
        bestLapTime: '1.31.234',
      },
      {
        session: {
          id: 2,
        },
        trackData: {
          name: 'Monza GP',
          description: 'Monza GP is a track in Italy with a long history of racing. It is a 5.793 km track with 11 turns.',
        },
        date: '2026-01-02',
        gridPosition: 1,
        position: 2,
        bestLapTime: '1.41.234',
      },
      {
        session: {
          id: 3,
        },
        trackData: {
          name: 'Silverstone GP',
          description: 'Silverstone GP is a track in England with a long history of racing. It is a 5.9 km track with 18 turns.',
        },
        date: '2026-01-03',
        gridPosition: 2,
        position: 3,
        bestLapTime: '1.51.234',
      },
    ]
  };

  chartOptions: any = {
    chart: {
      type: 'area',
      width: '100%',
      height: 48,
      sparkline: {
        enabled: true // Ativa modo compacto (desativa eixos X/Y, grades e legendas)
      },
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
      shared: false,
      followCursor: true,
      custom: undefined, // Usamos o estilo CSS customizado abaixo
      x: {
        show: false // Oculta o título/eixo X na tooltip para manter minimalista
      },
      y: {
        formatter: (val: number) => `${val.toFixed(2)} W/L`, // Formatação do número
        title: {
          formatter: () => '' // Oculta o nome da série ("Rating:") deixando só o número limpo
        }
      },
      marker: {
        show: true // Exibe a bolinha vermelha neon indicando o ponto exato
      }
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#CCC"]
    },
    fill: {
      type: 'gradient',
      colors: ["#CCC"],
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: .6,
        opacityTo: 0,
        stops: [.1]
      },
    },
    series: [{
      data: [
        0.50,
        0.75,
        1,
        1.15,
        1,
        1.50,
        1.40,
        1.15,
        0.85,
        1.4
      ]
    }],
  };

  ngOnInit() {
    this.profile.ranking = this.getRanking(this.profile.sessions);
  }

  rowHover(event: Event) {
    console.log('rowHover');
    console.log(event);
  }
}
