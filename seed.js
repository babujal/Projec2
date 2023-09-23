const mongoose = require('mongoose')
const Seafood = require('./models/seafood')

const mongoURI = process.env.MONGO_URI
const db = mongoose.connection
mongoose.connect(mongoURI)

Seafood.create([
    {
        name: 'Yellowtail',
        description: 'Yellowtail is a prized catch among seafood enthusiasts. Its firm, succulent flesh boasts a delicate flavor with a hint of sweetness. Perfect for grilling or sashimi, this versatile fish promises a gourmet dining experience. Enjoy the rich, buttery texture that makes yellowtail a favorite in kitchens worldwide.',
        img: 'https://finnaticfishco.com/cdn/shop/products/Yellowtail_800x.jpg?v=1593084907',
        price: 2.50,
        aviability: true,
        addToMenu: true,
    },
    {
        name: 'Kingfish',
        description: "Kingfish, also known as king mackerel, is a bold and flavorful fish that's a staple in Southern cuisine. Its dense, pinkish-white meat is both robust and rich, making it ideal for hearty dishes. Whether you're baking, broiling, or grilling, kingfish's distinct taste and meaty texture shine through. Elevate your seafood game with this regal catch that's fit for royalty in the kitchen.",
        img: 'https://fishsingapore.com/wp-content/uploads/2021/10/Kingfish-Whole-Round.jpg',
        price: 5,
        aviability: true,
        addToMenu: true,
    },
    {
        name: 'Red Snapper',
        description: "Red snapper is a beloved choice among seafood connoisseurs. Its flaky, white flesh boasts a sweet and mildly nutty flavor that pairs beautifully with a variety of seasonings. Whether you're pan-searing, grilling, or baking, red snapper's firm texture holds up perfectly. Elevate your culinary creations with this versatile fish, known for its delightful taste and ability to take on diverse flavors.",
        img: 'https://www.mashed.com/img/gallery/why-you-should-think-twice-before-buying-red-snapper/intro-1632854016.jpg',
        price: 3.50,
        aviability: true,
        addToMenu: true,
    },
    {
        name: 'Swordfish',
        description: "Swordfish, a true titan of the sea, offers a steak-like experience with its dense, meaty texture and bold flavor. Known for its mild, slightly sweet taste and versatility in the kitchen, swordfish is perfect for grilling, broiling, or pan-searing. Indulge in the hearty and succulent meat of this majestic fish, making it a favorite choice for seafood enthusiasts seeking a satisfying and flavorful meal.",
        img: 'https://thumbs.dreamstime.com/b/swordfish-steaks-ice-market-29834309.jpg',
        price: 6.80,
        aviability: true,
        addToMenu: true,
    },
    {
        name: 'Lobster',
        description: "Lobster, the crown jewel of seafood, is renowned for its luxurious taste and tender, succulent meat. With a delicate, sweet flavor and a hint of brininess, lobster is a culinary masterpiece. Whether you're savoring it in a classic lobster bisque, as a centerpiece in a surf and turf dish, or simply dipped in butter, lobster promises an exquisite dining experience that's unmatched in the world of seafood. Treat yourself to the ultimate indulgence with this ocean delicacy.",
        img: 'https://www.freshpack.fr/wp-content/uploads/2018/05/Capture-d%E2%80%99e%CC%81cran-2018-05-29-a%CC%80-10.17.47.png',
        price: 8.50,
        aviability: true,
        addToMenu: true,
    }
]).then((products) => {
    console.log(products)
    db.close()
})