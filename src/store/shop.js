export default {
    namespaced: true,
    state: {
        shops: [
            {
                id: 1,
                img: 'img/users/1.png',
                name: 'Travis',
                post: 'Business Owner',
                businessName: 'Fashion Apparels Fashion Apparels',
                support: 200,
                business: {
                    shopName: 'Hanumant Fashion',
                    img: 'https://wallpapercave.com/wp/wp10271263.jpg',
                    logo: 'https://5.imimg.com/data5/SELLER/Logo/2022/9/UM/BC/OE/72344956/hfnx-120x120.png',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus.'
                }
            },
            {
                id: 2,
                img: 'img/users/2.png',
                name: 'Kanye',
                post: 'Business Owner',
                businessName: 'Fashion Apparels Fashion Apparels',
                support: 100,
                business: {
                    shopName: 'Being human',
                    logo: 'https://i.pinimg.com/736x/51/31/29/51312900af793b8e1be37529a13f43f6.jpg',
                    img: 'https://i.pinimg.com/736x/e4/86/c5/e486c500d7fd46609045aba1dea45efd.jpg',
                    description: 'Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. '
                }
            },
            {
                id: 3,
                img: 'img/users/1.png',
                name: 'Travis',
                post: 'Business Owner',
                businessName: 'Fashion Apparels Fashion Apparels',
                support: 200,
                business: {
                    shopName: 'Hanumant Fashion',
                    img: 'https://wallpapercave.com/wp/wp10271263.jpg',
                    logo: 'https://5.imimg.com/data5/SELLER/Logo/2022/9/UM/BC/OE/72344956/hfnx-120x120.png',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus.'
                }
            },
            {
                id: 4,
                img: 'img/users/2.png',
                name: 'Kanye',
                post: 'Business Owner',
                businessName: 'Fashion Apparels Fashion Apparels',
                support: 100,
                business: {
                    shopName: 'Being human',
                    logo: 'https://i.pinimg.com/736x/51/31/29/51312900af793b8e1be37529a13f43f6.jpg',
                    img: 'https://i.pinimg.com/736x/e4/86/c5/e486c500d7fd46609045aba1dea45efd.jpg',
                    description: 'Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. '
                }
            },
            {
                id: 5,
                img: 'img/users/6.png',
                name: 'Drake',
                post: 'Business Owner',
                businessName: 'Fashion Apparels Fashion Apparels',
                support: 400,
                business: {
                    shopName: 'Being human',
                    logo: 'https://i.pinimg.com/736x/51/31/29/51312900af793b8e1be37529a13f43f6.jpg',
                    img: 'https://i.pinimg.com/736x/e4/86/c5/e486c500d7fd46609045aba1dea45efd.jpg',
                    description: 'Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. '
                },
                collection:{
                        id: 1,
                        heading: 'Under 199',
                        text: 'Sleek & graceful fits for every occasion',
                        order: '0',
                        button: 'SHOP NOW',
                        img: 'img/collection2/one.png',
                        one: [
                            {
                                id: 1,
                                name: 'lorem ipsum',
                                img: 'https://img101.urbanic.com/v1/goods-pic/27e6d1538adc45cfaac2f7f79997dd65UR_w540_h720_q85.webp',
                                price: '1200',
                                moq: '12',
                                dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!',
                                images: [
                                    "https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp",
                                    "https://img.ltwebstatic.com/images3_pi/2020/03/16/1584329043f6a2b7ff18eed10fc606d386136fec59_thumbnail_750x.webp",
                                    "https://img.ltwebstatic.com/images3_pi/2022/09/05/166236058465db391027c27d9351d3972053af2deb_thumbnail_750x.webp",
                                    "https://img.ltwebstatic.com/images3_pi/2021/01/18/1610969103d94c96d640a1de246d4e7cc1c104f08e_thumbnail_750x.webp",
                                    "https://img.ltwebstatic.com/images3_pi/2021/05/18/1621310932862051acf1a77dd2fa5d7b29c2064d3c_thumbnail_750x.webp",
                                ], 
                                colors: [
                                    { id: 1, name: 'black', img: "https://img.ltwebstatic.com/images3_pi/2019/12/16/1576484402687c5cc3592067511e046fb985a5414a_thumbnail_900x.webp" },
                                    { id: 2, name: 'red', img: "https://img.ltwebstatic.com/images3_pi/2020/03/16/1584329043f6a2b7ff18eed10fc606d386136fec59_thumbnail_750x.webp" },
                                    { id: 2, name: 'white', img: "https://img.ltwebstatic.com/images3_pi/2022/09/05/166236058465db391027c27d9351d3972053af2deb_thumbnail_750x.webp" },
                                    { id: 2, name: 'green', img: "https://img.ltwebstatic.com/images3_pi/2021/01/18/1610969103d94c96d640a1de246d4e7cc1c104f08e_thumbnail_750x.webp" },
                                    { id: 2, name: 'purple', img: "https://img.ltwebstatic.com/images3_pi/2021/05/18/1621310932862051acf1a77dd2fa5d7b29c2064d3c_thumbnail_750x.webp" },
                                ],
                                sizes: [
                                    {
                                        name: "S",
                                        price: '6500',
                                    },
                                    {
                                        name: "M",
                                        price: '500',
                                    },
                                    {
                                        name: "L",
                                        price: '300',
                                    },
                                    {
                                        name: "XL",
                                        price: '4000',
                                    },
                                    {
                                        name: "XXL",
                                        price: '5000',
                                    },
                                ], 
                            },
                            {
                                id: 2,
                                img: 'https://img101.urbanic.com/v1/goods-pic/69e05a4dfe784169afd0179b6172d47cUR_w540_h720_q85.webp',
                                price: '990',
                                moq: '12'
                            },
                            {
                                id: 3,
                                img: 'https://img101.urbanic.com/v1/goods-pic/f5a8f7e7cfcc42238f8c4619e829c7a9UR_w540_h720_q85.webp',
                                price: '1890',
                                moq: '12'
                            },
                            {
                                id: 4,
                                img: 'https://img101.urbanic.com/v1/goods-pic/bfd49b51ec644c28bc316949e650f8d0UR_w540_h720_q85.webp',
                                price: '1790',
                                moq: '12'
                            },
                            {
                                id: 5,
                                img: 'https://img101.urbanic.com/v1/goods-pic/63f5574a5b5f440fb29f4b441141c113UR_w540_h720_q85.webp',
                                price: '3490',
                                moq: '12'
                            },
                            {
                                id: 6,
                                img: 'https://img101.urbanic.com/v1/goods-pic/a9d445352ac84bef80e6d957684e9802UR_w540_h720_q85.webp',
                                price: '1590',
                                moq: '12'
                            }
                        ]
                },
                
            },
        ],
        savedShop: []
    },
    getters: {
        getShops(state) {
            return state.shops;
        },
        getSavedShop(state) {
            return state.savedShop;
        },
        getShopss: (state) => (voteId) => {
            let index = state.shops.findIndex(vote => vote.id == voteId);
            return state.shops[index];
        },
    },
    mutations: {
        SAVE_SHOP(state, shopData) {
            state.savedShop.push(shopData);
        }
    },
    actions: {
        saveShop({ commit }, shopData) {
            commit('SAVE_SHOP', shopData);
        }
    }
}
