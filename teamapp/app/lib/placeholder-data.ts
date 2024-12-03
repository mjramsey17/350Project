const Players = [
    {
        name: 'Michael Ramsey',
        height: '5ft, 11in',
        weight: 176,
        ID: 1345,
        starter: true,
        injured: false
    },
    {
        name: 'Lucas Pace',
        height: '6ft, 2in',
        weight: 185,
        ID: 1346,
        starter: false,
        injured: false
    },
    {
        name: 'Ryan Pidgeon',
        height: '5ft, 8in',
        weight: 169,
        ID: 1347,
        starter: true,
        injured: false
    }
]

const Events = [
    {
        EventId: 1,
        GameID: 1,
        Time: 38,
        Type: 'Goal',
        Team: 1,
        PlayerId: 1 
    },
    
    {
        EventId: 2,
        GameID: 1,
        Time: 38,
        Type: 'Assist',
        Team: 1,
        PlayerId: 2
    },

    {
        EventId: 3,
        GameID: 1,
        Time: 46,
        Type: 'Goal',
        Team: 1,
        PlayerId: 3
    }
]
const Positions = [
    {
        positionID: 1345,
        playerPosition: 'Forward'
    },
    {
        positionID: 1346,
        playerPosition: 'Defense'
    },
    {
        positionID: 1347,
        playerPosition: 'Forward'
    }
]

export {Players, Events, Positions}