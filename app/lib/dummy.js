
import { connectToDB } from "./utils";


async function createDummyData() {
    const dummyProducts = [
        {
            title: "Red T-Shirt",
            desc: "A comfortable red t-shirt made from 100% cotton.",
            price: 19.99,
            stock: 100,
            img: "https://example.com/red-tshirt.jpg",
            color: "Red",
            size: "L"
        },
        {
            title: "Blue Jeans",
            desc: "Stylish blue jeans with a slim fit design.",
            price: 49.99,
            stock: 50,
            img: "https://example.com/blue-jeans.jpg",
            color: "Blue",
            size: "32"
        },
        {
            title: "Black Hoodie",
            desc: "Warm and cozy black hoodie with a front pocket.",
            price: 39.99,
            stock: 75,
            img: "https://example.com/black-hoodie.jpg",
            color: "Black",
            size: "M"
        },
        {
            title: "White Sneakers",
            desc: "Classic white sneakers that go well with any outfit.",
            price: 59.99,
            stock: 40,
            img: "https://example.com/white-sneakers.jpg",
            color: "White",
            size: "10"
        },
        {
            title: "Green Cap",
            desc: "A stylish green cap with an adjustable strap.",
            price: 14.99,
            stock: 200,
            img: "https://example.com/green-cap.jpg",
            color: "Green",
            size: "One Size"
        }
    ];

    try {
        connectToDB();
        await Product.insertMany(dummyProducts);
        console.log('Dummy data inserted successfully');
    } catch (error) {
        console.error('Error inserting dummy data:', error);
    }
}
module.exports=createDummyData;