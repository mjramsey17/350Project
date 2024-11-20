const Seasons = [
    {
        SeasonId: 1,
        Year: 2024,
        Wins: 8,
        Losses: 3,
        Ties: 6
    },
    {
        SeasonId: 2,
        Year: 2023,
        Wins: 7,
        Losses: 10,
        Ties: 1
    }
]

const Players = [
    {
        PlayerId: 1,
        Name: 'Michael Ramsey',
        Position: 'Forward'
    },
    {
        PlayerId: 2,
        Name: 'Will Fatzinger',
        Position: 'Defense'
    },
    {
        PlayerId: 3,
        Name: 'Slate Danforth',
        Position: 'Midfield'
    },
    {
        PlayerId: 4,
        Name: 'Harrison Kraus',
        Position: 'Forward'
    },
    {
        PlayerId: 5,
        Name: 'Luca Gustafson',
        Position: 'Goalkeeper'
    },
    {
        PlayerId: 6,
        Name: 'Kyle Butcher',
        Position: 'Forward'
    },
    {
        PlayerId: 7,
        Name: 'Alex Lopacinski',
        Position: 'Defender'
    },
    {
        PlayerId: 8,
        Name: 'Jake Berecz',
        Position: 'Forward'
    },
    {
        PlayerId: 9,
        Name: 'Ryan Pidgeon',
        Position: 'Midfield'
    },
    {
        PlayerId: 10,
        Name: 'Pacific Ibanzi',
        Position: 'Midfield'
    },
    {
        PlayerId: 11,
        Name: 'Quinn Kunath',
        Position: 'Defender'
    },
    {
        PlayerId: 12,
        Name: 'Carter Laatsch',
        Position: 'Midfield'
    },
    {
        PlayerId: 13,
        Name: 'Carlos Lomena',
        Position: 'Forward'
    },
    {
        PlayerId: 14,
        Name: 'Girom Affolter',
        Position: 'Forward'
    },
    {
        PlayerId: 15,
        Name: 'Brian Manon',
        Position: 'Defense'
    },
    {
        PlayerId: 16,
        Name: 'Till Schumacher',
        Position: 'Midfield'
    },
    {
        PlayerId: 17,
        Name: 'Hugo Berg',
        Position: 'Midfield'
    },
    {
        PlayerId: 18,
        Name: 'Michael Pickens',
        Position: 'Forward'
    },
    {
        PlayerId: 19,
        Name: 'Peyton Mancini',
        Position: 'Defender'
    },
    {
        PlayerId: 20,
        Name: 'Lucas Pace',
        Position: 'Defense'
    },
    {
        PlayerId: 21,
        Name: 'Ludvig Werner',
        Position: 'Defense'
    }
]

const Games = [
    {
        GameId: 1,
        SeasonId: 1,
        Date: '2024-08-30',
        Opponent: 'Catholic University',
        Location: 'Home',
        Result: 'W',
        NokeGoals: 3,
        OpponentGoals: 2


    },
    {
        GameId: 2,
        SeasonId: 1,
        Date: '2024-09-06',
        Opponent: 'Oglethorpe University',
        Location: 'Away',
        Result: 'T',
        NokeGoals: 0,
        OpponentGoals: 0
    },
    {
        GameId: 3,
        SeasonId: 1,
        Date: '2024-09-08',
        Opponent: 'Emory University',
        Location: 'Away',
        Result: 'W',
        NokeGoals: 1,
        OpponentGoals: 0
    },
    {
        GameId: 4,
        SeasonId: 1,
        Date: '2024-09-14',
        Opponent: 'Marietta College',
        Location: 'Home',
        Result: 'T',
        NokeGoals: 0,
        OpponentGoals: 0
    },
    {
        GameId: 5,
        SeasonId: 1,
        Date: '2024-09-20',
        Opponent: 'Centre College',
        Location: 'Home',
        Result: 'W',
        NokeGoals: 4,
        OpponentGoals: 1
    },
    {
        GameId: 6,
        SeasonId: 1,
        Date: '2024-09-25',
        Opponent: 'University of Lynchburg',
        Location: 'Away',
        Result: 'L',
        NokeGoals: 1,
        OpponentGoals: 2
    },
    {
        GameId: 7,
        SeasonId: 1,
        Date: '2024-09-28',
        Opponent: 'Randolph-Macon College',
        Location: 'Home',
        Result: 'W',
        NokeGoals: 3,
        OpponentGoals: 0
    },
    {
        GameId: 8,
        SeasonId: 1,
        Date: '2024-10-02',
        Opponent: 'Ferrum College',
        Location: 'Home',
        Result: 'W',
        NokeGoals: 2,
        OpponentGoals: 0
    },
    {
        GameId: 9,
        SeasonId: 1,
        Date: '2024-10-05',
        Opponent: 'Hampden-Sydney College',
        Location: 'Away',
        Result: 'L',
        NokeGoals: 0,
        OpponentGoals: 2
    },
    {
        GameId: 10,
        SeasonId: 1,
        Date: '2024-10-09',
        Opponent: 'Guilford College',
        Location: 'Away',
        Result: 'W',
        NokeGoals: 1,
        OpponentGoals: 0
    },
    {
        GameId: 11,
        SeasonId: 1,
        Date: '2024-10-12',
        Opponent: 'Virginia Wesleyan University',
        Location: 'Home',
        Result: 'W',
        NokeGoals: 3,
        OpponentGoals: 2
    },
    {
        GameId: 12,
        SeasonId: 1,
        Date: '2024-10-16',
        Opponent: 'Averett University',
        Location: 'Home',
        Result: 'T',
        NokeGoals: 0,
        OpponentGoals: 0
    },
    {
        GameId: 13,
        SeasonId: 1,
        Date: '2024-10-19',
        Opponent: 'Penn State Abington',
        Location: 'Away',
        Result: 'T',
        NokeGoals: 0,
        OpponentGoals: 0
    },
    {
        GameId: 14,
        SeasonId: 1,
        Date: '2024-10-23',
        Opponent: 'Washington and Lee University',
        Location: 'Away',
        Result: 'T',
        NokeGoals: 2,
        OpponentGoals: 2
    },
    {
        GameId: 15,
        SeasonId: 1,
        Date: '2024-10-26',
        Opponent: 'Shenandoah University',
        Location: 'Away',
        Result: 'T',
        NokeGoals: 2,
        OpponentGoals: 2
    },
    {
        GameId: 16,
        SeasonId: 1,
        Date: '2024-10-30',
        Opponent: 'Bridgewater College',
        Location: 'Home',
        Result: 'W',
        NokeGoals: 4,
        OpponentGoals: 0
    },
    {
        GameId: 17,
        SeasonId: 1,
        Date: '2024-11-02',
        Opponent: 'Hampden-Sydney College',
        Location: 'Away',
        Result: 'L',
        NokeGoals: 1,
        OpponentGoals: 2
    }
]

const Events = [
    // Game VS Catholic
    {
        EventId: 1,
        // GameId: ,
        Time: 38,
        Type: 'Goal',
        Team: 1,
        PlayerId: 1 
    },
    {
        EventId: 2,
        // GameId: ,
        Time: 38,
        Type: 'Assist',
        Team: 1,
        PlayerId: 2
    },
    {
        EventId: 3,
        // GameId: ,
        Time: 46,
        Type: 'Goal',
        Team: 1,
        PlayerId: 3
    },
    {
        EventId: 4,
        // GameId: ,
        Time: 56,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 5,
        // GameId: ,
        Time: 73,
        Type: 'Goal',
        Team: 1,
        PlayerId: 1
    },
    {
        EventId: 6,
        // GameId: ,
        Time: 78,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 7,
        // GameId: ,
        Time: 78,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 8,
        // GameId: ,
        Time: 23,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 4
    },
    {
        EventId: 9,
        // GameId: ,
        Time: 54,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 10,
        // GameId: ,
        Time: 56,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 11,
        // GameId: ,
        Time: 56,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 5
    },
    {
        EventId: 12,
        // GameId: ,
        Time: 80,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 6
    },
    {
        EventId: 13,
        // GameId: ,
        Time: 83,
        Type: 'Red',
        Team: 1,
        PlayerId: 6
    },
    // Game 2 VS Oglethorpe
    {
        EventId: 14,
        // GameId: ,
        Time: 33,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 3
    },
    {
        EventId: 15,
        // GameId: ,
        Time: 34,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 16,
        // GameId: ,
        Time: 41,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 17,
        // GameId: ,
        Time: 56,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 18,
        // GameId: ,
        Time: 62,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 7
    },
    {
        EventId: 19,
        // GameId: ,
        Time: 72,
        Type: 'Red',
        Team: 1,
        PlayerId: 7
    },
    // Game 3 VS Emory
    {
        EventId: 20,
        // GameId: ,
        Time: 65,
        Type: 'Goal',
        Team: 1,
        PlayerId: 4
    },
    {
        EventId: 21,
        // GameId: ,
        Time: 65,
        Type: 'Assist',
        Team: 1,
        PlayerId: 8
    },
    {
        EventId: 22,
        // GameId: ,
        Time: 65,
        Type: 'Assist',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 23,
        // GameId: ,
        Time: 20,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 4
    },
    {
        EventId: 24,
        // GameId: ,
        Time: 42,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 10
    },
    {
        EventId: 25,
        // GameId: ,
        Time: 68,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 26,
        // GameId: ,
        Time: 73,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    // Game 4 VS Marietta
    {
        EventId: 27,
        // GameId: ,
        Time: 40,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 28,
        // GameId: ,
        Time: 82,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 29,
        // GameId: ,
        Time: 89,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    // Game 5 VS Centre
    {
        EventId: 30,
        // GameId: ,
        Time: 43,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 31,
        // GameId: ,
        Time: 43,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 32,
        // GameId: ,
        Time: 48,
        Type: 'Goal',
        Team: 1,
        PlayerId: 11
    },
    {
        EventId: 33,
        // GameId: ,
        Time: 48,
        Type: 'Assist',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 34,
        // GameId: ,
        Time: 53,
        Type: 'Goal',
        Team: 1,
        PlayerId: 12
    },
    {
        EventId: 35,
        // GameId: ,
        Time: 53,
        Type: 'Assist',
        Team: 1,
        PlayerId: 13
    },
    {
        EventId: 36,
        // GameId: ,
        Time: 69,
        Type: 'Goal',
        Team: 1,
        PlayerId: 14
    },
    {
        EventId: 37,
        // GameId: ,
        Time: 69,
        Type: 'Assist',
        Team: 1,
        PlayerId: 12
    },
    {
        EventId: 38,
        // GameId: ,
        Time: 89,
        Type: 'Goal',
        Team: 1,
        PlayerId: 1
    },
    {
        EventId: 38,
        // GameId: ,
        Time: 89,
        Type: 'Assist',
        Team: 1,
        PlayerId: 10
    },
    {
        EventId: 39,
        // GameId: ,
        Time: 21,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 40,
        // GameId: ,
        Time: 89,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    // Game 6 VS Lynchburg
    {
        EventId: 41,
        // GameId: ,
        Time: 17,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 42,
        // GameId: ,
        Time: 17,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 43,
        // GameId: ,
        Time: 55,
        Type: 'Goal',
        Team: 1,
        PlayerId: 3
    },
    {
        EventId: 44,
        // GameId: ,
        Time: 66,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 45,
        // GameId: ,
        Time: 31,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 12
    },
    {
        EventId: 46,
        // GameId: ,
        Time: 31,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 47,
        // GameId: ,
        Time: 44,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 15
    },
    {
        EventId: 48,
        // GameId: ,
        Time: 77,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 49,
        // GameId: ,
        Time: 89,
        Type: 'Red',
        Team: 1,
        PlayerId: 14
    },
    // Game 7 VS Radolph Macon
    {
        EventId: 50,
        // GameId: ,
        Time: 10,
        Type: 'Goal',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 51,
        // GameId: ,
        Time: 10,
        Type: 'Assist',
        Team: 1,
        PlayerId: 8
    },
    {
        EventId: 52,
        // GameId: ,
        Time: 20,
        Type: 'Goal',
        Team: 1,
        PlayerId: 7
    },
    {
        EventId: 53,
        // GameId: ,
        Time: 20,
        Type: 'Assist',
        Team: 1,
        PlayerId: 11
    },
    {
        EventId: 54,
        // GameId: ,
        Time: 82,
        Type: 'Goal',
        Team: 1,
        PlayerId: 1
    },
    // Game 8 VS Ferrum
    {
        EventId: 55,
        // GameId: ,
        Time: 14,
        Type: 'Goal',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 56,
        // GameId: ,
        Time: 78,
        Type: 'Goal',
        Team: 1,
        PlayerId: 8
    },
    {
        EventId: 57,
        // GameId: ,
        Time: 78,
        Type: 'Assist',
        Team: 1,
        PlayerId: 10
    },
    {
        EventId: 58,
        // GameId: ,
        Time: 78,
        Type: 'Assist',
        Team: 1,
        PlayerId: 5
    },
    {
        EventId: 59,
        // GameId: ,
        Time: 29,
        Type: 'Yellow',
        Team: 1,
        PlayerId: -2
    },
    {
        EventId: 60,
        // GameId: ,
        Time: 72,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 61,
        // GameId: ,
        Time: 88,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    // Game 9 VS Hampden Sydney
    {
        EventId: 62,
        // GameId: ,
        Time: 34,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 63,
        // GameId: ,
        Time: 34,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 64,
        // GameId: ,
        Time: 52,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 65,
        // GameId: ,
        Time: 52,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 66,
        // GameId: ,
        Time: 30,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 67,
        // GameId: ,
        Time: 52,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 16
    },
    {
        EventId: 68,
        // GameId: ,
        Time: 86,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    // Game 10 VS Guilford
    {
        EventId: 69,
        // GameId: ,
        Time: 71,
        Type: 'Goal',
        Team: 1,
        PlayerId: 10
    },
    {
        EventId: 70,
        // GameId: ,
        Time: 71,
        Type: 'Assist',
        Team: 1,
        PlayerId: 17
    },
    {
        EventId: 71,
        // GameId: ,
        Time: 42,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 72,
        // GameId: ,
        Time: 47,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 73,
        // GameId: ,
        Time: 67,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 74,
        // GameId: ,
        Time: 71,
        Type: 'Red',
        Team: 0,
        PlayerId: -1
    },
    // Game 11 VS Virginia Wesleyan
    {
        EventId: 75,
        // GameId: ,
        Time: 20,
        Type: 'Goal',
        Team: 1,
        PlayerId: 1
    },
    {
        EventId: 76,
        // GameId: ,
        Time: 22,
        Type: 'Goal',
        Team: 1,
        PlayerId: 1
    },
    {
        EventId: 77,
        // GameId: ,
        Time: 22,
        Type: 'Assist',
        Team: 1,
        PlayerId: 16
    },
    {
        EventId: 78,
        // GameId: ,
        Time: 26,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 79,
        // GameId: ,
        Time: 26,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 80,
        // GameId: ,
        Time: 55,
        Type: 'Goal',
        Team: 1,
        PlayerId: 14
    },
    {
        EventId: 81,
        // GameId: ,
        Time: 65,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 82,
        // GameId: ,
        Time: 65,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 83,
        // GameId: ,
        Time: 13,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 2
    },
    {
        EventId: 84,
        // GameId: ,
        Time: 23,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 85,
        // GameId: ,
        Time: 28,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 86,
        // GameId: ,
        Time: 70,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 16
    },
    {
        EventId: 87,
        // GameId: ,
        Time: 75,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 15
    },
    {
        EventId: 88,
        // GameId: ,
        Time: 82,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    // Game 12 VS Averett
    {
        EventId: 89,
        // GameId: ,
        Time: 22,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 90,
        // GameId: ,
        Time: 63,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 91,
        // GameId: ,
        Time: 70,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    // Game 13 VS Penn State Abington
    {
        EventId: 92,
        // GameId: ,
        Time: 77,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 93,
        // GameId: ,
        Time: 77,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 94,
        // GameId: ,
        Time: 87,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    // Game 14 VS Washington & Lee
    {
        EventId: 95,
        // GameId: ,
        Time: 29,
        Type: 'Goal',
        Team: 1,
        PlayerId: 6
    },
    {
        EventId: 96,
        // GameId: ,
        Time: 29,
        Type: 'Assist',
        Team: 1,
        PlayerId: 8
    },
    {
        EventId: 97,
        // GameId: ,
        Time: 62,
        Type: 'Goal',
        Team: 1,
        PlayerId: 11
    },
    {
        EventId: 98,
        // GameId: ,
        Time: 65,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 99,
        // GameId: ,
        Time: 65,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 100,
        // GameId: ,
        Time: 65,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 101,
        // GameId: ,
        Time: 88,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 102,
        // GameId: ,
        Time: 24,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 12
    },
    {
        EventId: 103,
        // GameId: ,
        Time: 28,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 104,
        // GameId: ,
        Time: 44,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 2
    },
    {
        EventId: 105,
        // GameId: ,
        Time: 56,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 106,
        // GameId: ,
        Time: 76,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    // Game 15 VS Shenandoah
    {
        EventId: 107,
        // GameId: ,
        Time: 11,
        Type: 'Goal',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 108,
        // GameId: ,
        Time: 16,
        Type: 'Goal',
        Team: 1,
        PlayerId: 1
    },
    {
        EventId: 109,
        // GameId: ,
        Time: 16,
        Type: 'Assist',
        Team: 1,
        PlayerId: 3
    },
    {
        EventId: 110,
        // GameId: ,
        Time: 61,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 111,
        // GameId: ,
        Time: 61,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 112,
        // GameId: ,
        Time: 88,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 113,
        // GameId: ,
        Time: 22,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 114,
        // GameId: ,
        Time: 67,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 115,
        // GameId: ,
        Time: 89,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 18
    },
    // Game 16 VS Bridgewater
    {
        EventId: 116,
        // GameId: ,
        Time: 20,
        Type: 'Goal',
        Team: 1,
        PlayerId: 1
    },
    {
        EventId: 117,
        // GameId: ,
        Time: 20,
        Type: 'Assist',
        Team: 1,
        PlayerId: 19
    },
    {
        EventId: 118,
        // GameId: ,
        Time: 21,
        Type: 'Goal',
        Team: 1,
        PlayerId: 1
    },
    {
        EventId: 119,
        // GameId: ,
        Time: 73,
        Type: 'Goal',
        Team: 1,
        PlayerId: 20
    },
    {
        EventId: 120,
        // GameId: ,
        Time: 73,
        Type: 'Assist',
        Team: 1,
        PlayerId: 17
    },
    {
        EventId: 121,
        // GameId: ,
        Time: 85,
        Type: 'Goal',
        Team: 1,
        PlayerId: 21
    },
    {
        EventId: 122,
        // GameId: ,
        Time: 85,
        Type: 'Assist',
        Team: 1,
        PlayerId: 17
    },
    {
        EventId: 123,
        // GameId: ,
        Time: 46,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 20
    },
    {
        EventId: 124,
        // GameId: ,
        Time: 70,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 10
    },
    {
        EventId: 125,
        // GameId: ,
        Time: 84,
        Type: 'Red',
        Team: 1,
        PlayerId: 15
    },
    // Game 17 VS Hampden Sydney
    {
        EventId: 126,
        // GameId: ,
        Time: 4,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 127,
        // GameId: ,
        Time: 4,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 128,
        // GameId: ,
        Time: 56,
        Type: 'Goal',
        Team: 1,
        PlayerId: 14
    },
    {
        EventId: 129,
        // GameId: ,
        Time: 56,
        Type: 'Assist',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 130,
        // GameId: ,
        Time: 89,
        Type: 'Goal',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 131,
        // GameId: ,
        Time: 89    ,
        Type: 'Assist',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 132,
        // GameId: ,
        Time: 55,
        Type: 'Yellow',
        Team: 1,
        PlayerId: 9
    },
    {
        EventId: 133,
        // GameId: ,
        Time: 67,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    },
    {
        EventId: 134,
        // GameId: ,
        Time: 75,
        Type: 'Yellow',
        Team: 0,
        PlayerId: -1
    }
]


export {Events, Players}