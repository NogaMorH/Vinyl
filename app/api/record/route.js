// const gRecords = [
//     {
//         id: '1',
//         artist: 'The Beatles',
//         recordName: 'Abbey Road',
//         releaseYear: 1969,
//         price: 29.99,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg'
//     },
//     {
//         id: '2',
//         artist: 'Pink Floyd',
//         recordName: 'The Dark Side of the Moon',
//         releaseYear: 1973,
//         price: 26.95,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/he/3/3b/Dark_Side_of_the_Moon.png'
//     },
//     {
//         id: '3',
//         artist: 'Michael Jackson',
//         recordName: 'Thriller',
//         releaseYear: 1982,
//         price: 18.97,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png'
//     },
//     {
//         id: '6',
//         artist: 'Led Zeppelin',
//         recordName: 'Led Zeppelin IV',
//         releaseYear: 1971,
//         price: 31.9,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/he/7/77/LedZeppelinFourSymbols.jpg'
//     },
//     {
//         id: '7',
//         artist: 'Miles Davis',
//         recordName: 'Kind of Blue',
//         releaseYear: 1959,
//         price: 24.99,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/en/9/9c/MilesDavisKindofBlue.jpg'
//     },
//     {
//         id: '8',
//         artist: 'The Rolling Stones',
//         recordName: 'Exile on Main St.',
//         releaseYear: 1972,
//         price: 28.5,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/en/c/ca/ExileMainSt.jpg'
//     },
//     {
//         id: '9',
//         artist: 'Bob Dylan',
//         recordName: 'Highway 61 Revisited',
//         releaseYear: 1965,
//         price: 22.75,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/en/9/95/Bob_Dylan_-_Highway_61_Revisited.jpg'
//     },
//     {
//         id: '10',
//         artist: 'Prince',
//         recordName: 'Purple Rain',
//         releaseYear: 1984,
//         price: 19.99,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Princepurplerain.jpg'
//     },
//     {
//         id: '11',
//         artist: 'Jimi Hendrix',
//         recordName: 'Are You Experienced',
//         releaseYear: 1967,
//         price: 27.95,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/en/1/17/AreyouexpUK.jpg'
//     },
//     {
//         id: '12',
//         artist: 'Radiohead',
//         recordName: 'OK Computer',
//         releaseYear: 1997,
//         price: 25.5,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png'
//     },
//     {
//         id: '13',
//         artist: 'David Bowie',
//         recordName: 'The Rise and Fall of Ziggy Stardust and the Spiders from Mars',
//         releaseYear: 1972,
//         price: 29.99,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/en/0/01/ZiggyStardust.jpg'
//     },
//     {
//         id: '14',
//         artist: 'Fleetwood Mac',
//         recordName: 'Rumours',
//         releaseYear: 1977,
//         price: 21.99,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG'
//     },
//     {
//         id: '15',
//         artist: 'The Beach Boys',
//         recordName: 'Pet Sounds',
//         releaseYear: 1966,
//         price: 23.5,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/en/b/bb/PetSoundsCover.jpg'
//     },
//     {
//         id: '16',
//         artist: 'Bob Marley and The Wailers',
//         recordName: 'Legend',
//         releaseYear: 1984,
//         price: 26.95,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/BobMarley-Legend.jpg/220px-BobMarley-Legend.jpg'
//     },
//     {
//         id: '17',
//         artist: 'Queen',
//         recordName: 'A Night at the Opera',
//         releaseYear: 1975,
//         price: 27.99,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_At_The_Opera.png'
//     },
//     {
//         id: '18',
//         artist: 'Eagles',
//         recordName: 'Hotel California',
//         releaseYear: 1976,
//         price: 29.99,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Hotelcalifornia.jpg/220px-Hotelcalifornia.jpg'
//     },
//     {
//         id: '19',
//         artist: 'AC/DC',
//         recordName: 'Back in Black',
//         releaseYear: 1980,
//         price: 24.5,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/ACDC_Back_in_Black_cover.svg/1200px-ACDC_Back_in_Black_cover.svg.png'
//     },
//     {
//         id: '20',
//         artist: 'Nas',
//         recordName: 'Illmatic',
//         releaseYear: 1994,
//         price: 21.95,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/en/2/27/IllmaticNas.jpg'
//     },
//     {
//         id: '21',
//         artist: 'The Clash',
//         recordName: 'London Calling',
//         releaseYear: 1979,
//         price: 26.99,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/en/0/00/TheClashLondonCallingalbumcover.jpg'
//     },
//     {
//         id: '22',
//         artist: 'The Smiths',
//         recordName: 'The Queen Is Dead',
//         releaseYear: 1986,
//         price: 23.75,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/en/e/ed/The-Queen-is-Dead-cover.png'
//     },
//     {
//         id: '23',
//         artist: 'Bruce Springsteen',
//         recordName: 'Born to Run',
//         releaseYear: 1975,
//         price: 28.5,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Born_to_Run_%28Front_Cover%29.jpg'
//     },
//     {
//         id: '24',
//         artist: 'Amy Winehouse',
//         recordName: 'Back to Black',
//         releaseYear: 2006,
//         price: 19.99,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'
//     },
//     {
//         id: '25',
//         artist: 'Guns N\' Roses',
//         recordName: 'Appetite for Destruction',
//         releaseYear: 1987,
//         price: 25.99,
//         coverImg: 'https://upload.wikimedia.org/wikipedia/he/c/c6/AppetiteforDestructionCover.jpg'
//     }
// ]

// const gRecords = [
//     {
//         "artist": 'The Beatles',
//         "recordName": 'Abbey Road',
//         "releaseYear": 1969,
//         "price": 29.99,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
//     },
//     {
//         "artist": "Pink Floyd",
//         "recordName": "The Dark Side of the Moon",
//         "releaseYear": 1973,
//         "price": 26.95,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/he/3/3b/Dark_Side_of_the_Moon.png"
//     },
//     {
//         "artist": "Michael Jackson",
//         "recordName": "Thriller",
//         "releaseYear": 1982,
//         "price": 18.97,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png"
//     },
//     {
//         "artist": "Led Zeppelin",
//         "recordName": "Led Zeppelin IV",
//         "releaseYear": 1971,
//         "price": 31.9,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/he/7/77/LedZeppelinFourSymbols.jpg"
//     },
//     {
//         "artist": "Miles Davis",
//         "recordName": "Kind of Blue",
//         "releaseYear": 1959,
//         "price": 24.99,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/en/9/9c/MilesDavisKindofBlue.jpg"
//     },
//     {
//         "artist": "The Rolling Stones",
//         "recordName": "Exile on Main St.",
//         "releaseYear": 1972,
//         "price": 28.5,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/en/c/ca/ExileMainSt.jpg"
//     },
//     {
//         "artist": "Bob Dylan",
//         "recordName": "Highway 61 Revisited",
//         "releaseYear": 1965,
//         "price": 22.75,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/en/9/95/Bob_Dylan_-_Highway_61_Revisited.jpg"
//     },
//     {
//         "artist": "Prince",
//         "recordName": "Purple Rain",
//         "releaseYear": 1984,
//         "price": 19.99,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/en/9/9c/Princepurplerain.jpg"
//     },
//     {
//         "artist": "Jimi Hendrix",
//         "recordName": "Are You Experienced",
//         "releaseYear": 1967,
//         "price": 27.95,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/en/1/17/AreyouexpUK.jpg"
//     },
//     {
//         "artist": "Radiohead",
//         "recordName": "OK Computer",
//         "releaseYear": 1997,
//         "price": 25.5,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png"
//     },
//     {
//         "artist": "David Bowie",
//         "recordName": "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
//         "releaseYear": 1972,
//         "price": 29.99,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/en/0/01/ZiggyStardust.jpg"
//     },
//     {
//         "artist": "Fleetwood Mac",
//         "recordName": "Rumours",
//         "releaseYear": 1977,
//         "price": 21.99,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG"
//     },
//     {
//         "artist": "The Beach Boys",
//         "recordName": "Pet Sounds",
//         "releaseYear": 1966,
//         "price": 23.5,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/en/b/bb/PetSoundsCover.jpg"
//     },
//     {
//         "artist": "Bob Marley and The Wailers",
//         "recordName": "Legend",
//         "releaseYear": 1984,
//         "price": 26.95,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/BobMarley-Legend.jpg/220px-BobMarley-Legend.jpg"
//     },
//     {
//         "artist": "Queen",
//         "recordName": "A Night at the Opera",
//         "releaseYear": 1975,
//         "price": 27.99,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_At_The_Opera.png"
//     },
//     {
//         "artist": "Eagles",
//         "recordName": "Hotel California",
//         "releaseYear": 1976,
//         "price": 29.99,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Hotelcalifornia.jpg/220px-Hotelcalifornia.jpg"
//     },
//     {
//         "artist": "AC/DC",
//         "recordName": "Back in Black",
//         "releaseYear": 1980,
//         "price": 24.5,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/ACDC_Back_in_Black_cover.svg/1200px-ACDC_Back_in_Black_cover.svg.png"
//     },
//     {
//         "artist": "Nas",
//         "recordName": "Illmatic",
//         "releaseYear": 1994,
//         "price": 21.95,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/en/2/27/IllmaticNas.jpg"
//     },
//     {
//         "artist": "The Clash",
//         "recordName": "London Calling",
//         "releaseYear": 1979,
//         "price": 26.99,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/en/0/00/TheClashLondonCallingalbumcover.jpg"
//     },
//     {
//         "artist": "The Smiths",
//         "recordName": "The Queen Is Dead",
//         "releaseYear": 1986,
//         "price": 23.75,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/en/e/ed/The-Queen-is-Dead-cover.png"
//     },
//     {
//         "artist": "Bruce Springsteen",
//         "recordName": "Born to Run",
//         "releaseYear": 1975,
//         "price": 28.5,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/en/7/7a/Born_to_Run_%28Front_Cover%29.jpg"
//     },
//     {
//         "artist": "Amy Winehouse",
//         "recordName": "Back to Black",
//         "releaseYear": 2006,
//         "price": 19.99,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png"
//     },
//     {
//         "artist": "Guns N\" Roses",
//         "recordName": "Appetite for Destruction",
//         "releaseYear": 1987,
//         "price": 25.99,
//         "coverImg": "https://upload.wikimedia.org/wikipedia/he/c/c6/AppetiteforDestructionCover.jpg"
//     }
// ]

export async function GET(req) {
    if (req.method === 'GET') {
        const { searchParams } = new URL(req.url)
        const txt = searchParams.get('filterBy')
        console.log('filterBy:', txt)
        return new Response(JSON.stringify(gRecords))
    }
    if (req.method === 'DELETE') {
        const { searchParams } = new URL(req.url)
        const id = searchParams.get('id')
        console.log('id:', id)
        return new Response(id)
    }
}

// export async function POST(req) {
//     const body = await req.json()
//     console.log('body:', body)
//     return new Response('OK')
// }

// export async function PUT(req) {
//     const body = await req.json()
//     console.log('body:', body)
//     return new Response('OK')
// }

// export async function DELETE(req) {
//     const { searchParams } = new URL(req.url)
//     const txt = searchParams.get('filterBy')
//     return new Response('OK')
// }