import toast from "react-hot-toast";

export const linksOption = [
  { href: "/sales", text: "Sales" },
  { href: "/purchase", text: "Purchase" },
  { href: "/users", text: "Users" },
  { href: "/product", text: "Product" },
  { href: "/reports", text: "Reports" },
  { href: "/company", text: "Company" },
  { href: "/employee", text: "Employee" },
  { href: "/manufacturer", text: "Manufacturer" },
  { href: "/attendence", text: "Employee Attendence" }
];

export const usersOption = [
  { href: "/customer", text: "New User" },
  { href: "/cart", text: "Existing User" }
];

export const calcInitialValues = {
  grandTotal: 0,
  discount: 0,
  tax: 0
};

export const roastError = e => {
  toast.error("Something goes wrong, please try again later");
};

export const successMsg = e => {
  toast.success(e);
};

export const errorMsg = e => {
  toast.error(e);
};

export const generateUniqueId = () => {
  const timestamp = new Date().getTime().toString(16);
  const randomPart = Math.random().toString(16).substr(2, 12);
  return timestamp + randomPart;
};

export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};


export const FakeData = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 }
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 }
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: { rate: 2.1, count: 430 }
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.6, count: 400 }
  }
];

export const productsData = [
  {
    id: 1000,
    name: "James Butt",
    country: {
      name: "Algeria",
      code: "dz"
    },
    company: "Benton, John B Jr",
    date: "2015-09-13",
    status: "unqualified",
    verified: true,
    activity: 17,
    representative: {
      name: "Ioni Bowcher",
      image: "ionibowcher.png"
    },
    balance: 70663
  },
  {
    id: 1001,
    name: "Josephine Darakjy",
    country: {
      name: "Egypt",
      code: "eg"
    },
    company: "Chanay, Jeffrey A Esq",
    date: "2019-02-09",
    status: "proposal",
    verified: true,
    activity: 0,
    representative: {
      name: "Amy Elsner",
      image: "amyelsner.png"
    },
    balance: 82429
  },
  {
    id: 1002,
    name: "Art Venere",
    country: {
      name: "Panama",
      code: "pa"
    },
    company: "Chemel, James L Cpa",
    date: "2017-05-13",
    status: "qualified",
    verified: false,
    activity: 63,
    representative: {
      name: "Asiya Javayant",
      image: "asiyajavayant.png"
    },
    balance: 28334
  },
  {
    id: 1003,
    name: "Lenna Paprocki",
    country: {
      name: "Slovenia",
      code: "si"
    },
    company: "Feltz Printing Service",
    date: "2020-09-15",
    status: "new",
    verified: false,
    activity: 37,
    representative: {
      name: "Xuxue Feng",
      image: "xuxuefeng.png"
    },
    balance: 88521
  },
  {
    id: 1004,
    name: "Jamin Foller",
    country: {
      name: "South Africa",
      code: "za"
    },
    company: "Printing Dimensions",
    date: "2016-05-20",
    status: "proposal",
    verified: true,
    activity: 33,
    representative: {
      name: "Asiya Javayant",
      image: "asiyajavayant.png"
    },
    balance: 93905
  },
  {
    id: 1005,
    name: "Simona Morasca",
    country: {
      name: "Egypt",
      code: "eg"
    },
    company: "Chapman, Ross E Esq",
    date: "2018-02-16",
    status: "qualified",
    verified: false,
    activity: 68,
    representative: {
      name: "Ivan Magalhaes",
      image: "ivanmagalhaes.png"
    },
    balance: 50041
  },
  {
    id: 1006,
    name: "Mitsue Tollner",
    country: {
      name: "Paraguay",
      code: "py"
    },
    company: "Morlong Associates",
    date: "2018-02-19",
    status: "renewal",
    verified: true,
    activity: 54,
    representative: {
      name: "Ivan Magalhaes",
      image: "ivanmagalhaes.png"
    },
    balance: 58706
  },
  {
    id: 1007,
    name: "Leota Dilliard",
    country: {
      name: "Serbia",
      code: "rs"
    },
    company: "Commercial Press",
    date: "2019-08-13",
    status: "renewal",
    verified: true,
    activity: 69,
    representative: {
      name: "Onyama Limba",
      image: "onyamalimba.png"
    },
    balance: 26640
  },
  {
    id: 1008,
    name: "Sage Wieser",
    country: {
      name: "Egypt",
      code: "eg"
    },
    company: "Truhlar And Truhlar Attys",
    date: "2018-11-21",
    status: "unqualified",
    verified: true,
    activity: 76,
    representative: {
      name: "Ivan Magalhaes",
      image: "ivanmagalhaes.png"
    },
    balance: 65369
  },
  {
    id: 1009,
    name: "Kris Marrier",
    country: {
      name: "Mexico",
      code: "mx"
    },
    company: "King, Christopher A Esq",
    date: "2015-07-07",
    status: "proposal",
    verified: false,
    activity: 3,
    representative: {
      name: "Onyama Limba",
      image: "onyamalimba.png"
    },
    balance: 63451
  },
  {
    id: 1010,
    name: "Minna Amigon",
    country: {
      name: "Romania",
      code: "ro"
    },
    company: "Dorl, James J Esq",
    date: "2018-11-07",
    status: "qualified",
    verified: false,
    activity: 38,
    representative: {
      name: "Anna Fali",
      image: "annafali.png"
    },
    balance: 71169
  },
  {
    id: 1011,
    name: "Abel Maclead",
    country: {
      name: "Singapore",
      code: "sg"
    },
    company: "Rangoni Of Florence",
    date: "2017-03-11",
    status: "qualified",
    verified: true,
    activity: 87,
    representative: {
      name: "Bernardo Dominic",
      image: "bernardodominic.png"
    },
    balance: 96842
  },
  {
    id: 1012,
    name: "Kiley Caldarera",
    country: {
      name: "Serbia",
      code: "rs"
    },
    company: "Feiner Bros",
    date: "2015-10-20",
    status: "unqualified",
    verified: false,
    activity: 80,
    representative: {
      name: "Onyama Limba",
      image: "onyamalimba.png"
    },
    balance: 92734
  },
  {
    id: 1013,
    name: "Graciela Ruta",
    country: {
      name: "Chile",
      code: "cl"
    },
    company: "Buckley Miller & Wright",
    date: "2016-07-25",
    status: "negotiation",
    verified: false,
    activity: 59,
    representative: {
      name: "Amy Elsner",
      image: "amyelsner.png"
    },
    balance: 45250
  },
  {
    id: 1014,
    name: "Cammy Albares",
    country: {
      name: "Philippines",
      code: "ph"
    },
    company: "Rousseaux, Michael Esq",
    date: "2019-06-25",
    status: "new",
    verified: true,
    activity: 90,
    representative: {
      name: "Asiya Javayant",
      image: "asiyajavayant.png"
    },
    balance: 30236
  },
  {
    id: 1015,
    name: "Mattie Poquette",
    country: {
      name: "Venezuela",
      code: "ve"
    },
    company: "Century Communications",
    date: "2017-12-12",
    status: "negotiation",
    verified: false,
    activity: 52,
    representative: {
      name: "Anna Fali",
      image: "annafali.png"
    },
    balance: 64533
  },
  {
    id: 1016,
    name: "Meaghan Garufi",
    country: {
      name: "Malaysia",
      code: "my"
    },
    company: "Bolton, Wilbur Esq",
    date: "2018-07-04",
    status: "unqualified",
    verified: false,
    activity: 31,
    representative: {
      name: "Ivan Magalhaes",
      image: "ivanmagalhaes.png"
    },
    balance: 37279
  },
  {
    id: 1017,
    name: "Gladys Rim",
    country: {
      name: "Netherlands",
      code: "nl"
    },
    company: "T M Byxbee Company Pc",
    date: "2020-02-27",
    status: "renewal",
    verified: true,
    activity: 48,
    representative: {
      name: "Stephen Shaw",
      image: "stephenshaw.png"
    },
    balance: 27381
  },
  {
    id: 1018,
    name: "Yuki Whobrey",
    country: {
      name: "Israel",
      code: "il"
    },
    company: "Farmers Insurance Group",
    date: "2017-12-21",
    status: "negotiation",
    verified: true,
    activity: 16,
    representative: {
      name: "Bernardo Dominic",
      image: "bernardodominic.png"
    },
    balance: 9257
  },
  {
    id: 1019,
    name: "Fletcher Flosi",
    country: {
      name: "Argentina",
      code: "ar"
    },
    company: "Post Box Services Plus",
    date: "2016-01-04",
    status: "renewal",
    verified: true,
    activity: 19,
    representative: {
      name: "Xuxue Feng",
      image: "xuxuefeng.png"
    },
    balance: 67783
  },
  {
    id: 1020,
    name: "Bette Nicka",
    country: {
      name: "Paraguay",
      code: "py"
    },
    company: "Sport En Art",
    date: "2016-10-21",
    status: "renewal",
    verified: false,
    activity: 100,
    representative: {
      name: "Onyama Limba",
      image: "onyamalimba.png"
    },
    balance: 4609
  },
  {
    id: 1021,
    name: "Veronika Inouye",
    country: {
      name: "Ecuador",
      code: "ec"
    },
    company: "C 4 Network Inc",
    date: "2017-03-24",
    status: "renewal",
    verified: false,
    activity: 72,
    representative: {
      name: "Ioni Bowcher",
      image: "ionibowcher.png"
    },
    balance: 26565
  },
  {
    id: 1022,
    name: "Willard Kolmetz",
    country: {
      name: "Tunisia",
      code: "tn"
    },
    company: "Ingalls, Donald R Esq",
    date: "2017-04-15",
    status: "renewal",
    verified: true,
    activity: 94,
    representative: {
      name: "Asiya Javayant",
      image: "asiyajavayant.png"
    },
    balance: 75876
  },
  {
    id: 1023,
    name: "Maryann Royster",
    country: {
      name: "Belarus",
      code: "by"
    },
    company: "Franklin, Peter L Esq",
    date: "2017-03-11",
    status: "qualified",
    verified: false,
    activity: 56,
    representative: {
      name: "Elwin Sharvill",
      image: "elwinsharvill.png"
    },
    balance: 41121
  },
  {
    id: 1024,
    name: "Alisha Slusarski",
    country: {
      name: "Iceland",
      code: "is"
    },
    company: "Wtlz Power 107 Fm",
    date: "2018-03-27",
    status: "qualified",
    verified: true,
    activity: 7,
    representative: {
      name: "Stephen Shaw",
      image: "stephenshaw.png"
    },
    balance: 91691
  },
  {
    id: 1025,
    name: "Allene Iturbide",
    country: {
      name: "Italy",
      code: "it"
    },
    company: "Ledecky, David Esq",
    date: "2016-02-20",
    status: "qualified",
    verified: true,
    activity: 1,
    representative: {
      name: "Ivan Magalhaes",
      image: "ivanmagalhaes.png"
    },
    balance: 40137
  },
  {
    id: 1026,
    name: "Chanel Caudy",
    country: {
      name: "Argentina",
      code: "ar"
    },
    company: "Professional Image Inc",
    date: "2018-06-24",
    status: "new",
    verified: true,
    activity: 26,
    representative: {
      name: "Ioni Bowcher",
      image: "ionibowcher.png"
    },
    balance: 21304
  },
  {
    id: 1027,
    name: "Ezekiel Chui",
    country: {
      name: "Ireland",
      code: "ie"
    },
    company: "Sider, Donald C Esq",
    date: "2016-09-24",
    status: "new",
    verified: false,
    activity: 76,
    representative: {
      name: "Amy Elsner",
      image: "amyelsner.png"
    },
    balance: 60454
  },
  {
    id: 1028,
    name: "Willow Kusko",
    country: {
      name: "Romania",
      code: "ro"
    },
    company: "U Pull It",
    date: "2020-04-11",
    status: "qualified",
    verified: true,
    activity: 7,
    representative: {
      name: "Onyama Limba",
      image: "onyamalimba.png"
    },
    balance: 17565
  },
  {
    id: 1029,
    name: "Bernardo Figeroa",
    country: {
      name: "Israel",
      code: "il"
    },
    company: "Clark, Richard Cpa",
    date: "2018-04-11",
    status: "renewal",
    verified: true,
    activity: 81,
    representative: {
      name: "Ioni Bowcher",
      image: "ionibowcher.png"
    },
    balance: 17774
  },
  {
    id: 1030,
    name: "Ammie Corrio",
    country: {
      name: "Hungary",
      code: "hu"
    },
    company: "Moskowitz, Barry S",
    date: "2016-06-11",
    status: "negotiation",
    verified: true,
    activity: 56,
    representative: {
      name: "Asiya Javayant",
      image: "asiyajavayant.png"
    },
    balance: 49201
  },
  {
    id: 1031,
    name: "Francine Vocelka",
    country: {
      name: "Honduras",
      code: "hn"
    },
    company: "Cascade Realty Advisors Inc",
    date: "2017-08-02",
    status: "qualified",
    verified: true,
    activity: 94,
    representative: {
      name: "Ioni Bowcher",
      image: "ionibowcher.png"
    },
    balance: 67126
  },
  {
    id: 1032,
    name: "Ernie Stenseth",
    country: {
      name: "Australia",
      code: "au"
    },
    company: "Knwz Newsradio",
    date: "2018-06-06",
    status: "renewal",
    verified: true,
    activity: 68,
    representative: {
      name: "Xuxue Feng",
      image: "xuxuefeng.png"
    },
    balance: 76017
  },
  {
    id: 1033,
    name: "Albina Glick",
    country: {
      name: "Ukraine",
      code: "ua"
    },
    company: "Giampetro, Anthony D",
    date: "2019-08-08",
    status: "proposal",
    verified: true,
    activity: 85,
    representative: {
      name: "Bernardo Dominic",
      image: "bernardodominic.png"
    },
    balance: 91201
  },
  {
    id: 1034,
    name: "Alishia Sergi",
    country: {
      name: "Qatar",
      code: "qa"
    },
    company: "Milford Enterprises Inc",
    date: "2018-05-19",
    status: "negotiation",
    verified: false,
    activity: 46,
    representative: {
      name: "Ivan Magalhaes",
      image: "ivanmagalhaes.png"
    },
    balance: 12237
  },
  {
    id: 1035,
    name: "Solange Shinko",
    country: {
      name: "Cameroon",
      code: "cm"
    },
    company: "Mosocco, Ronald A",
    date: "2015-02-12",
    status: "qualified",
    verified: true,
    activity: 32,
    representative: {
      name: "Onyama Limba",
      image: "onyamalimba.png"
    },
    balance: 34072
  },
  {
    id: 1036,
    name: "Jose Stockham",
    country: {
      name: "Italy",
      code: "it"
    },
    company: "Tri State Refueler Co",
    date: "2018-04-25",
    status: "qualified",
    verified: true,
    activity: 77,
    representative: {
      name: "Amy Elsner",
      image: "amyelsner.png"
    },
    balance: 94909
  },
  {
    id: 1037,
    name: "Rozella Ostrosky",
    country: {
      name: "Venezuela",
      code: "ve"
    },
    company: "Parkway Company",
    date: "2016-02-27",
    status: "unqualified",
    verified: true,
    activity: 66,
    representative: {
      name: "Amy Elsner",
      image: "amyelsner.png"
    },
    balance: 57245
  },
  {
    id: 1038,
    name: "Valentine Gillian",
    country: {
      name: "Paraguay",
      code: "py"
    },
    company: "Fbs Business Finance",
    date: "2019-09-17",
    status: "qualified",
    verified: true,
    activity: 25,
    representative: {
      name: "Bernardo Dominic",
      image: "bernardodominic.png"
    },
    balance: 75502
  },
  {
    id: 1039,
    name: "Kati Rulapaugh",
    country: {
      name: "Puerto Rico",
      code: "pr"
    },
    company: "Eder Assocs Consltng Engrs Pc",
    date: "2016-12-03",
    status: "renewal",
    verified: false,
    activity: 51,
    representative: {
      name: "Ioni Bowcher",
      image: "ionibowcher.png"
    },
    balance: 82075
  },
  {
    id: 1040,
    name: "Youlanda Schemmer",
    country: {
      name: "Bolivia",
      code: "bo"
    },
    company: "Tri M Tool Inc",
    date: "2017-12-15",
    status: "negotiation",
    verified: true,
    activity: 49,
    representative: {
      name: "Xuxue Feng",
      image: "xuxuefeng.png"
    },
    balance: 19208
  },
  {
    id: 1041,
    name: "Dyan Oldroyd",
    country: {
      name: "Argentina",
      code: "ar"
    },
    company: "International Eyelets Inc",
    date: "2017-02-02",
    status: "qualified",
    verified: false,
    activity: 5,
    representative: {
      name: "Amy Elsner",
      image: "amyelsner.png"
    },
    balance: 50194
  },
  {
    id: 1042,
    name: "Roxane Campain",
    country: {
      name: "France",
      code: "fr"
    },
    company: "Rapid Trading Intl",
    date: "2018-12-25",
    status: "unqualified",
    verified: false,
    activity: 100,
    representative: {
      name: "Anna Fali",
      image: "annafali.png"
    },
    balance: 77714
  },
  {
    id: 1043,
    name: "Lavera Perin",
    country: {
      name: "Vietnam",
      code: "vn"
    },
    company: "Abc Enterprises Inc",
    date: "2018-04-10",
    status: "qualified",
    verified: false,
    activity: 71,
    representative: {
      name: "Stephen Shaw",
      image: "stephenshaw.png"
    },
    balance: 35740
  },
  {
    id: 1044,
    name: "Erick Ferencz",
    country: {
      name: "Belgium",
      code: "be"
    },
    company: "Cindy Turner Associates",
    date: "2018-05-06",
    status: "unqualified",
    verified: true,
    activity: 54,
    representative: {
      name: "Amy Elsner",
      image: "amyelsner.png"
    },
    balance: 30790
  },
  {
    id: 1045,
    name: "Fatima Saylors",
    country: {
      name: "Canada",
      code: "ca"
    },
    company: "Stanton, James D Esq",
    date: "2019-07-10",
    status: "renewal",
    verified: true,
    activity: 93,
    representative: {
      name: "Onyama Limba",
      image: "onyamalimba.png"
    },
    balance: 52343
  },
  {
    id: 1046,
    name: "Jina Briddick",
    country: {
      name: "Mexico",
      code: "mx"
    },
    company: "Grace Pastries Inc",
    date: "2018-02-19",
    status: "unqualified",
    verified: false,
    activity: 97,
    representative: {
      name: "Xuxue Feng",
      image: "xuxuefeng.png"
    },
    balance: 53966
  },
  {
    id: 1047,
    name: "Kanisha Waycott",
    country: {
      name: "Ecuador",
      code: "ec"
    },
    company: "Schroer, Gene E Esq",
    date: "2019-11-27",
    status: "new",
    verified: false,
    activity: 80,
    representative: {
      name: "Xuxue Feng",
      image: "xuxuefeng.png"
    },
    balance: 9920
  },
  {
    id: 1499,
    name: "Chauncey Motley",
    country: {
      name: "Argentina",
      code: "ar"
    },
    company: "Affiliated With Travelodge",
    date: "2019-04-23",
    status: "renewal",
    verified: true,
    activity: 42,
    representative: {
      name: "Amy Elsner",
      image: "amyelsner.png"
    },
    balance: 88090
  }
];

export const sampleUser = [
  {
    id: "1",
    name: "Laptop",
    email: "laptop@example.com",
    address: "123 Main St, Cityville",
    mobileNo: "123-456-7890",
    shopName: "Tech Store",
    gstNo: "GST123456",
    category: "Electronics",
    price: 999.99,
    available_quantity: 20,
    rating: 4,
    inventoryStatus: "INSTOCK",
    image: "laptop.jpg"
  },
  {
    id: "2",
    name: "Smartphone",
    email: "phone@example.com",
    address: "456 Elm St, Townsville",
    mobileNo: "234-567-8901",
    shopName: "Mobile Hub",
    gstNo: "GST234567",
    category: "Electronics",
    price: 699.99,
    available_quantity: 50,
    rating: 5,
    inventoryStatus: "INSTOCK",
    image: "smartphone.jpg"
  },
  {
    id: "3",
    name: "Headphones",
    email: "headphones@example.com",
    address: "789 Oak St, Villagetown",
    mobileNo: "345-678-9012",
    shopName: "Audio World",
    gstNo: "GST345678",
    category: "Accessories",
    price: 199.99,
    available_quantity: 30,
    rating: 4,
    inventoryStatus: "LOWSTOCK",
    image: "headphones.jpg"
  },
  {
    id: "4",
    name: "Smartwatch",
    email: "watch@example.com",
    address: "101 Pine St, Hamlet",
    mobileNo: "456-789-0123",
    shopName: "Gadget Central",
    gstNo: "GST456789",
    category: "Electronics",
    price: 299.99,
    available_quantity: 15,
    rating: 4,
    inventoryStatus: "OUTOFSTOCK",
    image: "smartwatch.jpg"
  },
  {
    id: "5",
    name: "Tablet",
    email: "tablet@example.com",
    address: "202 Maple St, Metropolis",
    mobileNo: "567-890-1234",
    shopName: "Gizmo Store",
    gstNo: "GST567890",
    category: "Electronics",
    price: 499.99,
    available_quantity: 25,
    rating: 3,
    inventoryStatus: "INSTOCK",
    image: "tablet.jpg"
  },
  {
    id: "6",
    name: "Camera",
    email: "camera@example.com",
    address: "303 Birch St, Urbania",
    mobileNo: "678-901-2345",
    shopName: "Shutter Shop",
    gstNo: "GST678901",
    category: "Electronics",
    price: 899.99,
    available_quantity: 10,
    rating: 5,
    inventoryStatus: "LOWSTOCK",
    image: "camera.jpg"
  },
  {
    id: "7",
    name: "Fitness Tracker",
    email: "fittrack@example.com",
    address: "404 Cedar St, Suburbia",
    mobileNo: "789-012-3456",
    shopName: "Fit Gear",
    gstNo: "GST789012",
    category: "Fitness",
    price: 149.99,
    available_quantity: 40,
    rating: 4,
    inventoryStatus: "INSTOCK",
    image: "fitnesstracker.jpg"
  },
  {
    id: "8",
    name: "Bluetooth Speaker",
    email: "speaker@example.com",
    address: "505 Spruce St, Riverside",
    mobileNo: "890-123-4567",
    shopName: "Sound Shop",
    gstNo: "GST890123",
    category: "Accessories",
    price: 99.99,
    available_quantity: 35,
    rating: 4,
    inventoryStatus: "INSTOCK",
    image: "speaker.jpg"
  },
  {
    id: "9",
    name: "Gaming Console",
    email: "console@example.com",
    address: "606 Walnut St, Bayside",
    mobileNo: "901-234-5678",
    shopName: "Game Zone",
    gstNo: "GST901234",
    category: "Electronics",
    price: 499.99,
    available_quantity: 10,
    rating: 5,
    inventoryStatus: "OUTOFSTOCK",
    image: "console.jpg"
  },
  {
    id: "10",
    name: "VR Headset",
    email: "vr@example.com",
    address: "707 Chestnut St, Lakeview",
    mobileNo: "012-345-6789",
    shopName: "Virtual World",
    gstNo: "GST012345",
    category: "Electronics",
    price: 399.99,
    available_quantity: 15,
    rating: 5,
    inventoryStatus: "LOWSTOCK",
    image: "vr.jpg"
  },
  {
    id: "11",
    name: "Laptop Bag",
    email: "bag@example.com",
    address: "808 Fir St, Mountainview",
    mobileNo: "123-456-7890",
    shopName: "Bag Depot",
    gstNo: "GST123456",
    category: "Accessories",
    price: 49.99,
    available_quantity: 50,
    rating: 4,
    inventoryStatus: "INSTOCK",
    image: "laptopbag.jpg"
  },
  {
    id: "12",
    name: "Wireless Mouse",
    email: "mouse@example.com",
    address: "909 Redwood St, Valley",
    mobileNo: "234-567-8901",
    shopName: "Tech Essentials",
    gstNo: "GST234567",
    category: "Accessories",
    price: 29.99,
    available_quantity: 100,
    rating: 4,
    inventoryStatus: "INSTOCK",
    image: "mouse.jpg"
  },
  {
    id: "13",
    name: "Keyboard",
    email: "keyboard@example.com",
    address: "1010 Ash St, Forestview",
    mobileNo: "345-678-9012",
    shopName: "Peripheral Palace",
    gstNo: "GST345678",
    category: "Accessories",
    price: 59.99,
    available_quantity: 70,
    rating: 3,
    inventoryStatus: "INSTOCK",
    image: "keyboard.jpg"
  },
  {
    id: "14",
    name: "Monitor",
    email: "monitor@example.com",
    address: "1111 Cypress St, Seaview",
    mobileNo: "456-789-0123",
    shopName: "Display Center",
    gstNo: "GST456789",
    category: "Electronics",
    price: 299.99,
    available_quantity: 25,
    rating: 4,
    inventoryStatus: "INSTOCK",
    image: "monitor.jpg"
  },
  {
    id: "15",
    name: "Webcam",
    email: "webcam@example.com",
    address: "1212 Dogwood St, Hilltop",
    mobileNo: "567-890-1234",
    shopName: "Camera Corner",
    gstNo: "GST567890",
    category: "Electronics",
    price: 79.99,
    available_quantity: 45,
    rating: 4,
    inventoryStatus: "INSTOCK",
    image: "webcam.jpg"
  }
];

export const sampleProducts = [
  {
    id: "1",
    name: "Laptop",
    available_quantity: 20,
    discount: 10, // Example discount in percentage
    tax: 18, // Example tax in percentage
    description: "A high-performance laptop suitable for all purposes.",
    selling_price: 999.99,
    cost_price: 850.0, // Example cost price
    image: "laptop.jpg"
  },
  {
    id: "2",
    name: "Smartphone",
    available_quantity: 50,
    discount: 5, // Example discount in percentage
    tax: 12, // Example tax in percentage
    description: "A latest model smartphone with all advanced features.",
    selling_price: 699.99,
    cost_price: 600.0, // Example cost price
    image: "smartphone.jpg"
  },
  {
    id: "3",
    name: "Headphones",
    available_quantity: 30,
    discount: 15, // Example discount in percentage
    tax: 10, // Example tax in percentage
    description: "Noise-canceling headphones with superior sound quality.",
    selling_price: 199.99,
    cost_price: 160.0, // Example cost price
    image: "headphones.jpg"
  },
  {
    id: "4",
    name: "Smartwatch",
    available_quantity: 15,
    discount: 20, // Example discount in percentage
    tax: 18, // Example tax in percentage
    description: "A smartwatch with fitness tracking and notifications.",
    selling_price: 299.99,
    cost_price: 250.0, // Example cost price
    image: "smartwatch.jpg"
  },
  {
    id: "5",
    name: "Tablet",
    available_quantity: 25,
    discount: 8, // Example discount in percentage
    tax: 12, // Example tax in percentage
    description: "A versatile tablet for work and entertainment.",
    selling_price: 499.99,
    cost_price: 400.0, // Example cost price
    image: "tablet.jpg"
  },
  {
    id: "6",
    name: "Camera",
    available_quantity: 10,
    discount: 12, // Example discount in percentage
    tax: 18, // Example tax in percentage
    description: "A professional camera with high resolution and features.",
    selling_price: 899.99,
    cost_price: 750.0, // Example cost price
    image: "camera.jpg"
  },
  {
    id: "7",
    name: "Fitness Tracker",
    available_quantity: 40,
    discount: 7, // Example discount in percentage
    tax: 5, // Example tax in percentage
    description: "A fitness tracker with heart rate monitoring and GPS.",
    selling_price: 149.99,
    cost_price: 120.0, // Example cost price
    image: "fitnesstracker.jpg"
  },
  {
    id: "8",
    name: "Bluetooth Speaker",
    available_quantity: 35,
    discount: 10, // Example discount in percentage
    tax: 15, // Example tax in percentage
    description: "A portable Bluetooth speaker with deep bass and clarity.",
    selling_price: 99.99,
    cost_price: 80.0, // Example cost price
    image: "speaker.jpg"
  },
  {
    id: "9",
    name: "Gaming Console",
    available_quantity: 10,
    discount: 5, // Example discount in percentage
    tax: 18, // Example tax in percentage
    description: "A high-performance gaming console for serious gamers.",
    selling_price: 499.99,
    cost_price: 450.0, // Example cost price
    image: "console.jpg"
  },
  {
    id: "10",
    name: "VR Headset",
    available_quantity: 15,
    discount: 15, // Example discount in percentage
    tax: 18, // Example tax in percentage
    description: "A virtual reality headset for immersive experiences.",
    selling_price: 399.99,
    cost_price: 350.0, // Example cost price
    image: "vr.jpg"
  },
  {
    id: "11",
    name: "Laptop Bag",
    available_quantity: 50,
    discount: 20, // Example discount in percentage
    tax: 5, // Example tax in percentage
    description: "A durable and stylish laptop bag for daily use.",
    selling_price: 49.99,
    cost_price: 40.0, // Example cost price
    image: "laptopbag.jpg"
  },
  {
    id: "12",
    name: "Wireless Mouse",
    available_quantity: 100,
    discount: 5, // Example discount in percentage
    tax: 8, // Example tax in percentage
    description: "A wireless mouse with ergonomic design and precision.",
    selling_price: 29.99,
    cost_price: 20.0, // Example cost price
    image: "mouse.jpg"
  },
  {
    id: "13",
    name: "Keyboard",
    available_quantity: 70,
    discount: 10, // Example discount in percentage
    tax: 8, // Example tax in percentage
    description: "A mechanical keyboard with backlighting and fast response.",
    selling_price: 59.99,
    cost_price: 50.0, // Example cost price
    image: "keyboard.jpg"
  },
  {
    id: "14",
    name: "Monitor",
    available_quantity: 25,
    discount: 7, // Example discount in percentage
    tax: 18, // Example tax in percentage
    description: "A 4K monitor with stunning display quality.",
    selling_price: 299.99,
    cost_price: 250.0, // Example cost price
    image: "monitor.jpg"
  },
  {
    id: "15",
    name: "Webcam",
    available_quantity: 45,
    discount: 8, // Example discount in percentage
    tax: 12, // Example tax in percentage
    description: "A HD webcam with clear video and microphone.",
    selling_price: 79.99,
    cost_price: 60.0, // Example cost price
    image: "webcam.jpg"
  }
];
