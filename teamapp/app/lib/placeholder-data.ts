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

const Records = [
    {
        positionId:Players[0].ID,
        passPercentage:.65,
        Appearances: 16,
        Penalties: 0
    },
    {
        positionId:Players[1].ID,
        passPercentage:.35,
        Appearances: 8,
        Penalties: 0
    },
    {
        positionId:Players[2].ID,
        passPercentage:.55,
        Appearances: 16,
        Penalties: 0
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

export {Players, Records, Positions}