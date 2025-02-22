const Dogs = [
  {
    id: 1,
    breed: "German Shepard",
    group: "herding",
    coat: "coarse, double coat",
    colour: "black and cream",
    description: "",
    intellegent: "high",
    temperament: "alert, loyal and protective",
    ruggedity: "High",
    energy: "high",
    price: "#100,000",
    image: [
      "https://th.bing.com/th/id/R.dbbd07ea6881af145e44b0c322036ae5?rik=bg5D5y%2fq9%2fnv4g&riu=http%3a%2f%2f1.bp.blogspot.com%2f-e5eoUrg_878%2fUKh3OO7PWXI%2fAAAAAAAABbU%2fl4XsROUukEI%2fs1600%2fGerman_Shepherd_Puppy.jpg&ehk=lVkaOjjKuVQHMQVf1go0fc8qqGDccDhZMndYXV0tGlw%3d&risl=&pid=ImgRaw&r=0",
      "https://live.staticflickr.com/3790/13739501303_fd5ca86805_b.jpg",
    ],
  },
  {
    id: 2,
    breed: "Rottweiler",
    group: "working",
    coat: "short double coat",
    colour: "Black with tan, rust or magony",
    description:
      "The rottie is a large and rugged dog with hard-working and confident demeanor.",
    intellegent: "High",
    temperament:
      "Fearless, confident and obedient",
    ruggedity: "High",
    energy: "Medium",
    price: "#350,000",
    image: [
      "https://cdn.fotofits.com/petzlover/gallery/img/l/rottweiler-578020.jpg",
      "https://cdn.fotofits.com/petzlover/gallery/img/l/rottweiler-589708.jpg",
    ],
  },
  {
    id: 3,
    breed: "Boerboel",
    group: "Working",
    coat: "Short, smooth",
    colour: "brindle",
    description:
      "The boerboel has a big and blocky head with a relatively short nose and V-shaped ears that hand down. Can be dominant and stuborn",
    intellegent: "High",
    temperament:
      "courageous, protective and alert",
    ruggedity: "High",
    energy: "Medium",
    price: "#250,000",
    image: [
      "https://www.akc.org/wp-content/uploads/2017/11/Boerboel-puppy.jpg",
      "https://th.bing.com/th/id/OIP.0f1It3wYz0afphpJtOrDRAHaGC?rs=1&pid=ImgDetMain",
    ],
  },
  {
    id: 4,
    breed: "Eskimo",
    group: "Non-sporting",
    coat: "Thick, glossy double coat",
    colour: "Pure white",
    description:
      "The Eskie is a chipper white dog that looks like a miniature husky. High maintenance",
    intellegent: "High",
    temperament:
      "Intelligent, reserved and friendly",
    ruggedity: "Low",

    energy: "High",
    price: "70,000",
    image: [
      "https://cdn.fotofits.com/petzlover/gallery/img/l/american-eskimo-dog-737870.jpeg",
      "https://s-media-cache-ak0.pinimg.com/236x/22/1b/ce/221bcecfe58f001aeaa007ebda4801b2.jpg",
    ],
  },
  {
    id: 5,
    breed: "Mastiff",
    group: "working",
    coat: "short and sleek",
    colour: "apricot or brindle",
    description:
      "This immense dog is big-boned and muscular with a noble, kind and loyal desposition",
    intellegent: "low",
    temperament: "calm, protective and peaceful",
    energy: "medium",
    price: "#250,000",
    image: [
      "https://cdn.fotofits.com/petzlover/gallery/img/l/english-mastiff-puppies-842279.jpeg",
      "https://th.bing.com/th/id/R.5230aa8dbf9d06f1f65f75f6b5be64bb?rik=RsoAS%2bON8JJGwg&riu=http%3a%2f%2fimages.fineartamerica.com%2fimages-medium-large%2fenglish-mastiff-puppy-jane-burton.jpg&ehk=AE0pOfPLmHTZHovaT22s5lLiyodC9HDuzgkoFdXZb6I%3d&risl=&pid=ImgRaw&r=0",
    ],
  },
  {
    id: 6,
    breed: "Doude De Bordeaux",
    group: "working",
    coat: "short, soft",
    colour: "fawn, ranging from ligth to dark",
    description:
      "A muscular, stocky, and well-balanced dog with a massive head.",
    intellegent: "medium",
    temperament: "vigilant, loyal, and devoted",
    energy: "medium",
    price: "#180,000",
    image: [
      "https://th.bing.com/th/id/R.802d8e660c497d963bc494c2c9495caa?rik=DSPD52clv3gQeA&pid=ImgRaw&r=0",
      "https://missmollysays.com/wp-content/uploads/2020/04/How-to-Protect-Your-Home-While-Fostering-Rescue-Animals-640x426.jpg",
    ],
  },
  {
    id: 7,
    breed: "Graet Dane",
    group: "working",
    coat: "short, smooth coat",
    colour: "black, black and white and brindle",
    description:
      "A dog known for their tall stature, large head and muzzle, long limbs and narrow body",
    intellegent: "medium",
    temperament: "proud, attentive and friend",
    energy: "medium",
    price: "#120,000",
    image: [
      "https://dogbreedersguide.com/wp-content/uploads/2018/01/Baby-Great-Dane-Puppies-Picture-750x652.jpg",
      "https://www.thepaws.net/wp-content/uploads/2018/11/miniature-great-dane-picture-27.jpg",
    ],
  },
  {
    id: 8,
    breed: "Bloodhound",
    group: "hound",
    coat: "short, dense and loose fur",
    colour: "black and tan or read",
    description:
      "A dog with the strongest sense of smell in the canine world, they are exception trackers",
    intellegent: "high",
    temperament: "stubborn, active and gentle",
    energy: "high",
    price: "180,000",
    image: [
      "https://th.bing.com/th/id/R.64d92866268a90bae873b0713527ea55?rik=lkoTgSIormFvXg&pid=ImgRaw&r=0",
      "https://www.petpaw.com.au/wp-content/uploads/2014/09/Bavarian-Mountain-Hound-puppy-300x300.jpg",
    ],
  },
  {
    id: 9,
    breed: "Beagle",
    group: "hound",
    coat: "short",
    colour: "tricolor",
    description:
      "A medium sized dog known for their large expressive eyes, floppy ears, uprigth white-tipped tailed",
    intellegent: "high",
    temperament: "fearless, keen and attentive",
    energy: "high",
    price: "#200,000",
    image: [
      "https://th.bing.com/th/id/OIP.XSIbN3v0NDNqr8EoLSRfWAHaHa?w=670&h=670&rs=1&pid=ImgDetMain",
      "https://i.pinimg.com/736x/22/88/f9/2288f99cc82a71a07d49f16a040df9ba.jpg",
    ],
  },
  {
    id: 10,
    breed: "Bulldog",
    group: "non-spoerting",
    coat: "straigth, short,smooth and glossy",
    colour: "red, white, fawn or fallow",
    description:
      "The bulldog is a medium size dog known for their trademark glommy face, wide shoulder and endearing roill gait",
    intellegent: "medium",
    temperament: "willful, docile and frindly",
    energy: "low",
    price: "#220,000",
    image: [
      "https://th.bing.com/th/id/R.dd45793209598ca5dbe84589d0272532?rik=h6NF8Itgwx6mHQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-0UkYICi3hnc%2fU0Or4NyVtdI%2fAAAAAAAABwU%2f7GsxNOofZDQ%2fs1600%2fCute-English-Bulldog-Puppies.jpg&ehk=NROwQ5oXnkBPqq5a%2fMr8Jbl4lZKGwr7moRnyJaL%2ffcI%3d&risl=&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/OIP.t3vmhbYWvFZHvl7oxhBTkAHaHD?w=550&h=524&rs=1&pid=ImgDetMain",
    ],
  },
  {
    id: 11,
    breed: "Pug",
    group: "toy",
    coat: "short and smooth",
    colour:
      "fawn or black with a black face mask",
    description:
      "Pugs are sturgy little dogs that pack in alot of personality. ",
    intellegent: "medium",
    temperament: "playfull and affectionate",
    energy: "medium",
    price: "#180,000",
    image: [
      "https://th.bing.com/th/id/OIP.khB2V01WeMnqyqk4dBtwRAHaLH?w=1333&h=2000&rs=1&pid=ImgDetMain",
      "https://i.pinimg.com/originals/e1/e1/5b/e1e15baf427b8e9bfeae0b0bd77ae5c7.jpg",
    ],
  },
  {
    id: 12,
    breed: "Chihuahua",
    group: "toy",
    coat: "smooth and short/long haired",
    colour: "black and tan, blue and tan",
    description:
      "A tiny but confident dog who loves to give and recieve attention. They are not good for kids.",
    intellegent: "high",
    temperament: "livily, bright and loyal",
    ruggedity: "can be aggressive",
    energy: "high",
    price: "#210,000",
    image: [
      "https://th.bing.com/th/id/R.dab55eca07927a1020c5160ed4967e63?rik=0DPg5zY4uuKZZA&pid=ImgRaw&r=0",
      "https://i.pinimg.com/originals/9a/38/83/9a3883725d27f8c1a448f116b0afa37e.jpg",
    ],
  },
  {
    id: 13,
    breed: "Maltipoo",
    group: "toy",
    coat: "wavy, curly, long and soft",
    colour: "white, blue, brown",
    description:
      "maitipoos are a result of a cross between the maltese and toy poodle. They can be anxious when left alone ",
    intellegent: "medium",
    temperament: "playfull and intellegent",
    ruggedity: "not aggressive",
    energy: "medium",
    price: "#179,000",
    image: [
      "https://th.bing.com/th/id/R.d7aac3530a1727472a81b27836ea55e0?rik=MQEduSnkOGlCcg&riu=http%3a%2f%2fiheartteacups.com%2fwp-content%2fuploads%2f2018%2f09%2fapricot-male-11.jpg&ehk=M9cE4BcqjWJQDEZbt587gLSIfr6x2OoVomsNx6m0VqA%3d&risl=&pid=ImgRaw&r=0",
      "https://th.bing.com/th/id/OIP.dT42R5_lZiUfQEnPnwTVBgAAAA?pid=ImgDet&w=192&h=228&c=7",
    ],
  },
  {
    id: 14,
    breed: "Border Collie",
    group: "herding",
    coat: "rough medium-length double coat",
    colour: "solid color, bicolor",
    description:
      "They are known for their alert expression,stong and agile body and stong instinct. Not suitable for small space living",
    intellegent: "high",
    temperament: "athletic, responsive and alert",
    ruggedity: "may be destructive",
    energy: "high",
    price: "#160,000",
    image: [
      "https://www.animalfactsencyclopedia.com/images/border-collie-puppy.jpg",
      "https://www.warrenphotographic.co.uk/photography/bigs/41791-Blue-and-white-Border-Collie-pup-sitting-white-background.jpg",
    ],
  },
  {
    id: 15,
    breed: "Sibrian Husky",
    group: "working",
    coat: "a dense, double coat",
    colour: "black, grey and white",
    description:
      "The Sibrian Husky is a graceful, athletic dog with high endurance. Prone to vocalization, including loud howling",
    intellegent: "medium",
    temperament:
      "protective, alert and intelligent",
    ruggedity: "midly aggressive",
    energy: "high",
    price: "#270,000",
    image: [
      "https://th.bing.com/th/id/R.50db25605239dc4432bc8a94c7df714e?rik=QSkLYIE5itsxeA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-IsGPbs7AWTA%2fUIwLZkzBCoI%2fAAAAAAAAAN0%2ffUiPlUjLNXI%2fs1600%2fSiberian%2bHusky%2bpuppy.jpg&ehk=7SLje4ISo003I9p2s8ZyA0eFKmlTCzuqVZeuXhVs9dA%3d&risl=&pid=ImgRaw&r=0",
      "https://i.pinimg.com/736x/6d/45/e5/6d45e52cc9536b7cdb0c88e5e3a44155.jpg",
    ],
  },
  {
    id: 16,
    breed: "Greyhound",
    group: "hound",
    coat: "short and smooth",
    colour: "black, blue, fawn and white",
    description:
      "A large-size hound with long muscular legs, a narrow, streamlined body. They do not make a good watch dog and high prey drive.",
    intellegent: "high",
    temperament:
      "athletic, quiet and even-tempered",
    ruggedity: "medium",
    energy: "medium",
    price: "#230,000",
    image: [
      "https://cdn.fotofits.com/petzlover/gallery/img/l/italian-greyhound-puppies-830905.jpeg",
      "https://i.pinimg.com/236x/1c/05/1e/1c051ef0798d5f83086c6277848e9dd9--italian-greyhound-puppies-whippet-puppies.jpg",
    ],
  },
  
];

export default Dogs;