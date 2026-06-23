/* ── Vila Sanja – Language Translations (EN / HR / DE) ── */
const LANG_DATA = {

  en: {
    /* NAV */
    'nav.home':        'Home',
    'nav.accom':       'Accommodations',
    'nav.duplex':      'Duplex Apartment',
    'nav.apartment':   'Apartment',
    'nav.room':        'Room',
    'nav.reviews':     'Reviews',
    'nav.about':       'About Us',
    'nav.rules':       'Rules',
    'nav.contact':     'Contact Us',
    'nav.booknow':     'Book Now!',

    /* INDEX – hero */
    'idx.hero.title':  'Vila Sanja – Your oasis of calm on the Adriatic',
    'idx.hero.desc':   'Comfortable apartments and rooms in Premantura, Istria. Air conditioning, private balconies, free WiFi and parking. Just minutes from the sea and Cape Kamenjak.',
    'idx.hero.cta':    'Book your holiday',
    'idx.hero.scroll': 'Scroll down',

    /* INDEX – about snippet */
    'idx.about.title': 'Welcome to Vila Sanja',
    'idx.about.p1':    'Vila Sanja is a family villa in Premantura, just 300 m from the village center and close to the sea. We offer a duplex apartment for 6, an apartment for 4, and a cozy room for 2 – all with private balconies, air conditioning, and free WiFi.',
    'idx.about.p2':    'The villa is surrounded by greenery with a peaceful courtyard and private parking. Enjoy the Mediterranean atmosphere and the best Istria has to offer!',
    'idx.about.btn':   'Learn more about us',

    /* INDEX – feature cards */
    'idx.feat.title':      'Why choose Vila Sanja?',
    'idx.feat.sub':        'Everything you need for a perfect Istrian holiday',
    'idx.card.villa.title':'The Villa',
    'idx.card.villa.desc': 'Modern apartments surrounded by greenery, with private parking and a relaxing courtyard.',
    'idx.card.beach.title':'Beaches Nearby',
    'idx.card.beach.desc': 'Just steps from the Adriatic Sea and the entrance to Cape Kamenjak Nature Park.',
    'idx.card.rooms.title':'Rooms & Apartments',
    'idx.card.rooms.desc': 'Comfortable, air-conditioned units for families, couples, and solo travellers.',
    'idx.card.rooms.btn':  'View all',
    'idx.card.rev.title':  'Guests Love Us',
    'idx.card.rev.desc':   '100+ happy guests and an overall rating of 3.9/5. Our visitors keep coming back – read what they have to say!',
    'idx.card.rev.btn':    'Read reviews',

    /* INDEX – stats */
    'idx.stat.types':   'Accommodation types',
    'idx.stat.guests':  'Happy guests',
    'idx.stat.dist':    'From village center',
    'idx.stat.rating':  'Guest rating',

    /* INDEX – reviews section */
    'idx.rev.title':    'What Our Guests Say',
    'idx.rev.sub':      'Trusted by travellers from around the world',
    'idx.rev.btn':      'Read all reviews',

    /* INDEX – info cards */
    'idx.info.loc.title':  'Location',
    'idx.info.loc.addr':   'Selo Varoš 70 D, 52100 Premantura, Croatia',
    'idx.info.loc.link':   'View map →',
    'idx.info.rules.title':'House Rules',
    'idx.info.rules.desc': 'Simple guidelines for a pleasant stay for everyone.',
    'idx.info.rules.link': 'Read rules →',
    'idx.info.rev.title':  'Reviews',
    'idx.info.rev.desc':   'Hundreds of positive reviews from happy travellers.',
    'idx.info.rev.link':   'View reviews →',
    'idx.info.ct.title':   'Contact Us',
    'idx.info.ct.desc':    'Have a question or special request? Let us know!',
    'idx.info.ct.link':    'Get in touch →',

    /* INDEX – host */
    'idx.host.title':  'Meet your hosts',
    'idx.host.p1':     'We are here for you – welcome to our villa! We strive to keep our prices reasonable and make every guest feel at home. You have access to the courtyard, garden, and parking. Peaceful surroundings, everything you need is nearby.',
    'idx.host.langs':  'Staff speaks: German, English',

    /* ABOUT page */
    'abt.hero':        'About Vila Sanja',
    'abt.host.title':  'Hosts: Sanja Volner & Matej Abramović',
    'abt.host.p1':     'Vila Sanja is in a very good location, very close to the center and not far from the sea. The entrance to Cape Kamenjak is also nearby. We have a duplex apartment for 6 people, an apartment for 4 people, and a room with a bathroom and balcony. We are dedicated to making guests feel comfortable and are always available.',
    'abt.host.p2':     'The entire villa is surrounded by greenery, and parking spaces are available in the villa\'s courtyard. We try to keep our prices reasonable. Peaceful surroundings – you can sleep well here, and everything you need is nearby. Welcome!',
    'abt.host.langs':  'Staff speaks: German, English',
    'abt.chip.green':  'Green & Quiet',
    'abt.chip.wifi':   'Free WiFi',
    'abt.chip.park':   'Private Parking',
    'abt.chip.pet':    'Pet Friendly',
    'abt.chip.ac':     'Air Conditioning',
    'abt.chip.fam':    'Family Friendly',
    'abt.love.title':  'Why guests love Vila Sanja',
    'abt.love.1':      'Excellent location – close to the center and sea',
    'abt.love.2':      'Private balconies, air conditioning, free WiFi',
    'abt.love.3':      'Peaceful, green surroundings',
    'abt.love.4':      'Free private parking in the courtyard',
    'abt.love.5':      'Family-friendly and pet-friendly',
    'abt.love.6':      'Hosts always available to help',
    'abt.love.langs':  'Languages spoken',
    'abt.surr.title':  'Surroundings of the Property',
    'abt.tbl.nearby':  'What\'s Nearby',
    'abt.tbl.rest':    'Restaurants & Cafés',
    'abt.tbl.beach':   'Nearby Beaches',
    'abt.tbl.attr':    'Popular Attractions',
    'abt.tbl.trans':   'Public Transport',
    'abt.tbl.air':     'Nearest Airports',
    'abt.tbl.note':    'Shortest estimated distances on foot or by vehicle; actual distances may differ.',
    'abt.fac.title':   'Facilities at Vila Sanja',
    'abt.fac.rating':  'Excellent facilities. Guest rating: 3.9/5',
    'abt.fac.pop':     'Most popular:',
    'abt.fac.t1':  'Great for your stay', 'abt.fac.t2':  'Bathroom',     'abt.fac.t3':  'Bedroom',
    'abt.fac.t4':  'View',               'abt.fac.t5':  'Yard',          'abt.fac.t6':  'Kitchen',
    'abt.fac.t7':  'Internet',           'abt.fac.t8':  'Parking',       'abt.fac.t9':  'Services',
    'abt.fac.t10': 'Media & Technology', 'abt.fac.t11': 'Pets',          'abt.fac.t12': 'General',
    'abt.fac.t13': 'Safety & Security',  'abt.fac.t14': 'Languages spoken',

    /* ACCOMMODATIONS page */
    'acc.hero':       'Accommodations',
    'acc.title':      'Choose your perfect stay',
    'acc.sub':        'All accommodations come with air conditioning, flat-screen TV, WiFi, private bathroom and balcony. Apartments include a full kitchen.',
    'acc.duplex.cap': '4 + 2 people | Two floors',
    'acc.duplex.desc':'Spacious duplex apartment spread over two floors, perfect for larger families or groups. Full kitchen, two balconies, and generous living space.',
    'acc.apt.cap':    '2 + 2 people | Ground floor',
    'acc.apt.desc':   'Comfortable apartment with a full kitchen, private bathroom and a sunny balcony – ideal for couples or small families.',
    'acc.room.cap':   '2 people | 15 m²',
    'acc.room.desc':  'Cozy, freshly renovated room with a private bathroom and a balcony. Includes a mini-fridge, kettle and all essential amenities.',
    'acc.btn':        'View details',
    'acc.incl.title': 'Included in all units',
    'acc.incl.sub':   'Everything you need for a comfortable stay',

    /* DUPLEX page */
    'dpl.hero':   'Duplex Apartment',
    'dpl.h2':     'Spacious Two-Floor Apartment',
    'dpl.desc':   'Our largest accommodation, the Duplex Apartment spans two floors and is perfect for families or groups of up to 6. Enjoy a full kitchen, generous living space, and two private balconies with views of the Istrian countryside.',
    'dpl.gal':    'Gallery',
    'dpl.btn':    'Book this apartment',
    'dpl.l1': 'Up to 4 + 2 people',       'dpl.l2': 'Two floors, spacious layout',
    'dpl.l3': 'Full kitchen with dining area','dpl.l4': 'Two private balconies',
    'dpl.l5': 'Air conditioning & heating', 'dpl.l6': 'Private bathroom with hairdryer',
    'dpl.l7': 'Flat-screen TV, WiFi',       'dpl.l8': 'Wardrobe, linen provided',
    'dpl.l9': 'Free private parking',       'dpl.l10': 'Pets allowed',

    /* ONE-BEDROOM page */
    'apt.hero':   'One-Bedroom Apartment',
    'apt.h2':     'Comfortable & Well-Equipped',
    'apt.desc':   'This bright apartment is ideal for couples or a small family of up to four. It features a full kitchen, a private balcony, and all the comforts you need for a relaxing holiday in Premantura, Istria.',
    'apt.gal':    'Gallery',
    'apt.btn':    'Book this apartment',
    'apt.l1': 'Up to 2 + 2 people',         'apt.l2': 'Full kitchen with dining area',
    'apt.l3': 'Private balcony',             'apt.l4': 'Air conditioning & heating',
    'apt.l5': 'Private bathroom with hairdryer','apt.l6': 'Flat-screen TV, free WiFi',
    'apt.l7': 'Fridge, kettle, kitchenware', 'apt.l8': 'Wardrobe, linen provided',
    'apt.l9': 'Free private parking',        'apt.l10': 'Pets allowed',

    /* ROOM page */
    'rm.hero':   'Double Room with Balcony',
    'rm.h2':     'Cosy Room in the Heart of Premantura',
    'rm.desc':   'Enjoy your stay in our freshly renovated room. Experience local life, unwind on your private balcony, and enjoy modern amenities in a peaceful setting close to beaches, shops, and cafés.',
    'rm.gal':    'Gallery',
    'rm.btn':    'Book this room',
    'rm.l1': '15 m², 2-person room',         'rm.l2': 'Private balcony',
    'rm.l3': 'Private bathroom with shower', 'rm.l4': 'Hairdryer & towels provided',
    'rm.l5': 'Air conditioning & heating',   'rm.l6': 'Flat-screen TV, free WiFi',
    'rm.l7': 'Fridge & electric kettle',     'rm.l8': 'Wardrobe, linen provided',
    'rm.l9': 'Private entrance',             'rm.l10': 'Free parking',

    /* REVIEWS page */
    'rev.hero':       'Guest Reviews',
    'rev.stat1':      'Happy guests',
    'rev.stat2':      'Overall rating',
    'rev.stat3':      'Location score',
    'rev.stat4':      'Cleanliness',
    'rev.title':      'What our guests say',
    'rev.sub':        'Real reviews from real travellers – we love hearing from you!',
    'rev.cta.title':  'Ready to make your own memories?',
    'rev.cta.sub':    'Join hundreds of happy guests who chose Vila Sanja for their Istrian holiday.',
    'rev.cta.btn':    'Book your stay',

    /* CONTACT page */
    'ct.hero':        'Contact Us',
    'ct.title':       'Get in touch',
    'ct.sub':         'We\'d love to hear from you. Reach out any time!',
    'ct.block1':      'Vila Sanja',
    'ct.owners':      'Owners:',
    'ct.block2':      'Location',
    'ct.block3':      'Why stay with us?',
    'ct.why1':        'Family atmosphere and personal approach to every guest',
    'ct.why2':        'Peaceful location, close to beaches and Cape Kamenjak Nature Park',
    'ct.why3':        'Free private parking and WiFi',
    'ct.why4':        'Terrace and outdoor area to relax',
    'ct.why5':        'Ideal for families, couples, and nature lovers',
    'ct.why6':        'Hosts speak German and English',
    'ct.why.p':       'Contact us today and book your holiday in Premantura!',
    'ct.book.btn':    'Book your stay',

    /* RULES page */
    'rl.hero':        'House Rules',
    'rl.title':       'House Rules & Information',
    'rl.checkin.h':   'Check-in & Check-out Times',
    'rl.checkin.p1':  'Check-in:',
    'rl.checkin.p2':  'Check-out:',
    'rl.checkin.note1':'A mandatory checkout inspection with property management is required before departure. Please coordinate your checkout time in advance.',
    'rl.checkin.note2':'Guests must present a valid photo ID upon check-in. Please inform Vila Sanja in advance of your expected arrival time.',
    'rl.children.h':  'Children & Beds',
    'rl.children.p1': 'Children of all ages are welcome.',
    'rl.children.p2': 'To see correct prices and occupancy information, please add the number and ages of children in your group to your search.',
    'rl.children.h4': 'Crib and extra bed policy',
    'rl.children.l1': 'Ages 0–5: Baby cot available upon request (free of charge)',
    'rl.children.l2': 'No extra beds available',
    'rl.children.l3': 'All cribs are subject to availability',
    'rl.age.h':       'Age Restriction',
    'rl.age.p':       'Minimum check-in age is 18 years.',
    'rl.pets.h':      'Pets',
    'rl.pets.p':      'Pets are allowed. Additional charges may apply – please contact us in advance.',
    'rl.pay.h':       'Payment Information',
    'rl.pay.p':       'Booking.com handles the payment for this property. Please ensure you have cash available for any additional charges upon arrival.',
    'rl.quiet.h':     'Quiet Hours & Parties',
    'rl.quiet.p1':    'Quiet hours:',
    'rl.quiet.p2':    'Parties and events are not permitted.',
    'rl.safety.h':    'Health & Safety',
    'rl.safety.l1':   'Enhanced cleaning and safety measures are in place',
    'rl.safety.l2':   'Physical distancing measures apply',
    'rl.safety.l3':   'Please ensure your booking complies with local guidelines',
    'rl.safety.l4':   'This property cannot be used for quarantine purposes',
    'rl.faq.title':   'Frequently Asked Questions',
    'rl.faq.q1':      'What accommodation types are available at Vila Sanja?',
    'rl.faq.a1':      'Vila Sanja offers three options: Duplex Apartment (up to 4+2), One-Bedroom Apartment (up to 2+2), Double Room with Balcony (2 people).',
    'rl.faq.q2':      'How far is Vila Sanja from Premantura center?',
    'rl.faq.a2':      'Vila Sanja is located approximately 200–300 meters from the Premantura village center.',
    'rl.faq.q3':      'How far is the nearest beach?',
    'rl.faq.a3':      'The nearest beach is approximately 600–900 meters from Vila Sanja. Cape Kamenjak Nature Park entrance is also nearby.',
    'rl.faq.q4':      'What are the prices at Vila Sanja?',
    'rl.faq.a4':      'Prices vary depending on your stay dates, accommodation type, and group size. Check current availability and prices on Booking.com.',
    'rl.faq.q5':      'Is parking available?',
    'rl.faq.a5':      'Yes, free private parking is available on site in the villa\'s courtyard.',

    /* NAV – Near Us */
    'nav.nearus':   'Near Us',
    'nav.beaches':  'Beaches',
    'nav.attr':     'Local Attractions',
    'nav.towns':    'Nearby Towns',

    /* PREMANTURA hub page */
    'prem.hero':               'Premantura & Surroundings',
    'prem.intro.p1':           'Premantura is a small, charming fishing village at the very tip of the Istrian peninsula, surrounded by the crystal-clear waters of the Adriatic. It is home to Cape Kamenjak — one of the most beautiful protected nature parks in Croatia — and offers an unhurried Mediterranean lifestyle far from the crowds.',
    'prem.intro.p2':           'Explore what makes Premantura and its surroundings so special:',
    'prem.card.beach.title':   'Beaches at Cape Kamenjak',
    'prem.card.beach.desc':    'Over 30 hidden coves, crystal-clear water, cliff jumping, water sports, and the legendary Safari Bar. Everything you need for a perfect beach day.',
    'prem.card.beach.btn':     'Explore beaches →',
    'prem.card.attr.title':    'Local Attractions',
    'prem.card.attr.desc':     'Ancient ruins, medieval fortresses, dinosaur trails, aqua parks and more — Premantura and the Pula riviera are packed with things to see and do.',
    'prem.card.attr.btn':      'See attractions →',
    'prem.card.towns.title':   'Nearby Towns',
    'prem.card.towns.desc':    'From the Roman splendor of Pula to the hilltop magic of Rovinj and Motovun — discover the best of Istria within easy driving distance.',
    'prem.card.towns.btn':     'Discover towns →',
    'prem.stat1':              'Hidden coves',
    'prem.stat2':              'Cape Kamenjak length',
    'prem.stat3':              'From Pula airport',
    'prem.stat4':              'Orchid species in park',
    'prem.about.title':        'About the Village',
    'prem.about.p1':           'Premantura sits at the southernmost point of Istria, just 14 km from Pula International Airport. The village has a population of around 400 and retains the quiet, authentic atmosphere of a traditional Croatian coastal settlement — cobblestone lanes, fishing boats, and fresh seafood.',
    'prem.about.p2':           'The gateway to Cape Kamenjak Nature Park is just a short drive or cycle ride away, making Premantura the ideal base for nature lovers, beach-goers, and those who want to explore Istria at their own pace.',
    'prem.about.p3':           'Vila Sanja is located right in the village center — perfectly placed for all of this and more.',
    'prem.chk1':               'Supermarket, bakery & pharmacy in village',
    'prem.chk2':               'Restaurants and cafés along the seafront',
    'prem.chk3':               'Pula city centre ~20 min by car',
    'prem.chk4':               'Cape Kamenjak entrance ~5 min by car',
    'prem.chk5':               'Rovinj ~45 min, Poreč ~1 hr by car',
    'prem.chk6':               'Quiet & safe — perfect for families',

    /* BEACHES page */
    'bch.hero':      'Beaches at Cape Kamenjak',
    'bch.crumb':     'Beaches',
    'bch.intro.h2':  'Rt Kamenjak – Istria\'s Wild Southern Tip',
    'bch.what.h2':   'What Kind of Beaches to Expect',
    'bch.high.h2':   'Must-See Highlights',
    'bch.act.h2':    'Activities & Water Sports',
    'bch.nat.h2':    'Nature & Wildlife',
    'bch.tips.h2':   'Practical Tips',
    'bch.back':      '← Back to Premantura',
    'bch.cta.btn':   'Contact us to plan your visit',

    /* ATTRACTIONS page */
    'atr.hero':          'Local Attractions',
    'atr.crumb':         'Local Attractions',
    'atr.intro':         'Premantura sits just 14 km from Pula — one of Croatia\'s richest cities for history and culture. Below is a guide to the best things to see and do in the region, from 2,000-year-old Roman monuments to wild nature parks and world-class film festivals.',
    'atr.cat.roman':     'Roman Pula & Historic Sites',
    'atr.cat.nature':    'Nature & Outdoors',
    'atr.cat.hidden':    'Hidden Gems',
    'atr.cat.events':    'Events & Culture',
    'atr.back':          '← Back to Premantura',
    'atr.bch.btn':       'Explore the Beaches',

    /* TOWNS page */
    'twn.hero':       'Nearby Towns',
    'twn.soon.h2':    'More content coming soon',
    'twn.soon.p':     'We are preparing a guide to the best towns within easy reach of Premantura — including Pula (Roman amphitheater, 20 min), Rovinj (45 min), Poreč (1 hr), Motovun and other Istrian hill towns.',
    'twn.back':       '← Back to Premantura',
    'twn.bch.btn':    'Explore the Beaches',

    /* BOOKING page */
    'bk.hero':         'Book Your Stay',
    'bk.title':        'How would you like to book?',
    'bk.sub':          "Choose the option that suits you best – we're happy to accommodate you either way!",
    'bk.online.title': 'Book via Booking.com',
    'bk.online.desc':  'Secure, instant online booking. Manage your reservation anytime.',
    'bk.online.l1':    'Instant confirmation',
    'bk.online.l2':    'Secure payment',
    'bk.online.l3':    'Easy cancellation',
    'bk.online.l4':    'Best available rates',
    'bk.online.btn':   'Book on Booking.com',
    'bk.direct.title': 'Contact Us Directly',
    'bk.direct.desc':  'Prefer a personal touch? Reach out for special requests, flexible dates, or any questions.',
    'bk.direct.l1':    'Personal service',
    'bk.direct.l2':    'Flexible arrangements',
    'bk.direct.l3':    'Special requests welcome',
    'bk.direct.l4':    'We speak EN & DE',
    'bk.direct.btn':   'View Contact Page',
  },

  /* ─────────────────────────────────────────────── CROATIAN ── */
  hr: {
    'nav.home':        'Početna',
    'nav.accom':       'Smještaj',
    'nav.duplex':      'Dupleks apartman',
    'nav.apartment':   'Apartman',
    'nav.room':        'Soba',
    'nav.reviews':     'Recenzije',
    'nav.about':       'O nama',
    'nav.rules':       'Pravila',
    'nav.contact':     'Kontakt',
    'nav.booknow':     'Rezerviraj!',

    'idx.hero.title':  'Vila Sanja – Vaša oaza mira na Jadranu',
    'idx.hero.desc':   'Udobni apartmani i sobe u Premanturi, Istra. Klima uređaji, privatni balkoni, besplatni WiFi i parking. Samo nekoliko minuta od mora i rta Kamenjak.',
    'idx.hero.cta':    'Rezervirajte odmor',
    'idx.hero.scroll': 'Pomakni se dolje',

    'idx.about.title': 'Dobrodošli u Vilu Sanja',
    'idx.about.p1':    'Vila Sanja je obiteljska vila u Premanturi, samo 300 m od centra sela i blizu mora. Nudimo dupleks apartman za 6, apartman za 4 i udobnu sobu za 2 – sve s privatnim balkonima, klima uređajem i besplatnim WiFi-jem.',
    'idx.about.p2':    'Vilu okružuje zelenilo s mirnim dvorištem i privatnim parkiranjem. Uživajte u mediteranskoj atmosferi i u svemu što Istra nudi!',
    'idx.about.btn':   'Saznajte više o nama',

    'idx.feat.title':       'Zašto odabrati Vilu Sanja?',
    'idx.feat.sub':         'Sve što trebate za savršen odmor u Istri',
    'idx.card.villa.title': 'Vila',
    'idx.card.villa.desc':  'Moderni apartmani okruženi zelenilom, s privatnim parkiranjem i opuštajućim dvorištem.',
    'idx.card.beach.title': 'Obližnje plaže',
    'idx.card.beach.desc':  'Samo nekoliko koraka od Jadranskog mora i ulaza u Park prirode rt Kamenjak.',
    'idx.card.rooms.title': 'Sobe i apartmani',
    'idx.card.rooms.desc':  'Udobni, klimatizirani prostori za obitelji, parove i solo putnike.',
    'idx.card.rooms.btn':   'Pogledaj sve',
    'idx.card.rev.title':   'Gosti nas vole',
    'idx.card.rev.desc':    'Više od 100 zadovoljnih gostiju i ocjena 8,1. Naši posjetitelji uvijek se vraćaju – pročitajte što kažu!',
    'idx.card.rev.btn':     'Pročitaj recenzije',

    'idx.stat.types':   'Vrste smještaja',
    'idx.stat.guests':  'Zadovoljnih gostiju',
    'idx.stat.dist':    'Od centra sela',
    'idx.stat.rating':  'Ocjena gostiju',

    'idx.rev.title':    'Što kažu naši gosti',
    'idx.rev.sub':      'Pouzdani od strane putnika iz cijelog svijeta',
    'idx.rev.btn':      'Pročitaj sve recenzije',

    'idx.info.loc.title':   'Lokacija',
    'idx.info.loc.addr':    'Selo Varoš 70 D, 52100 Premantura, Hrvatska',
    'idx.info.loc.link':    'Pogledaj kartu →',
    'idx.info.rules.title': 'Pravila boravka',
    'idx.info.rules.desc':  'Jednostavne smjernice za ugodan boravak svih.',
    'idx.info.rules.link':  'Pročitaj pravila →',
    'idx.info.rev.title':   'Recenzije',
    'idx.info.rev.desc':    'Stotine pozitivnih recenzija sretnih putnika.',
    'idx.info.rev.link':    'Pogledaj recenzije →',
    'idx.info.ct.title':    'Kontakt',
    'idx.info.ct.desc':     'Imate pitanje ili poseban zahtjev? Javite nam se!',
    'idx.info.ct.link':     'Kontaktirajte nas →',

    'idx.host.title':  'Upoznajte vaše domaćine',
    'idx.host.p1':     'Ovdje smo za vas – dobrodošli u našu vilu! Trudimo se da naše cijene budu pristupačne i da se svaki gost osjeća kao kod kuće. Na raspolaganju su vam dvorište, vrt i parking. Mirno okruženje, sve što trebate je u blizini.',
    'idx.host.langs':  'Osoblje govori: njemački, engleski',

    'abt.hero':        'O Vila Sanja',
    'abt.host.title':  'Domaćini: Sanja Volner i Matej Abramović',
    'abt.host.p1':     'Vila Sanja je na odličnoj lokaciji, vrlo blizu centra i nedaleко od mora. Ulaz na rt Kamenjak je također u blizini. Imamo dupleks apartman za 6 osoba, apartman za 4 osobe i sobu s kupaonicom i balkonom. Posvećeni smo ugodnom boravku gostiju i uvijek smo dostupni.',
    'abt.host.p2':     'Cijela vila je okružena zelenilom, a parkirna mjesta su dostupna u dvorištu vile. Trudimo se da naše cijene budu razumne. Mirno okruženje – ovdje se dobro spava, a sve što trebate je u blizini. Dobrodošli!',
    'abt.host.langs':  'Osoblje govori: njemački, engleski',
    'abt.chip.green':  'Zeleno i mirno',
    'abt.chip.wifi':   'Besplatni WiFi',
    'abt.chip.park':   'Privatni parking',
    'abt.chip.pet':    'Ljubimci dobrodošli',
    'abt.chip.ac':     'Klima uređaj',
    'abt.chip.fam':    'Prilagođeno obiteljima',
    'abt.love.title':  'Zašto gosti vole Vilu Sanja',
    'abt.love.1':      'Odlična lokacija – blizu centra i mora',
    'abt.love.2':      'Privatni balkoni, klima uređaj, besplatni WiFi',
    'abt.love.3':      'Mirno, zeleno okruženje',
    'abt.love.4':      'Besplatni privatni parking u dvorištu',
    'abt.love.5':      'Prilagođeno obiteljima i ljubimcima',
    'abt.love.6':      'Domaćini uvijek dostupni za pomoć',
    'abt.love.langs':  'Govore jezici',
    'abt.surr.title':  'Okolica smještaja',
    'abt.tbl.nearby':  'U blizini',
    'abt.tbl.rest':    'Restorani i kafići',
    'abt.tbl.beach':   'Obližnje plaže',
    'abt.tbl.attr':    'Popularne znamenitosti',
    'abt.tbl.trans':   'Javni prijevoz',
    'abt.tbl.air':     'Najbliže zračne luke',
    'abt.tbl.note':    'Prikazane su najkraće procijenjene udaljenosti pješice ili vozilom; stvarne udaljenosti mogu se razlikovati.',
    'abt.fac.title':   'Sadržaji Vile Sanja',
    'abt.fac.rating':  'Odlični sadržaji. Ocjena gostiju: 8,1',
    'abt.fac.pop':     'Najpopularnije:',
    'abt.fac.t1':  'Idealno za vaš boravak', 'abt.fac.t2':  'Kupaonica',   'abt.fac.t3':  'Spavaća soba',
    'abt.fac.t4':  'Pogled',                 'abt.fac.t5':  'Dvorište',    'abt.fac.t6':  'Kuhinja',
    'abt.fac.t7':  'Internet',               'abt.fac.t8':  'Parking',     'abt.fac.t9':  'Usluge',
    'abt.fac.t10': 'Mediji i tehnologija',   'abt.fac.t11': 'Kućni ljubimci','abt.fac.t12': 'Općenito',
    'abt.fac.t13': 'Sigurnost',              'abt.fac.t14': 'Govore jezici',

    'acc.hero':       'Smještaj',
    'acc.title':      'Odaberite savršen smještaj',
    'acc.sub':        'Svi smještaji dolaze s klima uređajem, TV-om, WiFi-jem, privatnom kupaonicom i balkonom. Apartmani uključuju punu kuhinju.',
    'acc.duplex.cap': '4 + 2 osobe | Dvije etaže',
    'acc.duplex.desc':'Prostrani dupleks apartman na dvije etaže, savršen za veće obitelji ili grupe. Potpuna kuhinja, dva balkona i generozni životni prostor.',
    'acc.apt.cap':    '2 + 2 osobe | Prizemlje',
    'acc.apt.desc':   'Udoban apartman s potpunom kuhinjom, privatnom kupaonicom i sunčanim balkonom – idealan za parove ili manje obitelji.',
    'acc.room.cap':   '2 osobe | 15 m²',
    'acc.room.desc':  'Ugodna, svježe renovirana soba s privatnom kupaonicom i balkonom. Uključuje mini-hladnjak, kuhalo i sve potrebne potrepštine.',
    'acc.btn':        'Pogledaj detalje',
    'acc.incl.title': 'Uključeno u svim jedinicama',
    'acc.incl.sub':   'Sve što trebate za udoban boravak',

    'dpl.hero':   'Dupleks apartman',
    'dpl.h2':     'Prostrani dvoetažni apartman',
    'dpl.desc':   'Naš najveći smještaj, Dupleks apartman proteže se na dvije etaže i savršen je za obitelji ili grupe do 6 osoba. Uživajte u potpunoj kuhinji, velikom životnom prostoru i dva privatna balkona s pogledom na istarsko selo.',
    'dpl.gal':    'Galerija',
    'dpl.btn':    'Rezerviraj ovaj apartman',
    'dpl.l1': 'Do 4 + 2 osobe',               'dpl.l2': 'Dvije etaže, prostran raspored',
    'dpl.l3': 'Potpuna kuhinja s blagovaonicom','dpl.l4': 'Dva privatna balkona',
    'dpl.l5': 'Klima uređaj i grijanje',       'dpl.l6': 'Privatna kupaonica s fenomom',
    'dpl.l7': 'Flat-screen TV, WiFi',          'dpl.l8': 'Ormar, posteljina je osigurana',
    'dpl.l9': 'Besplatni privatni parking',    'dpl.l10': 'Ljubimci dobrodošli',

    'apt.hero':   'Jednosobni apartman',
    'apt.h2':     'Udoban i dobro opremljen',
    'apt.desc':   'Ovaj svijetli apartman idealan je za parove ili manje obitelji do četiri osobe. Ima potpunu kuhinju, privatni balkon i sve ugodnosti za opuštajući odmor u Premanturi, Istra.',
    'apt.gal':    'Galerija',
    'apt.btn':    'Rezerviraj ovaj apartman',
    'apt.l1': 'Do 2 + 2 osobe',                'apt.l2': 'Potpuna kuhinja s blagovaonicom',
    'apt.l3': 'Privatni balkon',               'apt.l4': 'Klima uređaj i grijanje',
    'apt.l5': 'Privatna kupaonica s fenomom',  'apt.l6': 'Flat-screen TV, besplatni WiFi',
    'apt.l7': 'Hladnjak, kuhalo, kuhinjski pribor','apt.l8': 'Ormar, posteljina je osigurana',
    'apt.l9': 'Besplatni privatni parking',    'apt.l10': 'Ljubimci dobrodošli',

    'rm.hero':   'Dvokrevetna soba s balkonom',
    'rm.h2':     'Ugodna soba u srcu Premanture',
    'rm.desc':   'Uživajte u svježe renoviranoj sobi. Doživite lokalni život, odmorite se na privatnom balkonu i uživajte u modernim sadržajima u mirnom okruženju blizu plaža, trgovina i kafića.',
    'rm.gal':    'Galerija',
    'rm.btn':    'Rezerviraj ovu sobu',
    'rm.l1': '15 m², soba za 2 osobe',         'rm.l2': 'Privatni balkon',
    'rm.l3': 'Privatna kupaonica s tušem',     'rm.l4': 'Sušilo za kosu i ručnici',
    'rm.l5': 'Klima uređaj i grijanje',        'rm.l6': 'Flat-screen TV, besplatni WiFi',
    'rm.l7': 'Hladnjak i električno kuhalo',   'rm.l8': 'Ormar, posteljina je osigurana',
    'rm.l9': 'Privatni ulaz',                  'rm.l10': 'Besplatni parking',

    'rev.hero':       'Recenzije gostiju',
    'rev.stat1':      'Zadovoljnih gostiju',
    'rev.stat2':      'Ukupna ocjena',
    'rev.stat3':      'Ocjena lokacije',
    'rev.stat4':      'Čistoća',
    'rev.title':      'Što kažu naši gosti',
    'rev.sub':        'Stvarne recenzije od stvarnih putnika – drago nam je čuti od vas!',
    'rev.cta.title':  'Stvorite i vi svoja lijepa sjećanja?',
    'rev.cta.sub':    'Pridružite se stotinama zadovoljnih gostiju koji su odabrali Vilu Sanja za odmor u Istri.',
    'rev.cta.btn':    'Rezerviraj boravak',

    'ct.hero':        'Kontakt',
    'ct.title':       'Stupite u kontakt',
    'ct.sub':         'Drago nam je čuti od vas. Javite nam se u bilo koje vrijeme!',
    'ct.block1':      'Vila Sanja',
    'ct.owners':      'Vlasnici:',
    'ct.block2':      'Lokacija',
    'ct.block3':      'Zašto odabrati nas?',
    'ct.why1':        'Obiteljska atmosfera i osobni pristup svakom gostu',
    'ct.why2':        'Mirna lokacija, blizu plaža i Parka prirode rt Kamenjak',
    'ct.why3':        'Besplatni privatni parking i WiFi',
    'ct.why4':        'Terasa i vanjski prostor za opuštanje',
    'ct.why5':        'Idealno za obitelji, parove i ljubitelje prirode',
    'ct.why6':        'Domaćini govore njemački i engleski',
    'ct.why.p':       'Kontaktirajte nas danas i rezervirajte odmor u Premanturi!',
    'ct.book.btn':    'Rezervirajte boravak',

    'rl.hero':        'Pravila boravka',
    'rl.title':       'Kućni red i informacije',
    'rl.checkin.h':   'Prijava i odjava',
    'rl.checkin.p1':  'Prijava:',
    'rl.checkin.p2':  'Odjava:',
    'rl.checkin.note1':'Obvezna je inspekcija pri odjavi s upravljačem objekta. Dogovorite vrijeme odjave unaprijed.',
    'rl.checkin.note2':'Gosti moraju predočiti važeću osobnu iskaznicu pri prijavi. Obavijestite Vilu Sanja o očekivanom vremenu dolaska unaprijed.',
    'rl.children.h':  'Djeca i ležajevi',
    'rl.children.p1': 'Dobrodošla su djeca svih dobi.',
    'rl.children.p2': 'Za prikaz točnih cijena i podataka o popunjenosti, navedite broj i dob djece u grupi.',
    'rl.children.h4': 'Dječji krevetić i extra ležaj',
    'rl.children.l1': 'Djeca 0–5 god: dječji krevetić na zahtjev (besplatno)',
    'rl.children.l2': 'Nema dostupnih extra ležajeva',
    'rl.children.l3': 'Dječji krevetići podliježu dostupnosti',
    'rl.age.h':       'Dobno ograničenje',
    'rl.age.p':       'Minimalna dob za prijavu je 18 godina.',
    'rl.pets.h':      'Kućni ljubimci',
    'rl.pets.p':      'Kućni ljubimci su dobrodošli. Mogu se naplatiti dodatne naknade – kontaktirajte nas unaprijed.',
    'rl.pay.h':       'Informacije o plaćanju',
    'rl.pay.p':       'Booking.com obrađuje plaćanje. Imajte gotovinu pri ruci za eventualne dodatne troškove po dolasku.',
    'rl.quiet.h':     'Noćni mir i zabave',
    'rl.quiet.p1':    'Noćni mir:',
    'rl.quiet.p2':    'Zabave i eventi nisu dopušteni.',
    'rl.safety.h':    'Zdravlje i sigurnost',
    'rl.safety.l1':   'Pojačano čišćenje i mjere sigurnosti su na snazi',
    'rl.safety.l2':   'Primjenjuju se mjere fizičkog distanciranja',
    'rl.safety.l3':   'Osigurajte da vaša rezervacija bude u skladu s lokalnim smjernicama',
    'rl.safety.l4':   'Ovaj objekt ne može se koristiti u svrhu karantene',
    'rl.faq.title':   'Često postavljana pitanja',
    'rl.faq.q1':      'Koje vrste smještaja su dostupne u Vili Sanja?',
    'rl.faq.a1':      'Vila Sanja nudi tri opcije: Dupleks apartman (do 4+2), Jednosobni apartman (do 2+2), Dvokrevetna soba s balkonom (2 osobe).',
    'rl.faq.q2':      'Koliko je Vila Sanja udaljena od centra Premanture?',
    'rl.faq.a2':      'Vila Sanja je udaljena oko 200–300 metara od centra sela Premantura.',
    'rl.faq.q3':      'Koliko je udaljena najbliža plaža?',
    'rl.faq.a3':      'Najbliža plaža je oko 600–900 metara od Vile Sanja. Ulaz u Park prirode rt Kamenjak je također u blizini.',
    'rl.faq.q4':      'Kakve su cijene u Vili Sanja?',
    'rl.faq.a4':      'Cijene ovise o datumima boravka, vrsti smještaja i broju osoba. Provjerite dostupnost i cijene na Booking.com.',
    'rl.faq.q5':      'Je li dostupan parking?',
    'rl.faq.a5':      'Da, besplatni privatni parking dostupan je na licu mjesta u dvorištu vile.',

    /* NAV – Near Us */
    'nav.nearus':   'U blizini',
    'nav.beaches':  'Plaže',
    'nav.attr':     'Lokalne atrakcije',
    'nav.towns':    'Obližnji gradovi',

    /* PREMANTURA hub page */
    'prem.hero':               'Premantura i okolica',
    'prem.intro.p1':           'Premantura je malo, šarmantno ribarsko selo na samom vrhu Istarskog poluotoka, okruženo kristalno čistim vodama Jadrana. Dom je rtu Kamenjak — jednom od najljepših zaštićenih parkova prirode u Hrvatskoj — i nudi opušten mediteranski način života daleko od gužve.',
    'prem.intro.p2':           'Istražite što Premantura i njezina okolica čine toliko posebnima:',
    'prem.card.beach.title':   'Plaže na rtu Kamenjak',
    'prem.card.beach.desc':    'Više od 30 skrivenih uvala, kristalno čista voda, skokovi s litica, vodeni sportovi i legendarni Safari Bar. Sve što trebate za savršen dan na plaži.',
    'prem.card.beach.btn':     'Istraži plaže →',
    'prem.card.attr.title':    'Lokalne atrakcije',
    'prem.card.attr.desc':     'Antički ostatci, srednjovjekovne utvrde, staze dinosaura, aqua parkovi i još mnogo toga — Premantura i rivijera Pule nude bezbroj zanimljivosti.',
    'prem.card.attr.btn':      'Pogledaj atrakcije →',
    'prem.card.towns.title':   'Obližnji gradovi',
    'prem.card.towns.desc':    'Od rimske veličanstvenosti Pule do čarobnih brežuljaka Rovinja i Motovuna — otkrijte sve što Istra nudi na dosegu ruke.',
    'prem.card.towns.btn':     'Otkrij gradove →',
    'prem.stat1':              'Skrivenih uvala',
    'prem.stat2':              'Duljina rta Kamenjak',
    'prem.stat3':              'Od pulske zračne luke',
    'prem.stat4':              'Vrsta orhideja u parku',
    'prem.about.title':        'O selu',
    'prem.about.p1':           'Premantura leži na najjužnijoj točki Istre, samo 14 km od pulske međunarodne zračne luke. Selo broji oko 400 stanovnika i zadržava tihu, autentičnu atmosferu tradicionalnog hrvatskog priobalnog mjesta — popločane uličice, ribarski brodovi i svježi morski plodovi.',
    'prem.about.p2':           'Ulaz u Park prirode rt Kamenjak je na kratkom putu automobilom ili biciklom, što Premanturi daje idealnu poziciju za ljubitelje prirode, kupača i sve koji žele istraživati Istru vlastitim tempom.',
    'prem.about.p3':           'Vila Sanja nalazi se u samom centru sela — savršeno smještena za sve navedeno i još mnogo više.',
    'prem.chk1':               'Supermarket, pekara i ljekarna u selu',
    'prem.chk2':               'Restorani i kafići uz obalu mora',
    'prem.chk3':               'Centar Pule ~20 min automobilom',
    'prem.chk4':               'Ulaz u rt Kamenjak ~5 min automobilom',
    'prem.chk5':               'Rovinj ~45 min, Poreč ~1 sat automobilom',
    'prem.chk6':               'Mirno i sigurno — savršeno za obitelji',

    /* BEACHES page */
    'bch.hero':      'Plaže rta Kamenjak',
    'bch.crumb':     'Plaže',
    'bch.intro.h2':  'Rt Kamenjak – divlji južni vrh Istre',
    'bch.what.h2':   'Kakve plaže možete očekivati',
    'bch.high.h2':   'Obavezno posjetiti',
    'bch.act.h2':    'Aktivnosti i vodni sportovi',
    'bch.nat.h2':    'Priroda i divlji svijet',
    'bch.tips.h2':   'Praktični savjeti',
    'bch.back':      '← Natrag na Premantura',
    'bch.cta.btn':   'Kontaktirajte nas za planiranje posjeta',

    /* ATTRACTIONS page */
    'atr.hero':          'Lokalne atrakcije',
    'atr.crumb':         'Lokalne atrakcije',
    'atr.intro':         'Premantura se nalazi samo 14 km od Pule — jednog od najobogatijih hrvatskih gradova za povijest i kulturu. U nastavku je vodič kroz najzanimljivije što možete vidjeti i doživjeti u regiji, od rimskih spomenika starih 2.000 godina do divljih parkova prirode i svjetski poznatih filmskih festivala.',
    'atr.cat.roman':     'Rimska Pula i povijesne znamenitosti',
    'atr.cat.nature':    'Priroda i vanjske aktivnosti',
    'atr.cat.hidden':    'Skriveni dragulji',
    'atr.cat.events':    'Događanja i kultura',
    'atr.back':          '← Natrag na Premantura',
    'atr.bch.btn':       'Istraži plaže',

    /* TOWNS page */
    'twn.hero':       'Obližnji gradovi',
    'twn.soon.h2':    'Više sadržaja uskoro',
    'twn.soon.p':     'Pripremamo vodič kroz najbliže gradove do Premanture — uključujući Pulu (rimski amfiteatar, 20 min), Rovinj (45 min), Poreč (1 sat), Motovun i druge istarske gradiće na brdima.',
    'twn.back':       '← Natrag na Premantura',
    'twn.bch.btn':    'Istraži plaže',

    /* BOOKING page */
    'bk.hero':         'Rezervirajte boravak',
    'bk.title':        'Kako biste željeli rezervirati?',
    'bk.sub':          'Odaberite opciju koja vam najviše odgovara – drago nam je ugostiti vas na bilo koji način!',
    'bk.online.title': 'Rezervirajte putem Booking.com',
    'bk.online.desc':  'Sigurna, trenutna online rezervacija. Upravljajte rezervacijom u bilo koje vrijeme.',
    'bk.online.l1':    'Trenutna potvrda',
    'bk.online.l2':    'Sigurno plaćanje',
    'bk.online.l3':    'Jednostavan otkaz',
    'bk.online.l4':    'Najbolje dostupne cijene',
    'bk.online.btn':   'Rezerviraj na Booking.com',
    'bk.direct.title': 'Kontaktirajte nas izravno',
    'bk.direct.desc':  'Preferirate osobni pristup? Javite nam se za posebne zahtjeve, fleksibilne datume ili pitanja.',
    'bk.direct.l1':    'Osobna usluga',
    'bk.direct.l2':    'Fleksibilni dogovori',
    'bk.direct.l3':    'Posebni zahtjevi dobrodošli',
    'bk.direct.l4':    'Govorimo HR, EN i DE',
    'bk.direct.btn':   'Stranica za kontakt',
  },

  /* ─────────────────────────────────────────────── GERMAN ── */
  de: {
    'nav.home':        'Startseite',
    'nav.accom':       'Unterkunft',
    'nav.duplex':      'Duplex-Wohnung',
    'nav.apartment':   'Apartment',
    'nav.room':        'Zimmer',
    'nav.reviews':     'Bewertungen',
    'nav.about':       'Über uns',
    'nav.rules':       'Hausregeln',
    'nav.contact':     'Kontakt',
    'nav.booknow':     'Buchen!',

    'idx.hero.title':  'Vila Sanja – Ihre Ruheoase an der Adria',
    'idx.hero.desc':   'Komfortable Apartments und Zimmer in Premantura, Istrien. Klimaanlage, private Balkone, kostenfreies WLAN und Parkplatz. Nur wenige Minuten vom Meer und Kap Kamenjak.',
    'idx.hero.cta':    'Urlaub buchen',
    'idx.hero.scroll': 'Nach unten',

    'idx.about.title': 'Willkommen in der Vila Sanja',
    'idx.about.p1':    'Vila Sanja ist eine Familienvilla in Premantura, nur 300 m vom Dorfzentrum und nahe am Meer. Wir bieten eine Duplex-Wohnung für 6, ein Apartment für 4 und ein gemütliches Zimmer für 2 – alle mit privaten Balkonen, Klimaanlage und kostenfreiem WLAN.',
    'idx.about.p2':    'Die Villa ist von Grün umgeben, mit einem ruhigen Innenhof und privatem Parkplatz. Genießen Sie das mediterrane Flair und das Beste, was Istrien zu bieten hat!',
    'idx.about.btn':   'Mehr über uns erfahren',

    'idx.feat.title':       'Warum Vila Sanja wählen?',
    'idx.feat.sub':         'Alles, was Sie für einen perfekten Urlaub in Istrien brauchen',
    'idx.card.villa.title': 'Die Villa',
    'idx.card.villa.desc':  'Moderne Apartments umgeben von Grün, mit Privatparkplatz und entspannendem Innenhof.',
    'idx.card.beach.title': 'Strände in der Nähe',
    'idx.card.beach.desc':  'Nur wenige Schritte von der Adria und dem Eingang zum Naturpark Kap Kamenjak.',
    'idx.card.rooms.title': 'Zimmer & Apartments',
    'idx.card.rooms.desc':  'Komfortable, klimatisierte Einheiten für Familien, Paare und Alleinreisende.',
    'idx.card.rooms.btn':   'Alle ansehen',
    'idx.card.rev.title':   'Gäste lieben uns',
    'idx.card.rev.desc':    'Über 100 zufriedene Gäste und eine Bewertung von 8,1. Unsere Besucher kommen immer wieder – lesen Sie, was sie sagen!',
    'idx.card.rev.btn':     'Bewertungen lesen',

    'idx.stat.types':   'Unterkunftsarten',
    'idx.stat.guests':  'Zufriedene Gäste',
    'idx.stat.dist':    'Vom Dorfzentrum',
    'idx.stat.rating':  'Gästebewertung',

    'idx.rev.title':    'Was unsere Gäste sagen',
    'idx.rev.sub':      'Von Reisenden aus aller Welt geschätzt',
    'idx.rev.btn':      'Alle Bewertungen lesen',

    'idx.info.loc.title':   'Standort',
    'idx.info.loc.addr':    'Selo Varoš 70 D, 52100 Premantura, Kroatien',
    'idx.info.loc.link':    'Karte anzeigen →',
    'idx.info.rules.title': 'Hausregeln',
    'idx.info.rules.desc':  'Einfache Richtlinien für einen angenehmen Aufenthalt.',
    'idx.info.rules.link':  'Regeln lesen →',
    'idx.info.rev.title':   'Bewertungen',
    'idx.info.rev.desc':    'Hunderte positive Bewertungen zufriedener Reisender.',
    'idx.info.rev.link':    'Bewertungen anzeigen →',
    'idx.info.ct.title':    'Kontakt',
    'idx.info.ct.desc':     'Haben Sie eine Frage oder einen Sonderwunsch? Melden Sie sich!',
    'idx.info.ct.link':     'Kontakt aufnehmen →',

    'idx.host.title':  'Lernen Sie Ihre Gastgeber kennen',
    'idx.host.p1':     'Wir sind für Sie da – willkommen in unserer Villa! Wir bemühen uns, unsere Preise erschwinglich zu halten und jeden Gast wie zu Hause fühlen zu lassen. Innenhof, Garten und Parkplatz stehen zur Verfügung. Ruhige Umgebung, alles Nötige in der Nähe.',
    'idx.host.langs':  'Gesprochene Sprachen: Deutsch, Englisch',

    'abt.hero':        'Über Vila Sanja',
    'abt.host.title':  'Gastgeber: Sanja Volner & Matej Abramović',
    'abt.host.p1':     'Vila Sanja liegt an einem sehr guten Standort, sehr nah am Zentrum und nicht weit vom Meer. Der Eingang zu Kap Kamenjak ist ebenfalls in der Nähe. Wir haben eine Duplex-Wohnung für 6 Personen, ein Apartment für 4 Personen und ein Zimmer mit Bad und Balkon. Wir sind stets darum bemüht, dass sich die Gäste wohlfühlen, und immer erreichbar.',
    'abt.host.p2':     'Die gesamte Villa ist von Grün umgeben, und Parkplätze stehen im Innenhof zur Verfügung. Wir versuchen, unsere Preise fair zu halten. Ruhige Umgebung – hier schläft man gut, und alles, was man braucht, ist in der Nähe. Herzlich willkommen!',
    'abt.host.langs':  'Gesprochene Sprachen: Deutsch, Englisch',
    'abt.chip.green':  'Grün & Ruhig',
    'abt.chip.wifi':   'Kostenfreies WLAN',
    'abt.chip.park':   'Privatparkplatz',
    'abt.chip.pet':    'Haustiere erlaubt',
    'abt.chip.ac':     'Klimaanlage',
    'abt.chip.fam':    'Familienfreundlich',
    'abt.love.title':  'Warum Gäste die Vila Sanja lieben',
    'abt.love.1':      'Ausgezeichnete Lage – nah am Zentrum und am Meer',
    'abt.love.2':      'Private Balkone, Klimaanlage, kostenfreies WLAN',
    'abt.love.3':      'Ruhige, grüne Umgebung',
    'abt.love.4':      'Kostenfreier Privatparkplatz im Innenhof',
    'abt.love.5':      'Familien- und haustierfreundlich',
    'abt.love.6':      'Gastgeber stets für Hilfe erreichbar',
    'abt.love.langs':  'Gesprochene Sprachen',
    'abt.surr.title':  'Umgebung des Objekts',
    'abt.tbl.nearby':  'In der Nähe',
    'abt.tbl.rest':    'Restaurants & Cafés',
    'abt.tbl.beach':   'Strände in der Nähe',
    'abt.tbl.attr':    'Beliebte Sehenswürdigkeiten',
    'abt.tbl.trans':   'Öffentliche Verkehrsmittel',
    'abt.tbl.air':     'Nächstgelegene Flughäfen',
    'abt.tbl.note':    'Die kürzesten geschätzten Entfernungen zu Fuß oder mit dem Fahrzeug; tatsächliche Entfernungen können abweichen.',
    'abt.fac.title':   'Ausstattung der Vila Sanja',
    'abt.fac.rating':  'Ausgezeichnete Ausstattung. Gästebewertung: 8,1',
    'abt.fac.pop':     'Am beliebtesten:',
    'abt.fac.t1':  'Ideal für Ihren Aufenthalt','abt.fac.t2':  'Badezimmer',      'abt.fac.t3':  'Schlafzimmer',
    'abt.fac.t4':  'Aussicht',                  'abt.fac.t5':  'Außenbereich',   'abt.fac.t6':  'Küche',
    'abt.fac.t7':  'Internet',                  'abt.fac.t8':  'Parkplatz',       'abt.fac.t9':  'Dienstleistungen',
    'abt.fac.t10': 'Medien & Technologie',      'abt.fac.t11': 'Haustiere',       'abt.fac.t12': 'Allgemein',
    'abt.fac.t13': 'Sicherheit',                'abt.fac.t14': 'Gesprochene Sprachen',

    'acc.hero':       'Unterkunft',
    'acc.title':      'Wählen Sie Ihren perfekten Aufenthalt',
    'acc.sub':        'Alle Unterkünfte verfügen über Klimaanlage, Flachbild-TV, WLAN, privates Bad und Balkon. Apartments haben eine voll ausgestattete Küche.',
    'acc.duplex.cap': '4 + 2 Personen | Zwei Etagen',
    'acc.duplex.desc':'Geräumige Duplex-Wohnung auf zwei Etagen, perfekt für größere Familien oder Gruppen. Voll ausgestattete Küche, zwei Balkone und großzügiger Wohnbereich.',
    'acc.apt.cap':    '2 + 2 Personen | Erdgeschoss',
    'acc.apt.desc':   'Komfortables Apartment mit voll ausgestatteter Küche, privatem Bad und sonnigem Balkon – ideal für Paare oder kleine Familien.',
    'acc.room.cap':   '2 Personen | 15 m²',
    'acc.room.desc':  'Gemütliches, frisch renoviertes Zimmer mit privatem Bad und Balkon. Mit Mini-Kühlschrank, Wasserkocher und allem Notwendigen.',
    'acc.btn':        'Details ansehen',
    'acc.incl.title': 'In allen Einheiten enthalten',
    'acc.incl.sub':   'Alles, was Sie für einen komfortablen Aufenthalt brauchen',

    'dpl.hero':   'Duplex-Wohnung',
    'dpl.h2':     'Geräumiges Apartment auf zwei Etagen',
    'dpl.desc':   'Unsere größte Unterkunft, die Duplex-Wohnung, erstreckt sich über zwei Etagen und ist perfekt für Familien oder Gruppen bis zu 6 Personen. Genießen Sie eine voll ausgestattete Küche, großzügigen Wohnraum und zwei private Balkone.',
    'dpl.gal':    'Galerie',
    'dpl.btn':    'Dieses Apartment buchen',
    'dpl.l1': 'Bis zu 4 + 2 Personen',         'dpl.l2': 'Zwei Etagen, geräumig',
    'dpl.l3': 'Küche mit Essbereich',           'dpl.l4': 'Zwei private Balkone',
    'dpl.l5': 'Klimaanlage & Heizung',          'dpl.l6': 'Privates Bad mit Haartrockner',
    'dpl.l7': 'Flachbild-TV, WLAN',             'dpl.l8': 'Kleiderschrank, Bettwäsche inklusive',
    'dpl.l9': 'Kostenfreier Privatparkplatz',   'dpl.l10': 'Haustiere erlaubt',

    'apt.hero':   'Einzimmer-Apartment',
    'apt.h2':     'Komfortabel & Gut ausgestattet',
    'apt.desc':   'Dieses helle Apartment ist ideal für Paare oder kleine Familien bis zu vier Personen. Es verfügt über eine voll ausgestattete Küche, einen privaten Balkon und alles, was Sie für einen entspannten Urlaub in Premantura brauchen.',
    'apt.gal':    'Galerie',
    'apt.btn':    'Dieses Apartment buchen',
    'apt.l1': 'Bis zu 2 + 2 Personen',          'apt.l2': 'Küche mit Essbereich',
    'apt.l3': 'Privater Balkon',                'apt.l4': 'Klimaanlage & Heizung',
    'apt.l5': 'Privates Bad mit Haartrockner',  'apt.l6': 'Flachbild-TV, kostenfreies WLAN',
    'apt.l7': 'Kühlschrank, Wasserkocher, Kochgeschirr','apt.l8': 'Kleiderschrank, Bettwäsche inklusive',
    'apt.l9': 'Kostenfreier Privatparkplatz',   'apt.l10': 'Haustiere erlaubt',

    'rm.hero':   'Doppelzimmer mit Balkon',
    'rm.h2':     'Gemütliches Zimmer im Herzen von Premantura',
    'rm.desc':   'Genießen Sie Ihren Aufenthalt in unserem frisch renovierten Zimmer. Erleben Sie lokales Leben, entspannen Sie auf Ihrem privaten Balkon und genießen Sie moderne Ausstattung in ruhiger Lage nahe Stränden, Geschäften und Cafés.',
    'rm.gal':    'Galerie',
    'rm.btn':    'Dieses Zimmer buchen',
    'rm.l1': '15 m², Zimmer für 2 Personen',    'rm.l2': 'Privater Balkon',
    'rm.l3': 'Privates Bad mit Dusche',         'rm.l4': 'Haartrockner & Handtücher',
    'rm.l5': 'Klimaanlage & Heizung',           'rm.l6': 'Flachbild-TV, kostenfreies WLAN',
    'rm.l7': 'Kühlschrank & Wasserkocher',      'rm.l8': 'Kleiderschrank, Bettwäsche inklusive',
    'rm.l9': 'Privater Eingang',                'rm.l10': 'Kostenfreier Parkplatz',

    'rev.hero':       'Gästebewertungen',
    'rev.stat1':      'Zufriedene Gäste',
    'rev.stat2':      'Gesamtbewertung',
    'rev.stat3':      'Lagebewertung',
    'rev.stat4':      'Sauberkeit',
    'rev.title':      'Was unsere Gäste sagen',
    'rev.sub':        'Echte Bewertungen von echten Reisenden – wir freuen uns von Ihnen zu hören!',
    'rev.cta.title':  'Bereit, eigene Erinnerungen zu schaffen?',
    'rev.cta.sub':    'Schließen Sie sich Hunderten zufriedener Gäste an, die Vila Sanja für ihren Istrien-Urlaub gewählt haben.',
    'rev.cta.btn':    'Aufenthalt buchen',

    'ct.hero':        'Kontakt',
    'ct.title':       'Nehmen Sie Kontakt auf',
    'ct.sub':         'Wir freuen uns von Ihnen zu hören. Schreiben Sie uns jederzeit!',
    'ct.block1':      'Vila Sanja',
    'ct.owners':      'Eigentümer:',
    'ct.block2':      'Lage',
    'ct.block3':      'Warum bei uns übernachten?',
    'ct.why1':        'Familiäre Atmosphäre und persönlicher Umgang mit jedem Gast',
    'ct.why2':        'Ruhige Lage, nahe Stränden und Naturpark Kap Kamenjak',
    'ct.why3':        'Kostenfreier Privatparkplatz und WLAN',
    'ct.why4':        'Terrasse und Außenbereich zum Entspannen',
    'ct.why5':        'Ideal für Familien, Paare und Naturliebhaber',
    'ct.why6':        'Gastgeber sprechen Deutsch und Englisch',
    'ct.why.p':       'Kontaktieren Sie uns noch heute und buchen Sie Ihren Urlaub in Premantura!',
    'ct.book.btn':    'Aufenthalt buchen',

    'rl.hero':        'Hausregeln',
    'rl.title':       'Hausordnung & Informationen',
    'rl.checkin.h':   'Check-in & Check-out Zeiten',
    'rl.checkin.p1':  'Check-in:',
    'rl.checkin.p2':  'Check-out:',
    'rl.checkin.note1':'Eine obligatorische Abreisekontrolle mit dem Objektmanagement ist erforderlich. Bitte koordinieren Sie Ihre Abreisezeit im Voraus.',
    'rl.checkin.note2':'Gäste müssen beim Check-in einen gültigen Lichtbildausweis vorlegen. Bitte informieren Sie Vila Sanja vorab über Ihre voraussichtliche Ankunftszeit.',
    'rl.children.h':  'Kinder & Betten',
    'rl.children.p1': 'Kinder jeden Alters sind willkommen.',
    'rl.children.p2': 'Um korrekte Preise und Belegungsinformationen zu sehen, geben Sie bitte die Anzahl und das Alter der Kinder in Ihrer Gruppe an.',
    'rl.children.h4': 'Kinderbett und Zusatzbett',
    'rl.children.l1': 'Alter 0–5: Kinderbett auf Anfrage (kostenlos)',
    'rl.children.l2': 'Keine Zusatzbetten verfügbar',
    'rl.children.l3': 'Alle Kinderbetten unterliegen der Verfügbarkeit',
    'rl.age.h':       'Altersbeschränkung',
    'rl.age.p':       'Mindestalter beim Check-in: 18 Jahre.',
    'rl.pets.h':      'Haustiere',
    'rl.pets.p':      'Haustiere sind erlaubt. Es können zusätzliche Gebühren anfallen – bitte kontaktieren Sie uns vorab.',
    'rl.pay.h':       'Zahlungsinformationen',
    'rl.pay.p':       'Booking.com wickelt die Zahlung ab. Bitte halten Sie Bargeld für eventuelle Zusatzkosten bereit.',
    'rl.quiet.h':     'Ruhezeiten & Partys',
    'rl.quiet.p1':    'Ruhezeiten:',
    'rl.quiet.p2':    'Partys und Veranstaltungen sind nicht gestattet.',
    'rl.safety.h':    'Gesundheit & Sicherheit',
    'rl.safety.l1':   'Verstärkte Reinigungs- und Sicherheitsmaßnahmen sind in Kraft',
    'rl.safety.l2':   'Maßnahmen zum physischen Abstand gelten',
    'rl.safety.l3':   'Stellen Sie sicher, dass Ihre Buchung den örtlichen Vorschriften entspricht',
    'rl.safety.l4':   'Dieses Objekt kann nicht für Quarantänezwecke genutzt werden',
    'rl.faq.title':   'Häufig gestellte Fragen',
    'rl.faq.q1':      'Welche Unterkunftsarten gibt es in Vila Sanja?',
    'rl.faq.a1':      'Vila Sanja bietet drei Optionen: Duplex-Wohnung (bis 4+2), Einzimmer-Apartment (bis 2+2), Doppelzimmer mit Balkon (2 Personen).',
    'rl.faq.q2':      'Wie weit ist Vila Sanja vom Zentrum Premantura entfernt?',
    'rl.faq.a2':      'Vila Sanja liegt etwa 200–300 Meter vom Dorfzentrum Premantura entfernt.',
    'rl.faq.q3':      'Wie weit ist der nächste Strand?',
    'rl.faq.a3':      'Der nächste Strand ist etwa 600–900 Meter von Vila Sanja entfernt. Der Eingang zum Naturpark Kap Kamenjak ist ebenfalls in der Nähe.',
    'rl.faq.q4':      'Was kosten die Unterkünfte in Vila Sanja?',
    'rl.faq.a4':      'Die Preise variieren je nach Aufenthaltsdaten, Unterkunftsart und Gruppengröße. Aktuelle Verfügbarkeit und Preise auf Booking.com.',
    'rl.faq.q5':      'Ist Parken möglich?',
    'rl.faq.a5':      'Ja, kostenfreier Privatparkplatz steht auf dem Gelände im Innenhof zur Verfügung.',

    /* NAV – Near Us */
    'nav.nearus':   'In der Nähe',
    'nav.beaches':  'Strände',
    'nav.attr':     'Sehenswürdigkeiten',
    'nav.towns':    'Nahe Städte',

    /* PREMANTURA hub page */
    'prem.hero':               'Premantura & Umgebung',
    'prem.intro.p1':           'Premantura ist ein kleines, charmantes Fischerdorf an der äußersten Spitze der Halbinsel Istrien, umgeben von den kristallklaren Gewässern der Adria. Es ist die Heimat des Kaps Kamenjak — einem der schönsten Naturschutzgebiete Kroatiens — und bietet einen gemächlichen mediterranen Lebensstil abseits des Trubels.',
    'prem.intro.p2':           'Entdecken Sie, was Premantura und seine Umgebung so besonders macht:',
    'prem.card.beach.title':   'Strände am Kap Kamenjak',
    'prem.card.beach.desc':    'Über 30 versteckte Buchten, kristallklares Wasser, Klippenspringen, Wassersport und die legendäre Safari Bar. Alles für einen perfekten Strandtag.',
    'prem.card.beach.btn':     'Strände entdecken →',
    'prem.card.attr.title':    'Lokale Sehenswürdigkeiten',
    'prem.card.attr.desc':     'Antike Ruinen, mittelalterliche Festungen, Dinosaurier-Pfade, Aquaparks und mehr — Premantura und die Pula-Riviera bieten jede Menge zu sehen und zu erleben.',
    'prem.card.attr.btn':      'Sehenswürdigkeiten ansehen →',
    'prem.card.towns.title':   'Nahe Städte',
    'prem.card.towns.desc':    'Von Pulas römischer Pracht bis zur Bergmagie von Rovinj und Motovun — entdecken Sie das Beste Istriens in bequemer Fahrdistanz.',
    'prem.card.towns.btn':     'Städte entdecken →',
    'prem.stat1':              'Versteckte Buchten',
    'prem.stat2':              'Länge Kap Kamenjak',
    'prem.stat3':              'Vom Flughafen Pula',
    'prem.stat4':              'Orchideenarten im Park',
    'prem.about.title':        'Über das Dorf',
    'prem.about.p1':           'Premantura liegt am südlichsten Punkt Istriens, nur 14 km vom internationalen Flughafen Pula entfernt. Das Dorf hat rund 400 Einwohner und bewahrt die ruhige, authentische Atmosphäre einer traditionellen kroatischen Küstensiedlung — Kopfsteinpflaster, Fischerboote und frische Meeresfrüchte.',
    'prem.about.p2':           'Der Eingang zum Naturpark Kap Kamenjak ist nur eine kurze Fahrt oder Radtour entfernt, was Premantura zur idealen Basis für Naturliebhaber, Strandbesucher und all jene macht, die Istrien in eigenem Tempo erkunden möchten.',
    'prem.about.p3':           'Die Vila Sanja befindet sich direkt im Dorfzentrum — ideal gelegen für all das und noch mehr.',
    'prem.chk1':               'Supermarkt, Bäckerei & Apotheke im Dorf',
    'prem.chk2':               'Restaurants und Cafés an der Uferpromenade',
    'prem.chk3':               'Pula Stadtzentrum ~20 Min. mit dem Auto',
    'prem.chk4':               'Eingang Kap Kamenjak ~5 Min. mit dem Auto',
    'prem.chk5':               'Rovinj ~45 Min., Poreč ~1 Std. mit dem Auto',
    'prem.chk6':               'Ruhig & sicher — ideal für Familien',

    /* BEACHES page */
    'bch.hero':      'Strände am Kap Kamenjak',
    'bch.crumb':     'Strände',
    'bch.intro.h2':  'Kap Kamenjak – Istriens wilder Südzipfel',
    'bch.what.h2':   'Welche Strände erwarten Sie',
    'bch.high.h2':   'Sehenswerte Highlights',
    'bch.act.h2':    'Aktivitäten & Wassersport',
    'bch.nat.h2':    'Natur & Tierwelt',
    'bch.tips.h2':   'Praktische Tipps',
    'bch.back':      '← Zurück zu Premantura',
    'bch.cta.btn':   'Kontaktieren Sie uns zur Reiseplanung',

    /* ATTRACTIONS page */
    'atr.hero':          'Lokale Sehenswürdigkeiten',
    'atr.crumb':         'Lokale Sehenswürdigkeiten',
    'atr.intro':         'Premantura liegt nur 14 km von Pula entfernt — einer der kulturell und historisch reichsten Städte Kroatiens. Hier finden Sie einen Leitfaden zu den besten Sehenswürdigkeiten der Region, von 2.000 Jahre alten römischen Monumenten über wilde Naturparks bis zu weltbekannten Filmfestivals.',
    'atr.cat.roman':     'Römisches Pula & historische Stätten',
    'atr.cat.nature':    'Natur & Outdoor',
    'atr.cat.hidden':    'Versteckte Schätze',
    'atr.cat.events':    'Events & Kultur',
    'atr.back':          '← Zurück zu Premantura',
    'atr.bch.btn':       'Strände erkunden',

    /* TOWNS page */
    'twn.hero':       'Nahe Städte',
    'twn.soon.h2':    'Weitere Inhalte folgen bald',
    'twn.soon.p':     'Wir bereiten einen Leitfaden zu den besten Städten in der Nähe von Premantura vor — darunter Pula (Römisches Amphitheater, 20 Min.), Rovinj (45 Min.), Poreč (1 Std.), Motovun und andere istrische Bergstädte.',
    'twn.back':       '← Zurück zu Premantura',
    'twn.bch.btn':    'Strände erkunden',

    /* BOOKING page */
    'bk.hero':         'Aufenthalt buchen',
    'bk.title':        'Wie möchten Sie buchen?',
    'bk.sub':          'Wählen Sie die Option, die am besten zu Ihnen passt – wir freuen uns auf Ihren Besuch!',
    'bk.online.title': 'Über Booking.com buchen',
    'bk.online.desc':  'Sichere, sofortige Online-Buchung. Verwalten Sie Ihre Reservierung jederzeit.',
    'bk.online.l1':    'Sofortige Bestätigung',
    'bk.online.l2':    'Sichere Zahlung',
    'bk.online.l3':    'Einfache Stornierung',
    'bk.online.l4':    'Beste verfügbare Preise',
    'bk.online.btn':   'Auf Booking.com buchen',
    'bk.direct.title': 'Direkt kontaktieren',
    'bk.direct.desc':  'Bevorzugen Sie persönlichen Service? Kontaktieren Sie uns für Sonderwünsche, flexible Termine oder Fragen.',
    'bk.direct.l1':    'Persönlicher Service',
    'bk.direct.l2':    'Flexible Absprachen',
    'bk.direct.l3':    'Sonderwünsche willkommen',
    'bk.direct.l4':    'Wir sprechen EN & DE',
    'bk.direct.btn':   'Kontaktseite ansehen',
  }
};

/* ── Engine ── */
function applyLang(lang) {
  if (!LANG_DATA[lang]) lang = 'en';
  const T = LANG_DATA[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    /* Cache original English HTML before first substitution */
    if (!('i18nOrig' in el.dataset)) el.dataset.i18nOrig = el.innerHTML;

    if (lang === 'en') {
      el.innerHTML = el.dataset.i18nOrig;   /* restore original markup */
    } else {
      const v = T[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    }
  });

  /* Update the nav dropdown label */
  const toggle = document.getElementById('lang-current');
  if (toggle) toggle.textContent = lang.toUpperCase();

  /* Highlight active language in dropdown */
  document.querySelectorAll('.lang-option').forEach(a =>
    a.classList.toggle('active', a.dataset.lang === lang)
  );

  localStorage.setItem('vs-lang', lang);
  document.documentElement.lang = lang;
}

function parseRatingText(text) {
  if (!text) return null;
  const regexes = [
    /(\d+(?:\.\d+)?)\s*(?:\/\s*5|out of 5|stars?)/i,
    /overall rating(?: is|:)?\s*(\d+(?:\.\d+)?)/i,
    /rating(?: is|:)?\s*(\d+(?:\.\d+)?)/i,
  ];
  for (const rx of regexes) {
    const match = text.match(rx);
    if (match) return match[1];
  }
  return null;
}

function attemptUpdateGuestRatingFromElfsight() {
  const target = document.getElementById('guest-rating-value');
  if (!target) return false;
  const app = document.querySelector('.elfsight-app-8ae2e8e5-09be-43ec-853b-b421f041f45c');
  if (!app) return false;

  const rating = parseRatingText(app.textContent || '');
  if (rating) {
    if (target.firstChild && target.firstChild.nodeType === Node.TEXT_NODE) {
      target.firstChild.textContent = rating;
    } else {
      target.insertBefore(document.createTextNode(rating), target.firstChild);
    }
    target.dataset.updated = 'true';
    return true;
  }

  const iframes = app.querySelectorAll('iframe');
  for (const iframe of iframes) {
    try {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!doc?.body) continue;
      const innerRating = parseRatingText(doc.body.textContent || '');
      if (innerRating) {
        if (target.firstChild && target.firstChild.nodeType === Node.TEXT_NODE) {
          target.firstChild.textContent = innerRating;
        } else {
          target.insertBefore(document.createTextNode(innerRating), target.firstChild);
        }
        target.dataset.updated = 'true';
        return true;
      }
    } catch (error) {
      // cross-origin iframe access may be blocked
    }
  }
  return false;
}

function scheduleGuestRatingUpdate(retries = 12, delay = 500) {
  if (attemptUpdateGuestRatingFromElfsight()) return;
  if (retries > 0) {
    setTimeout(() => scheduleGuestRatingUpdate(retries - 1, delay), delay);
  }
}

function observeElfsightRating() {
  const app = document.querySelector('.elfsight-app-8ae2e8e5-09be-43ec-853b-b421f041f45c');
  if (!app) return;
  const observer = new MutationObserver(() => {
    if (attemptUpdateGuestRatingFromElfsight()) observer.disconnect();
  });
  observer.observe(app, { childList: true, subtree: true, characterData: true });
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('vs-lang') || 'en';
  applyLang(lang);

  const langToggle = document.getElementById('lang-current');
  if (langToggle) {
    const langLi = langToggle.closest('li.dropdown');
    const langMenu = langLi.querySelector('.dropdown-menu');
    langToggle.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', e => {
        e.preventDefault();
        applyLang(opt.dataset.lang);
        langMenu.style.display = 'none';
        const mT = document.querySelector('.menu-toggle');
        const mN = document.querySelector('nav');
        if (mT) mT.classList.remove('active');
        if (mN) mN.classList.remove('active');
      });
    });

    document.addEventListener('click', e => {
      if (!langLi.contains(e.target)) langMenu.style.display = 'none';
    });
  }

  scheduleGuestRatingUpdate();
  observeElfsightRating();
});
