import images from "../assets/images/images";

const products = [
    {
        name: "olive",
        price: 11.5,
        image: images.olive,
        desc: "Olive is of major agricultural importance in the Mediterranean region as the source of olive oil; it is one of the core ingredients in Mediterranean cuisine. The tree and its fruit give their name to the plant family, which also includes species such as lilac, jasmine, forsythia, and the true ash tree."
    },
    {
        name: "jam",
        price: 28,
        image: images.jam,
        desc: "Jam refers to a product made of whole fruit cut into pieces or crushed, then heated with water and sugar until it reaches 'jelling' or 'setting' point, which is achieved through the action of natural or added pectin. It is then sealed in containers."
    },
    {
        name: "halva",
        price: 11,
        image: images.halva,
        desc: "Halva is a type of confectionery originating from Persia and widely spread throughout the Middle East. The name is used for a broad variety of recipes, generally a thick paste made from flour, semolina, or finely ground seeds or nuts (such as sesame or sunflower seeds), and sweetened with sugar or honey."
    },
    {
        name: "goat cheese",
        price: 139,
        image: images.goatcheese,
        desc: "Goat cheese or chevre is cheese made from goat's milk. Goats were among the first animals to be domesticated for producing food.[2] Goat cheese is made around the world with a variety of recipes, giving many different styles of cheese, from fresh and soft to aged and hard"
    },
    {
        name: "butter",
        price: 199.95,
        image: images.butter,
        desc: "Butter is a dairy product made from the fat and protein components of churned cream. It is a semi-solid emulsion at room temperature, consisting of approximately 80% butterfat. It is used at room temperature as a spread, melted as a condiment, and used as a fat in baking, sauce-making, pan frying, and other cooking procedures."
    },
    {
        name: "honey",
        price: 250,
        image: images.honey,
        desc: "Honey is a sweet, viscous food substance made by honey bees and some other bees. Bees produce honey from the sugary secretions of plants (floral nectar) or from secretions of other insects (such as honeydew), by regurgitation, enzymatic activity, and water evaporation. Honey bees store honey in wax structures called honeycombs, whereas stingless bees store honey in pots made of wax and resin. The variety of honey produced by honey bees (the genus Apis) is the best-known, due to its worldwide commercial production and human consumption. Honey is collected from wild bee colonies, or from hives of domesticated bees, a practice known as beekeeping or apiculture (meliponiculture in the case of stingless bees)."
    },
    {
        name: "sooty circassian cheese",
        price: 101.25,
        image: images.sooty,
        desc: "It is the sooted form of genuine Circassian cheese after it is produced. It is a low-fat, low-salt, fragrant and smoked cheese."
    },
    {
        name: "ezine feta cheese",
        price: 150,
        image: images.ezine,
        desc: "The most important feature of 'Ezine cheese', which is among the most delicious white cheeses in Turkey and whose name is identified with Çanakkale, is that the milk used in production is supplied from a certain region. In the production of Ezine cheese, milk obtained from sheep, goats and cows fed by the natural vegetation and water resources of Ezine, Bayramiç and Ayvacık districts in the northern and western parts of Kaz Mountains is used."
    },
    {
        name: "erzincan skin tulum",
        price: 159.90,
        image: images.erzincanskin,
        desc: "Erzincan Tulum Cheese; It is among the local cheese varieties that are frequently consumed in our country with its glossy appearance, full fat and solid consistency."
    },
    {
        name: "van herby cheese",
        price: 140,
        image: images.van,
        desc: "It is a type of cheese unique to the Van region. It is usually made from raw sheep or sheep-cow milk mixture. Its local names are sirmo, mendi, mountain mint, thyme, etc. Various herbs are included. After the brine or dry salting process, it is buried in the soil and matured for 2-3 months."
    },
    {
        name: "erzincan tulum cheese",
        price: 120,
        image: images.erzincantulum,
        desc: "Tulum cheese, produced in the highlands of Erzincan, is among the popular cheese types. The cheese, which is pressed into hair goat overalls, is kept in caves with a humidity of 75-80% for two or three months. This delicious cheese produced is an important food in terms of cheese calcium and phosphorus content. 100 g of tulum cheese meets 30-40% of daily salt need and 12-20% of daily phosphorus need. Cheese contains varying amounts of fat-soluble vitamins (A, D, E, K) depending on the fat ratio. Cheese is important in terms of vitamins, B group vitamins in its composition."
    },
    {
        name: "cloth tulum cheese",
        price: 135.75,
        image: images.cloth,
        desc:"Salt-free, cloth tulum cheese produced in Ereğli district and Ayrancı district of Karaman and its surroundings, is a type of cheese that is consumed fresh and has a wide market share in Central Anatolia and the Mediterranean. Cloth Tulum cheese is produced in modern facilities using pasteurized cow's milk."

    },
    {
        name: "lux feta cheese",
        price: 153.50,
        image: images.lux,
        desc: "Classical feta cheese but luxer"
    },
    {
        name: "feta cheese",
        price: 100,
        image: images.feta,
        desc: "It is offered for sale after being kept in the icehouse for at least 4 months. It is a type of cheese with a high fat content. A good feta cheese is porcelain white. Feta cheese should be smooth and spotless when cut. It should be noted that there are not many large and small holes in the cheese. It should be noted that the cheese is in a non-rusty tin and in clean brine. In addition, the cheese should not be too soft, too hard, dry or crumbly."
    },
    {
        name: "braided cheese",
        price: 140,
        image: images.braided,
        desc:"Knitted cheese is a traditional type of cheese produced locally and brined. The production of knitted cheese, which resembles Circassian cheese in terms of taste, is labor-intensive. Unsalted cheese is boiled in salted water during production and the flavor of the cheese comes from here. Knitted cheese is similar to cheddar cheese in terms of production technique and white cheese in terms of composition."
    },
    {
        name: "circassian cheese",
        price: 95,
        image: images.circassian,
        desc: "Circassian cheese is one of the most popular cheese types in the Sakarya region of our country."
    },
    {
        name: "kashar cheese",
        price: 135,
        image: images.kashar,
        desc: "Kashar cheese is a typical example of cheese made by boiling and kneading, without holes and ripened with bacteria. It is similar to Mozzerella and Kashkaval cheeses in terms of construction and composition."
    },
    {
        name: "manyas cheese",
        price: 188,
        image: images.manyas,
        desc:"The famous Manyas cheese made in Balıkesir is produced by mixing cow and sheep milk without adding any additives. Being among the indispensables of Turkish and world cuisines, Manyas cheese, which is at least 200 years old, is preferred by the people of the region as well as the leading names of the business, politics, art and sports world of the country due to its protein richness. The process of getting 100 naturally produced Manyas cheese to the counters covers a period of 6 months. Since Manyas cheese can be eaten like bread, it has the feature of keeping it full for a long time and has protein richness."

    },
    {
        name: "bursa string cheese",
        price: 137.50,
        image: images.bursa,
        desc: "The tongue cheese, which is named so because its slices resemble a tongue, is a favorite of those who do not like strong and sharp-tasting cheeses. Unsalted, consumed fresh, easily separated into fibers, string cheese is one of the cheeses in which the taste of milk is intensely felt. Dil cheese can be consumed plain, it can also be eaten with tomatoes and cucumbers, and can be used in pizzas. If you sprinkle the string cheese fibers on the pizzas you prepare at home, the flavor will change in an instant. It is a type of cheese that children love very much."
    },
    {
        name: "izmir tulum cheese",
        price: 168,
        image: images.izmir,
        desc: "Kashar is a type of cheese that the Turks tasted and learned after they came to Anatolia. Cheddar cheese is made from sheep, goat and cow milk. The reason why it is called old cheese is that it is kept in a sack in the icehouse for six months and aged. In this way, the cheddar can be stored for three years if it is made from pure sheep's milk."
    },
    {
        name: "manyas mihaliç cheese",
        price: 179,
        image: images.manyasmic,
        desc: "There are many good cheese varieties in various corners of the Marmara Region. Mihalıç cheese produced between Balıkesir and Bursa has a different place. The famous toasts of Susurluk are prepared with this delicious cheese. A hard, oily, salty and very durable cheese, Mihalıç's rich porosity is acceptable."
    },
    {
        name: "aged kashar cheese",
        price: 169.90,
        image: images.aged,
        desc: "Kashar is a type of cheese that the Turks tasted and learned after they came to Anatolia. Cheddar cheese is made from sheep, goat and cow milk. The reason why it is called old cheese is that it is kept in a sack in the icehouse for six months and aged. In this way, the cheddar can be stored for three years if it is made from pure sheep's milk."
    }
]

export default products;