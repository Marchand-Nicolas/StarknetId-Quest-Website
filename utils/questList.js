import styles from '../styles/Quests.module.css'

export default [{
    name: "First NFT",
    id: 1,
    description: "Mint your mainnet challenge NFT",
    long_description: "Let's Mint your mainnet challenge NFT ! You will keep it throughout your journey. As you complete quests (like this one), your NFT will gain levels and evolve! Good luck ;-)",
    icon: <svg className={styles.quest_point_icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>,
    actionName: "Minting your first NFT",
    actionDescription: "Please wait...",
    actionType: "invoke",
    transactionType: 1,
    custom_button: "Mint",
    connected: [
        {
            name: "Quizz",
            id: 2,
            steps: [1, 2],
            description: "Understand starknet.id and our mission",
            icon: <svg className={styles.quest_point_icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>,
            steps: [3, 3, 3, 3, 3, 3, 4],
            questions : [
                {
                    name: "What is starknet.id ?",
                    choices: [
                        {
                            name: "A simple naming service"
                        },
                        {
                            name: "An all in one Identity Service",
                            correct: true
                        },
                        {
                            name: "A deFi protocol"
                        }
                    ]
                },
                {
                    name: "Why is it useful for users to verify their social media accounts on their starknet identity ?",
                    multiple: true,
                    choices: [
                        {
                            name: "To permit every starknet protocol to give them reward based on their on and off chain activity",
                            correct: true
                        },
                        {
                            name: "To collect their data"
                        },
                        {
                            name: "To link their social media accounts with their public address",
                            correct: true
                        }
                    ]
                },
                {
                    name: "Can we create a .stark subdomain with starknet.id (example: vitalik.ethereum.stark) ?",
                    choices: [
                        {
                            name: "Yes we can create a maximum of 10 subdomains per domain"
                        },
                        {
                            name: "No we can’t"
                        },
                        {
                            name: "Yes we can create unlimited subdomains",
                            correct: true
                        }
                    ]
                },
                {
                    name: "What is the utility of setting a domain as your main domain ?",
                    choices: [
                        {
                            name: "Your address will be linked with your main domain and therefore protocols will be able to see that you own a particular domain",
                            correct: true
                        },
                        {
                            name: "It’s useless"
                        },
                        {
                            name: "It permits to link several domains to one starknet.id"
                        },
                    ]
                },
                {
                    name: "Will the testnet .stark name be useful on mainnet ?",
                    choices: [
                        {
                            name: "Yes"
                        },
                        {
                            name: "No",
                            correct: true
                        },
                    ]
                },
                {
                    name: "Is it possible to have several .stark domains linked to one identity ?",
                    choices: [
                        {
                            name: "Yes"
                        },
                        {
                            name: "No",
                            correct: true
                        },
                    ]
                },
            ],
            connected: [
                {
                    name: "Identities",
                    id: 4,
                    description: "Create an identity on Starknet.id.",
                    icon: <svg className={styles.quest_point_icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>,
                    steps: [5],
                    connected: [
                        {
                            name: "Twitter",
                                id: 8,
                                description: "Verify your Twitter account on Starknet.id, and unlock exclusive quests.",
                                icon: <svg className={styles.quest_point_icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>,
                                steps: [6, 4],
                                customContent: [
                                    <p>
                                        Verify your twitter
                                    </p>,
                                ],
                                details: {
                                    0: {
                                        buttons: [
                                            <a href="https://starknet.id" target="_blank" rel="noreferrer"><button className="button gold">Open Starknet.id</button></a>
                                        ]
                                    }
                                },
                                connected: [
                                    {
                                        name: "Get a domain",
                                        id: 12,
                                        description: <>Buy a .stark domain on <a className='link' href='https://starknet.id/' target="_blank" rel="noreferrer">Starknet.id</a></>,
                                        icon: <svg className={styles.quest_point_icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                        </svg>
                                        ,
                                        steps: [6, 4],
                                        customContent: [
                                            <p>
                                                Buy a .stark domain on <a className='link' href="https://starknet.id/" target="_blank" rel="noreferrer">Starknet.id</a>, then click Okay
                                            </p>,
                                        ],
                                            connected: [
                                            {
                                                name: "Main domain",
                                                    id: 14,
                                                    description: "Set your domain as main domain",
                                                    icon: <svg className={styles.quest_point_icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                    </svg>,
                                                    steps: [6, 4],
                                                    details: {
                                                        0: {
                                                            buttons: [
                                                                <a href="https://starknet.id" target="_blank" rel="noreferrer"><button className="button gold">Open Starknet.id</button></a>
                                                            ]
                                                        }
                                                    },
                                                    customContent: [
                                                        <p>
                                                            Set your .stark domain as main domain on <a className='link' href="https://starknet.id/" target="_blank" rel="noreferrer">Starknet.id</a>, then click Okay
                                                        </p>,
                                                    ],
                                                    connected: [
                                                        {
                                                            name: "Tweet",
                                                            id: 9,
                                                            description: "Make a tweet mentioning Starknet.id to support us ❤️",
                                                            icon: <svg className={styles.quest_point_icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                                                            </svg>,
                                                            steps: [6, 4],
                                                            customContent: [
                                                                <p>
                                                                    Post <a className='link' href="https://twitter.com/intent/tweet?text=I%20claimed%20my%20%22.stark%22%20domain%20name%20on%20%40Starknet_id%0A%0AClaim%20yours%20before%20the%2010th%20of%20October%20for%20a%20big%20surprise%20%F0%9F%91%80%20...%20%0A%0A%23StarkNet%20%0A" target="_blank" rel="noreferrer">this tweet</a> including a screenshot of your own identity, then click Okay
                                                                </p>,
                                                            ],
                                                        }
                                                    ]
                                            }
                                        ]
                                    }
                                ]
                        },
                    ]
                }
            ]
        }
    ]
}]