'use strict';

angular.module('map')
    .service('resources', function () {
        this.cities=[
            // north city
            {name: 'Auckland', coordinate: { lat: -36.865043, lng: 174.753856 }, img: './resources/img/wellington.png', description:"<p><img class='photo' src='./resources/img/introduction/auckland.jpg'/><br/><br/>Auckland is as big, cosmopolitan, and hedonistic as any New Zealand city gets. History and future combine in this sprawling place, where you can walk above the harbor along the <b>Auckland Harbour Bridge</b> and the <b>Sky Tower</b> looms above a sea of skyscrapers. But while the sights are intriguing, it's the easy-going spirit of the Aucklanders and their impressive backyard that will really captivate you. Lush vineyards, sugar-white beaches, and island retreats are all just a hop away from the inner city bustle.</p><p><b>Things to Do</b>&nbsp;</p><p>The grand, neoclassical <b>Auckland Museum</b> is a cavernous chest of Maori <i>taonga</i> (treasures); time your visit to catch tattooed Maori sticking their tongues out in the high-energy <b><i>haka</i></b> (war dance). Few big international cities are as outdoorsy as Auckland -- locals flash past on rollerblades in <b>Cornwall Park</b> or at <b>Mission Bay,</b> kayak and sail on <b>Waitemata Harbour,</b> and kick back on <b>Waiheke Island</b> -- join in the fun. Ride the glass elevator to the top of the space-age <b>Sky Tower</b> for giddying sunset views of the Auckland skyline.</p><p><b>Shopping</b></p><p>Auckland mixes shopping with sightseeing. You can tour <b>Waiheke Island's</b> gently sloping vineyards for spicy Syrahs and crisp Chardonnays or browse stores in seaside <b>Devonport's</b> historic streets. <b>High Street</b> is decidedly upmarket and harbors big-name designers; and you can browse other fashion-conscious boutiques of <b>Parnell</b> and <b>Ponsonby.</b> Hit colonial-era <b>Queen Street</b> for department stores and <b>Newmarket's</b> classy <b>Nuffield and Teed Streets</b> for chic boutique shopping. Weekend is market time: Head for Pacific-flavored <b>Otara Market,</b> Parnell's <b>La Cigale French Market,</b> or Britomart's <b>City Farmers' Market.</b></p><p><b>Nightlife &amp; Entertainment</b></p><p>Bar-lined <b>Viaduct Harbour</b> is the place to watch Auckland strut its early-evening stuff. Sip frozen vodka with a too-cool crowd in the ice-carved <b>Minus 5 Bar.</b> Linger over champagne in one of the classy <b>Britomart bars,</b> or dance to the latest beats on <b>Ponsonby Road.Karangahape Road's</b> edgier nightlife kicks off around midnight in pumping bars, strip clubs, and live-music venues. For a more cultured evening, catch the revered <b>New Zealand Symphony Orchestra</b> at the <b>Auckland Town Hall.</b></p><p><b>Hotels &amp; Restaurants</b>&nbsp;</p><p>Foodies can eat their way around the world in Auckland. Savor Pacific Rim cuisine with the in-crowd at one of <b>Viaduct Harbour's</b> see-and-be-seen restaurants. Dine alfresco on Spanish tapas or fresh fish at one of <b>Mission Bay's</b> beachfront cafes and bars. Or head to fashionable <b>Ponsonby Road</b> for relaxed fine dining.</p>"},
            {name: 'Hamilton', coordinate: { lat: -37.788055, lng: 175.272416 }, img: './resources/img/blank.png', description:"<p class='intro'><img class='photo' src='./resources/img/introduction/hamilton.jpg'/><br/><br/>Hamilton – Waikato is a fertile region of gentle plains, pastoral scenes and rolling hills that conceal vast underground networks of spectacular limestone caves.</p><p>Flanking the mighty Waikato River, which flows through the heart of the North Island, this prosperous farming region has had an international reputation as a tourism destination for at least 125 years. First it was the underground lights of glow-worm caverns in the famed Waitomo Caves; now it’s the home of hobbits, as featured in <em>The Lord of the Rings</em> and <em>The Hobbit </em>film trilogies.&nbsp;</p><p>Long before Europeans were on the trail through the Waikato, Māori lived in this historically and culturally significant land. Many Waikato Māori trace their ancestry back 800 years to the arrival of the Tainui waka (canoe), and before the arrival of Europeans the area was well populated with Māori pa (fortified villages) and an important centre of Māori commerce.&nbsp;</p><h3>Heritage</h3><p>As British settlers flooded into New Zealand during the mid-1800s, Māori tribes united to choose a Māori king and form the Kingitanga (King Movement). The first king was Waikato chief Pōtatau Te Wherowhero, whose descendants continue to assume the role of king or queen and live at Turangawaewae, near the small town of Ngaruawahia.</p><p>On the northern bank of the Waikato River, Ngaruawahia is one of the Waikato's oldest settlements, and Turangawaewae marae is New Zealand's only royal residence. Watching over Ngaruawahia, Mount Taupiri's sacred slopes contain the Waikato’s most significant burial ground, where past Māori kings and the Māori Queen are buried.</p>"},
            {name: 'Tauranga', coordinate: { lat: -37.681903, lng: 176.166346 }, img: './resources/img/wellington.png'},
            {name: 'Rotorua', coordinate: { lat: -38.136563, lng: 176.244502 }, img: './resources/img/wellington.png'},
            {name: 'Taupo', coordinate: { lat: -38.684982, lng: 176.068013 }, img: './resources/img/wellington.png'},
            {name: 'Napier', coordinate: { lat: -39.492552, lng: 176.909920 }, img: './resources/img/wellington.png'},
            {name: 'PalmerstonNorth', coordinate: { lat: -40.352182, lng: 175.609085 }, img: './resources/img/wellington.png'},
            {name: 'Wellington', coordinate: { lat: -41.286460, lng: 174.776236 }, img: './resources/img/wellington.png'},
            // south city
            {name: 'Blenheim', coordinate: { lat: -41.513442, lng: 173.961250 }, img: './resources/img/auckland.jpg'},
            {name: 'AbelTasman', coordinate: { lat: -40.822381, lng: 173.001392 }, img: './resources/img/wellington.png'},
            {name: 'Christchurch', coordinate: { lat: -43.532054, lng: 172.636225 }, img: './resources/img/wellington.png'},
            {name: 'Dunedin', coordinate: { lat: -45.878760, lng: 170.502798 }, img: './resources/img/wellington.png'},
            {name: 'Queenstown', coordinate: { lat: -45.031162, lng: 168.662644 }, img: './resources/img/queenstown.jpg'},
        ];
    });