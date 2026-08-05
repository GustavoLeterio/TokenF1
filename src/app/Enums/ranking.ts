export enum Ranking {
    RANKLESS = 'Rankless',
    ROOKIE = 'Rookie',
    AMATEUR = 'Amateur',
    PRO = 'Pro',
    ELITE = 'Elite',
    LEGEND = 'Legend',
}

export function getRanking(sessions: number) {
    if (sessions < 3) {
        return rankingInfo[Ranking.RANKLESS];
    } else if (sessions < 6) {
        return rankingInfo[Ranking.ROOKIE];
    } else if (sessions < 9) {
        return rankingInfo[Ranking.AMATEUR];
    } else if (sessions < 12) {
        return rankingInfo[Ranking.PRO];
    } else if (sessions < 15) {
        return rankingInfo[Ranking.ELITE];
    } else {
        return rankingInfo[Ranking.LEGEND];
    }
}

export function getLevelPercentage(sessions: number): number {
    if (sessions >= 15)
        return 100;
    // -- Gustavo Letério --
    //Each rank takes 3 sessions to level up, 
    // so I can extract the percentage of the current level 
    // by dividing the sessions by 3 
    // and subtracting the truncated value from the original value.
    var extractPercentageInDecimals: number = sessions / 3;
    extractPercentageInDecimals = (extractPercentageInDecimals - Math.trunc(extractPercentageInDecimals)) * 100;
    return extractPercentageInDecimals;
}

const rankingInfo = {
    [Ranking.RANKLESS]: {
        name: 'Rankless',
        minSessions:0,
        nextRank: Ranking.ROOKIE
    },
    [Ranking.ROOKIE]: {
        name: 'Rookie',
        minSessions:3,
        nextRank: Ranking.AMATEUR
        
    },
    [Ranking.AMATEUR]: {
        name: 'Amateur',
        minSessions:6,
        nextRank: Ranking.PRO

    },
    [Ranking.PRO]: {
        name: 'Pro',
        minSessions:9,
        nextRank: Ranking.ELITE

    },
    [Ranking.ELITE]: {
        name: 'Elite',
        minSessions:12,
        nextRank: Ranking.LEGEND

    },
    [Ranking.LEGEND]: {
        name: 'Legend',
        minSessions:15,
        nextRank: null
    },
}