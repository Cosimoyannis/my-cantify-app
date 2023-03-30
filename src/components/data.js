


const data = {
    products: [
        {
            id: "1", 
            name: "Cheeseburger",
            price: 4.99,
            image: "https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/burger.jpeg?v=1663182239754"
        },
        {
            id: "2",
            name: "Ramen",
            price: 3.99,
            image: "https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/pngaaa.com-4001920.png?v=1663183033193"
        },
        {
            id: "3",
            name: "Pizza",
            price: 1.99,
            image: 'https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/pizza.jpeg?v=1663182206853'
        },
        {
            id: "4",
            name: "Chicken Tender",
            price: 1.99,
            image: "https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/chicken.png?v=1663182266748"
        },
        {
            id: "5",
            name: "Sushi Bowl",
            price: 1.99,
            image: "https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/pngwing.com%20(5).png?v=1663183102342"
        }
    ]
};





const mensadata = { mensen :[{"id":4655104,"name":"Doppelte Salatschale","category":"Salate","prices":{"students":3.15,"employees":6.3,"pupils":null,"others":6.95},"notes":["grün (Ampel)","vegan","Süßungsmittel","Sellerie"]},{"id":4655105,"name":"Große Salatschale","category":"Salate","prices":{"students":1.75,"employees":3.5,"pupils":null,"others":3.85},"notes":["grün (Ampel)","vegan","Süßungsmittel","Sellerie"]},{"id":4655106,"name":"Kleine Salatschale","category":"Salate","prices":{"students":0.65,"employees":1.3,"pupils":null,"others":1.45},"notes":["grün (Ampel)","vegan","Süßungsmittel","Sellerie"]},{"id":4655109,"name":"Thousand Island Dressing","category":"Salate","prices":{"students":null,"employees":null,"pupils":null,"others":null},"notes":["gelb (Ampel)","vegetarisch","Antioxidationsmittel","Süßungsmittel","Weizen","Eier","Milch und Milchprodukte (inkl. Laktose)","Senf"]},{"id":4655110,"name":"Joghurtdressing","category":"Salate","prices":{"students":null,"employees":null,"pupils":null,"others":null},"notes":["rot (Ampel)","vegetarisch","Antioxidationsmittel","Weizen","Eier","Milch und Milchprodukte (inkl. Laktose)","Schwefeldioxid und Sulfide","Senf"]},{"id":4655108,"name":"American Dressing","category":"Salate","prices":{"students":null,"employees":null,"pupils":null,"others":null},"notes":["gelb (Ampel)","vegetarisch","Antioxidationsmittel","Süßungsmittel","Weizen","Eier","Milch und Milchprodukte (inkl. Laktose)","Senf"]},{"id":4655107,"name":"Sauce Vinaigrette","category":"Salate","prices":{"students":null,"employees":null,"pupils":null,"others":null},"notes":["rot (Ampel)","vegan","Senf"]},{"id":4708479,"name":"Brokkolicremesuppe","category":"Suppen","prices":{"students":0.6,"employees":1.2,"pupils":null,"others":1.3},"notes":["grün (Ampel)","vegetarisch","Antioxidationsmittel","Milch und Milchprodukte (inkl. Laktose)"]},{"id":4655112,"name":"Hamburger im Sesambrötchen mit Pommes frites und Salat","category":"Aktionen","prices":{"students":4.95,"employees":5.45,"pupils":null,"others":5.95},"notes":["gelb (Ampel)","konserviert","Antioxidationsmittel","Süßungsmittel","mit zum Teil fein zerkleinertem Fleischanteil","Weizen","Eier","Soja","Sesam","Hefe","Senf","Farbstoff"]},{"id":4655114,"name":"Schwäbische Käsespätzle mit Zwiebel-Rahm-Schmelze","category":"Essen","prices":{"students":2.95,"employees":5.9,"pupils":null,"others":6.5},"notes":["gelb (Ampel)","vegetarisch","bio","Weizen","Eier","Milch und Milchprodukte (inkl. Laktose)"]},{"id":4655115,"name":"Chili con Soja mit frischem Gemüse","category":"Essen","prices":{"students":1.9,"employees":3.8,"pupils":null,"others":4.2},"notes":["grün (Ampel)","vegan","Klimaessen","Sellerie","Soja","Antioxidationsmittel"]},{"id":4655117,"name":"Zwei Schwarzwurzelmedaillons an Tomaten-Ingwer-Sauce","category":"Essen","prices":{"students":1.55,"employees":3.1,"pupils":null,"others":3.4},"notes":["gelb (Ampel)","vegetarisch","Weizen","Sellerie","Milch und Milchprodukte (inkl. Laktose)","Sesam","Hefe","Antioxidationsmittel"]},{"id":4655116,"name":"Eine gebackene Hähnchenbrust im Knuspermantel an Estragon-Senf-Sauce","category":"Essen","prices":{"students":1.55,"employees":3.1,"pupils":null,"others":3.4},"notes":["gelb (Ampel)","Weizen","Milch und Milchprodukte (inkl. Laktose)","Hefe","Senf"]},{"id":4708480,"name":"Brandenburger Erbseneintopf mit Wurzelgemüse und einem Wiener Würstchen","category":"Essen","prices":{"students":1.45,"employees":2.9,"pupils":null,"others":3.2},"notes":["gelb (Ampel)","Schweinefleisch bzw. mit Gelatine vom Schwein","konserviert","Antioxidationsmittel","Sellerie","Nitritpökelsalz","Senf"]},{"id":4655120,"name":"Glacierte Fingermöhrchen","category":"Beilagen","prices":{"students":0.6,"employees":1.2,"pupils":null,"others":1.3},"notes":["grün (Ampel)","vegan"]},{"id":4655119,"name":"Würziges Gemüseragout","category":"Beilagen","prices":{"students":0.6,"employees":1.2,"pupils":null,"others":1.3},"notes":["grün (Ampel)","vegan","Antioxidationsmittel"]},{"id":4708481,"name":"Dampfkartoffeln","category":"Beilagen","prices":{"students":0.6,"employees":1.2,"pupils":null,"others":1.3},"notes":["grün (Ampel)","vegan"]},{"id":4708482,"name":"Parboiledreis","category":"Beilagen","prices":{"students":0.6,"employees":1.2,"pupils":null,"others":1.3},"notes":["gelb (Ampel)","vegan"]},{"id":4655123,"name":"Sauce/Dip Extra","category":"Beilagen","prices":{"students":0.3,"employees":0.6,"pupils":null,"others":0.65},"notes":["gelb (Ampel)"]},{"id":4655124,"name":"Pflaumenjoghurt mit Zimt","category":"Desserts","prices":{"students":0.65,"employees":1.3,"pupils":null,"others":1.45},"notes":["grün (Ampel)","vegetarisch","Milch und Milchprodukte (inkl. Laktose)","Antioxidationsmittel"]},{"id":4655125,"name":"Pfirsichquark","category":"Desserts","prices":{"students":0.65,"employees":1.3,"pupils":null,"others":1.45},"notes":["grün (Ampel)","vegetarisch","Milch und Milchprodukte (inkl. Laktose)"]},{"id":4655126,"name":"Vanillepudding","category":"Desserts","prices":{"students":0.65,"employees":1.3,"pupils":null,"others":1.45},"notes":["gelb (Ampel)","vegetarisch","Milch und Milchprodukte (inkl. Laktose)","Antioxidationsmittel"]},{"id":4655127,"name":"Aprikosenkompott","category":"Desserts","prices":{"students":0.6,"employees":1.2,"pupils":null,"others":1.3},"notes":["grün (Ampel)","vegan","Antioxidationsmittel"]}]}



export default mensadata;
