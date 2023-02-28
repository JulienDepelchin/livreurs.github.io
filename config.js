var config = {
    style: 'mapbox://styles/juliendepelchin/cleiblbnq000i01pi69j57gg6',
    accessToken: 'pk.eyJ1IjoianVsaWVuZGVwZWxjaGluIiwiYSI6ImNsZWliMW1wdDFqMWkzcG95N281am9tMmoifQ.GYxIz-MyO9iuT9YhB4YoMg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'À Lille, la majorité des livreurs issus des quartiers populaires',
    subtitle: 'UberEats, Deliveroo... où résident ceux qui vous livrent vos repas',
    byline: 'Julien Depelchin',
    footer: "Source: L'ubérisation des quartiers populaires, par Hugo Botton, Compas ZOOm n°27, 24 novembre 2022 <br>",
    chapters: [

        {
            id: 'intro',
            alignment: 'left',
            hidden: true,
            location: {
                center: [3.08695, 50.66295],
                zoom: 7.61,
                pitch: 50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'livreurs',
                     opacity: 0,
                     duration: 2000
                 }
            ],
            
        },        
        {
            id: 'mel',
            alignment: 'left',
            hidden: false,
            image:'http://dam.redactionconnect.net/search/proxy.php/search/resource/d-20191211-3XQKUM_high.jpg?CCICallBack=d-20191211-3XQKUM',
            description: 'Chaque jour, ils sont des centaines à sillonner la métropole lilloise pour livrer des repas. Où habitent les travailleurs des platefromes UberEats ou Deliveroo ? Dans quels quartiers ? Grâce à des données inédites, nous avons cartographié leurs lieux de résidence.',
            location: {
                center: [3.08695, 50.66295],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'mel',
                     opacity: 1,
                     duration: 2000
                 },
                {
                    layer: 'livreurs',
                    opacity: 0
                },
                {
                    layer: 'Lille',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                     layer: 'mel',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'livreurs',
            alignment: 'right',
            hidden: false,
            description: 'Certaines zones urbaines concentrent un grand nombre de livreurs. Plus le bleu est foncé, plus il y a de livreurs domiciliés dans ces quartiers. Allons voir cela plus en détail...',
            location: {
                center: [3.08695, 50.66295],
                zoom: 9,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [              
                {   
                     layer: 'livreurs',
                     opacity: 1,
                     duration: 2000
                 },
                {
                    layer: 'Lille',
                    opacity: 0
                },
            ],
            onChapterExit: [
                 {
                     layer: 'livreurs',
                     opacity: 1
                 }
            ],

        },
        {
            id: 'Lille',
            alignment: 'left',
            hidden: false,
            description: 'Fives, Lille-Sud, Wazemmes, Moulins, Bois-Blancs... À Lille, les travailleurs de plateformes sont surreprésentées dans les quartiers populaires.',
            location: {
                center: [3.05635, 50.63335],
                zoom: 10.52,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [              
                {   
                     layer: 'Lille',
                     opacity: 1,
                     duration: 2000
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'Lille',
                     opacity: 1
                 }
            ],
        },
        {
            id: 'qprioritaires_Lille',
            alignment: 'right',
            hidden: false,
            description: 'Pour preuve, voici matérialisés en jaune les quartiers prioritaires de la politique de la ville.',
            location: {
                center: [3.05635, 50.63335],
                zoom: 10.6,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [              
                {   
                     layer: 'qprioritaireslille',
                     opacity: 1,
                     duration: 1000
                 },
                 {
                    layer: 'qprioritairesmarcq',
                    opacity: 0
                },
                {   
                   layer: 'marcq',
                   opacity: 0,
                   duration: 2000
               }
            ],
            onChapterExit: [
                 {
                     layer: 'qprioritaireslille',
                     opacity: 0
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'Lille',
                     opacity: 0
                 },
                 {
                    layer: 'qprioritaireslille',
                    opacity: 0
                },
            ],
        },
        {
            id: 'Marcq',
            alignment: 'left',
            hidden: false,
            description: 'Cela ne se limite pas à la capitale des Flandres. À Marcq-en-Barœul, les livreurs sont concentrés dans le seul quartier prioritaire de la ville, la Briqueterie.',
            location: {
                center: [3.08452, 50.66669],
                zoom: 12,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [              
                {   
                     layer: 'marcq',
                     opacity: 1,
                     duration: 2000
                 },
                 {   
                    layer: 'qprioritairesmarcq',
                    opacity: 1,
                    duration: 2000
                }
            ],
            onChapterExit: [
                 {
                     layer: 'qprioritairesmarcq',
                     opacity: 0,
                     duration: 1000
                 },
                 {   
                    layer: 'marcq',
                    opacity: 0,
                    duration: 1000
                },
            ]
        },
        {
            id: 'Roubaix_Tourcoing',
            alignment: 'right',
            hidden: false,
            description: 'À Roubaix et Tourcoing, le constat est identique. Les livreurs vivent surtout dans des quartiers populaires : Alma, Pile, Hommelet, La Bourgogne, Pont Rompu etc.',
            location: {
                center: [3.16864, 50.70351],
                zoom: 11,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [              
                {   
                     layer: 'roubaix',
                     opacity: 1,
                     duration: 2000
                 },
                 {   
                    layer: 'tourcoing',
                    opacity: 1,
                    duration: 2000
                },
                {   
                    layer: 'qprioritairesrbxtcg',
                    opacity: 1,
                    duration: 2000
                },
            ],
            onChapterExit: [
                {   
                    layer: 'roubaix',
                    opacity: 0,
                    duration: 1000
                },
                {   
                   layer: 'tourcoing',
                   opacity: 0,
                   duration: 1000
               },
               {   
                   layer: 'qprioritairesrbxtcg',
                   opacity: 0,
                   duration: 1000
               },
            ]
        },
        {
            id: 'Fin',
            alignment: 'right',
            hidden: false,
            description: "En janvier 2022, 6 732 livreurs étaient domiciliés dans la métropole lilloise, dont 43,9 % résidaient dans un quartier prioritaire de la politique de la ville.",
            location: {
                center: [3.08695, 50.66295],
                zoom: 9,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [              
                {   
                     layer: 'qprioritairesmel',
                     opacity: 1,
                     duration: 3000
                },
            ],
            onChapterExit: [
                {   
                    layer: 'qprioritairesmel',
                    opacity: 0,
                    duration: 3000
               },
            ]
        }
    ]
}
