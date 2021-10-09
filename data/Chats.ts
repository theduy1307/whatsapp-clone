export default {
    id: '1',
    users: [{
        id: 'u1',
        name: 'Vadim',
        imageUri: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-1/p200x200/90052696_105550967757881_1308547733316960256_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_ohc=rB7H2kc7XSQAX-lA2tV&tn=slptFjjBTvk-RU3_&_nc_ht=scontent.fhan14-2.fna&tp=6&oh=0fa16ca52d30a65e588fdbc599e4b31b&oe=60CBD5E0',
    }, {
        id: 'u2',
        name: 'Lukas',
        imageUri: 'https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-1/p200x200/90052696_105550967757881_1308547733316960256_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_ohc=rB7H2kc7XSQAX-lA2tV&tn=slptFjjBTvk-RU3_&_nc_ht=scontent.fhan14-2.fna&tp=6&oh=0fa16ca52d30a65e588fdbc599e4b31b&oe=60CBD5E0',
    }],
    messages: [{
        id: 'm1',
        content: 'How are you, Lukas!',
        createdAt: '2021-06-13T05:00:00.000Z',
        user: {
            id: 'u1',
            name: 'Vadim',
        },
    }, {
        id: 'm2',
        content: 'I am good, good',
        createdAt: '2020-10-03T14:49:00.000Z',
        user: {
            id: 'u2',
            name: 'Lukas',
        },
    }, {
        id: 'm3',
        content: 'What about you?',
        createdAt: '2020-10-03T14:49:40.000Z',
        user: {
            id: 'u2',
            name: 'Lukas',
        },
    }, {
        id: 'm4',
        content: 'Good as well, preparing for the stream now.',
        createdAt: '2020-10-03T14:50:00.000Z',
        user: {
            id: 'u1',
            name: 'Vadim',
        },
    }, {
        id: 'm5',
        content: 'How is your uni going?',
        createdAt: '2020-10-03T14:51:00.000Z',
        user: {
            id: 'u1',
            name: 'Vadim',
        },
    }, {
        id: 'm6',
        content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
        createdAt: '2020-10-03T14:49:00.000Z',
        user: {
            id: 'u2',
            name: 'Lukas',
        },
    }, {
        id: 'm7',
        content: 'Big Data is really interesting. Cannot wait to go through all the material.',
        createdAt: '2020-10-03T14:53:00.000Z',
        user: {
            id: 'u1',
            name: 'Vadim',
        },
    }]
}