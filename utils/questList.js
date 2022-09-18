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
            steps: [3, 3, 3, 3, 4],
            questions : [
                {
                    name: "How big is the map of Eykar ?",
                    choices: [
                        {
                            name: "Small"
                        },
                        {
                            name: "Medium"
                        },
                        {
                            name: "Large"
                        },
                        {
                            name: "Extra Large"
                        },
                        {
                            name: "Bigger than our universe",
                            correct: true
                        },
                        {
                            name: "Infinite"
                        }
                    ]
                },
                {
                    name: "Can we make money playing the game?",
                    choices: [
                        {
                            name: "Yes",
                            correct: true
                        },
                        {
                            name: "No"
                        }
                    ]
                },
                {
                    name: "How to earn real money playing the game?",
                    choices: [
                        {
                            name: "By building diamond mines"
                        },
                        {
                            name: "By earning Eykar tokens"
                        },
                        {
                            name: "By having the most prestigious Guild.",
                            correct: true
                        },
                        {
                            name: "By attacking other players to steal the money they have invested"
                        }
                    ]
                },
                {
                    name: "How can you participate in the creation of the game?",
                    multiple: true,
                    choices: [
                        {
                            name: "By participating in the development, all the code is open source on Github",
                            correct: true
                        },
                        {
                            name: "By making suggestions (on the Discord server for example)",
                            correct: true
                        },
                        {
                            name: "By inviting lots of bots to the Discord server 😡😠😠"
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
                },
            ]
        }
    ]
}]