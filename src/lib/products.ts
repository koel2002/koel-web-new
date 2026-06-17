
export interface Product {
    id: number;
    name: string;
    description: string;
    images: { url: string; hint: string }[];
    category: string;
    tags: string[];
    sizes: string[];
    colors: { name: string; hex: string }[];
    regularPrice?: number;
    currentPrice: number;
    isBulkAvailable: boolean;
    specialNote?: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Majdi T-Shirt",
        description: `Soft | Breathable | Comfortable
Made with 95% cotton and 5% spandex for a perfect fit.
Choose your size & color before stock finishes.`,
        images: [
            { url: "https://lh3.googleusercontent.com/d/1-vuU77EFC5j5efMZpW0ULSebmitvd7J_", hint: "white t-shirt" },
            { url: "https://lh3.googleusercontent.com/d/12aPk2yC3PhrlZ3JPTyS8dvFjFNWn0WTh", hint: "red t-shirt" },
            { url: "https://lh3.googleusercontent.com/d/1bJ4lL3fDPQLZPiDvMy82VgV13yvjBvKQ", hint: "black t-shirt" },
        ],
        category: "T-Shirts",
        tags: ["T-Shirt", "Men", "Summer", "Discount"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: [
            { name: "White", hex: "#FFFFFF" },
            { name: "Black", hex: "#000000" },
            { name: "Red", hex: "#FF0000" },
        ],
        regularPrice: 800,
        currentPrice: 550,
        isBulkAvailable: true,
        specialNote: "Call for bulk ordering if needed.",
    },
    {
        id: 2,
        name: "Flannel Shirts for MEN",
        description: `𝐄𝐱𝐩𝐨𝐫𝐭 Item | Winter Collection
- Flannel
- Very warm & soft
- Breathable fabric
- Long Roll up sleeve`,
        images: [
            { url: "https://lh3.googleusercontent.com/d/1rQtrWcqUXJRwPWFXU8szlB0BM0QBpwwy", hint: "magenta flannel shirt" },
            { url: "https://lh3.googleusercontent.com/d/1u1sgbFncEMccIdaBa714DkNSL7_1MWov", hint: "gray flannel shirt" },
            { url: "https://lh3.googleusercontent.com/d/168tLfGCJMOOrirSoStBlb4mg8fRBLOZC", hint: "flannel shirt detail" },
            { url: "https://lh3.googleusercontent.com/d/1joiG2kT2yU7Kv1GFqqVmHRHyFS4PmzQX", hint: "flannel shirt model" },
        ],
        category: "Shirts",
        tags: ["Shirt", "Men", "Winter", "Export Quality"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: [
            { name: "Magenta", hex: "#FF00FF" },
            { name: "Gray", hex: "#808080" },
        ],
        regularPrice: 1100,
        currentPrice: 850,
        isBulkAvailable: false,
    },
    {
        id: 3,
        name: "Original U.S. Polo Assn. Sweater",
        description: `Winter Sweater Collection!
- 100% Cotton Fabric
- Crew Neck
- Long Sleeve`,
        images: [
            { url: "https://lh3.googleusercontent.com/d/11zkKZF2tjZaQc2lTdqwOTRqFRH1IoTzj", hint: "navy sweater" },
            { url: "https://lh3.googleusercontent.com/d/16-PFwEAfQ3frD0uqwnIiaS2tk-1cNWYY", hint: "royal blue sweater" },
            { url: "https://lh3.googleusercontent.com/d/1N0IXKGxuJa7kU1dGjZ5nBBoKbXroBLCF", hint: "verde green sweater" },
            { url: "https://lh3.googleusercontent.com/d/1t_vp2x0Y7JJ-Ye7RgCl-ZRzXCs-cO0dt", hint: "black sweater" },
            { url: "https://lh3.googleusercontent.com/d/11s_HQXXGf7HHMJKREocWEbM6gndKE0Dg", hint: "olive sweater" },
        ],
        category: "Sweaters",
        tags: ["Sweater", "Men", "Winter", "Export Quality"],
        sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
        colors: [
            { name: "Navy", hex: "#000080" },
            { name: "Royal Blue", hex: "#4169E1" },
            { name: "Verde", hex: "#008000" },
            { name: "Black", hex: "#000000" },
            { name: "Olive", hex: "#808000" },
        ],
        regularPrice: 1100,
        currentPrice: 1100,
        isBulkAvailable: false,
        specialNote: "Exclusive Item",
    },
    {
        id: 4,
        name: "The North Face Hoodie",
        description: `Men Drew Peak Pullover Hoodie
𝗘𝗺𝗯𝗿𝗼𝗶𝗱𝗲𝗿𝗲𝗱 𝗟𝗼𝗴𝗼 on chest
- The Drew Peak hoodie by The North Face promises maximum comfort without sacrificing on style thanks to the Dome graphic to the chest and wear-with-anything silhouette.
- Kangaroo pouch pocket to the front
- Adjustable drawcord hood
- Cuffed sleeves and hem`,
        images: [
            { url: "https://lh3.googleusercontent.com/d/13iwzcJijGIzO8Xso3TnIw5GfeaSMTXxm", hint: "cream hoodie" },
            { url: "https://lh3.googleusercontent.com/d/1UtJHp3JaQjpQrse9oqRxwoJKaNaisV6A", hint: "orange hoodie" },
            { url: "https://lh3.googleusercontent.com/d/1WoYWK1pKVpu0c40Lu2at1P9HKMfHrXfE", hint: "black hoodie" },
            { url: "https://lh3.googleusercontent.com/d/1ogv31CAF8EQ7b3r7jUNwns7Aa4DTYB3v", hint: "navy hoodie" },
        ],
        category: "Hoodies",
        tags: ["Hoodie", "Men", "Women", "Winter", "Export Quality"],
        sizes: ["S", "M", "L", "XL"],
        colors: [
            { name: "Cream", hex: "#FFFDD0" },
            { name: "Orange", hex: "#FFA500" },
            { name: "Black", hex: "#000000" },
            { name: "Navy", hex: "#000080" },
            { name: "White", hex: "#FFFFFF" },
        ],
        regularPrice: 1000,
        currentPrice: 1000,
        isBulkAvailable: false,
    },
    {
        id: 5,
        name: "Columbia Padded Winter Jacket",
        description: `Padded | Hoodie | Long Sleeve
𝐂𝐡𝐨𝐨𝐬𝐞 your 𝐬𝐢𝐳𝐞 & 𝐜𝐨𝐥𝐨𝐫 before stock finishes.`,
        images: [
            { url: "https://lh3.googleusercontent.com/d/15HupZ5PJoGOUZcr2qQhPZBpqYtDsVfw_", hint: "black and navy jacket" },
            { url: "https://lh3.googleusercontent.com/d/1XHvCsOQVetiaiQpC7VvGTxVI-lGnSSjQ", hint: "black and silver jacket" },
            { url: "https://lh3.googleusercontent.com/d/1vmmp_Io5f0v4otdXYtTCJgBG_ZuTbjyX", hint: "black and blue jacket" },
        ],
        category: "Jackets",
        tags: ["Jacket", "Men", "Women", "Winter", "Export Quality"],
        sizes: ["S", "M", "L", "XL"],
        colors: [
            { name: "Black + Navy Blue", hex: "#000000" },
            { name: "Black + Silver", hex: "#000000" },
            { name: "Black + Blue", hex: "#000000" },
        ],
        regularPrice: 2000,
        currentPrice: 1800,
        isBulkAvailable: false,
    },
    {
        id: 6,
        name: "Colmar Hoodie",
        description: `Terry Fabric | Hoodie | Long Sleeve | Winter wear
𝐂𝐡𝐨𝐨𝐬𝐞 your 𝐬𝐢𝐳𝐞 & 𝐜𝐨𝐥𝐨𝐫 before stock finishes.`,
        images: [
            { url: "https://lh3.googleusercontent.com/d/1cUDHaxAQ5mzrWXwcxLg34E0gfhIfDbo_", hint: "olive hoodie" },
            { url: "https://lh3.googleusercontent.com/d/1lsv4W3mAzvffcu0l1KlkzNWY5o-uLU28", hint: "black hoodie" },
            { url: "https://lh3.googleusercontent.com/d/1xmWBaq20fXr2PMT9D2pZ8D4FR20OhKVr", hint: "gray and red hoodie" },
        ],
        category: "Hoodies",
        tags: ["Hoodie", "Men", "Women", "Winter", "Export Quality", "Discount"],
        sizes: ["S", "M", "L", "XL"],
        colors: [
            { name: "Olive", hex: "#808000" },
            { name: "Black", hex: "#000000" },
            { name: "Gray", hex: "#808080" },
            { name: "Red", hex: "#FF0000" },
        ],
        regularPrice: 800,
        currentPrice: 700,
        isBulkAvailable: false,
    },
    {
        id: 7,
        name: "Original Gamor Long Neck Sweater",
        description: `𝐄𝐱𝐩𝐨𝐫𝐭 Item | Winter Collection
- 50% Cotton
- 50% wool
- Long Sleeve with long V-Neck
30% Discount. Limited Stock.`,
        images: [
            { url: "https://lh3.googleusercontent.com/d/1ZwFf751DFkx0pSGxRb2Fj6sO5EoFbcD1", hint: "black long neck sweater" },
            { url: "https://lh3.googleusercontent.com/d/1cbAY4i9Bgl35E5FV0q-xPR-uEIo-zS0A", hint: "white long neck sweater" },
            { url: "https://lh3.googleusercontent.com/d/1vMjYwU3F2-7sDqShiw7rDDcdzA-F3d9h", hint: "black sweater detail" },
            { url: "https://lh3.googleusercontent.com/d/1zjE2DcI9hqqXKnxPBtaVVH6PXREr2wVU", hint: "white sweater detail" },
        ],
        category: "Sweaters",
        tags: ["Sweater", "Men", "Women", "Winter", "Export Quality", "Discount"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: [
            { name: "Black", hex: "#000000" },
            { name: "White", hex: "#FFFFFF" },
        ],
        regularPrice: 800,
        currentPrice: 700,
        isBulkAvailable: false,
    },
    {
        id: 8,
        name: "Original Gamor Half sleeve Sweater",
        description: `𝐄𝐱𝐩𝐨𝐫𝐭 Item | Winter Collection
- 80% Cotton
- 20% Silk
- See through design
- Half Sleeve with long V-Neck
30% Discount. Limited Stock.`,
        images: [
            { url: "https://lh3.googleusercontent.com/d/11TB6AeIMPjGEsA_WGgOZGhbFOTTCxMnN", hint: "black half sleeve sweater" },
            { url: "https://lh3.googleusercontent.com/d/1Pc2ljBjGauWXFl1olIJpZVyNTsuDXpLh", hint: "white half sleeve sweater" },
            { url: "https://lh3.googleusercontent.com/d/1qOmZgcgjF3ImiF5n8m7P-mzCX32aC-4R", hint: "sweater texture" },
        ],
        category: "Sweaters",
        tags: ["Sweater", "Men", "Women", "Winter", "Export Quality", "Discount"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: [
            { name: "Black", hex: "#000000" },
            { name: "White", hex: "#FFFFFF" },
        ],
        regularPrice: 800,
        currentPrice: 600,
        isBulkAvailable: false,
    },
    {
        id: 9,
        name: "Timberland T-Shirt",
        description: `Soft | Breathable | Comfortable
95% cotton 5% spandex
𝐂𝐡𝐨𝐨𝐬𝐞 your 𝐬𝐢𝐳𝐞 & 𝐜𝐨𝐥𝐨𝐫 before stock finishes.`,
        images: [
            { url: "https://lh3.googleusercontent.com/d/1BtK2lU01ZkEJM0L9amNPyGfXOK-ky3Yo", hint: "gray t-shirt" },
            { url: "https://lh3.googleusercontent.com/d/1JJ3m6sVZnD7n0xMZ4yFCN5PniEsa5JfK", hint: "dark gray t-shirt" },
            { url: "https://lh3.googleusercontent.com/d/1ckPSge3_axALGwQO1iuwmi_yXHkS9cAh", hint: "navy blue t-shirt" },
        ],
        category: "T-Shirts",
        tags: ["T-Shirt", "Men", "Summer", "Export Quality", "Discount"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: [
            { name: "Gray", hex: "#808080" },
            { name: "Dark Gray", hex: "#A9A9A9" },
            { name: "Deep Navy Blue", hex: "#000080" },
        ],
        regularPrice: 1000,
        currentPrice: 750,
        isBulkAvailable: true,
    }
];


export const productCategories = [...new Set(products.map(p => p.category))];
export const allProductTags = [...new Set(products.flatMap(p => p.tags))];


export interface ProductCollection {
    name: string;
    coverImageId: string;
    products: Product[];
}

export const productsByCollection: ProductCollection[] = [
  {
    name: "T-Shirts",
    coverImageId: 'product-tshirt',
    products: products.filter(p => p.category === 'T-Shirts')
  },
  {
    name: "Shirts",
    coverImageId: 'product-shirt',
    products: products.filter(p => p.category === 'Shirts')
  },
  {
    name: "Sweaters",
    coverImageId: 'product-sweater',
    products: products.filter(p => p.category === 'Sweaters')
  },
  {
    name: "Hoodies",
    coverImageId: 'product-hoodie',
    products: products.filter(p => p.category === 'Hoodies')
  },
  {
    name: "Jackets",
    coverImageId: 'product-jacket',
    products: products.filter(p => p.category === 'Jackets')
  },
   {
    name: "Trousers",
    coverImageId: 'product-trousers',
    products: []
  },
];

    