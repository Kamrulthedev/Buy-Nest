import Heading from "@/Heading/Heading";



const demoProducts = [
    { id: 1, name: "Stretch Cotton Skinny Pant", img: "https://i.ibb.co.com/jVwtGKT/image.png" },
    { id: 2, img: "https://i.ibb.co.com/ftdJY1B/image.png" },
    { id: 4, img: "https://i.ibb.co.com/hRfSKxk/image.png" },
    { id: 5, img: "https://i.ibb.co.com/ZGzhqbG/image.png" },
];

const Category = () => {
    return (
        <div className="bg-white py-8 px-4 font-serif">
            <Heading Heading="Shop by Categories">
            </Heading>
            {/* Product Grid */}
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                {/* First Category */}
                <div className="gap-6 bg-gray-200">
                    {demoProducts.slice(0, 1).map((product) => (
                        <div key={product.id} className="relative overflow-hidden group animate__animated animate__fadeInDown">
                            {/* Product Image */}
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full shadow-lg h-[500px] object-cover hover:scale-110 transition-transform"
                            />
                            {/* Button at the bottom center */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                <button className="text-black py-3 px-6 bg-white shadow-lg group-hover:bg-gray-500 group-hover:text-white transition-all">
                                    <span className="group-hover:hidden">Man Shop</span>
                                    <span className="hidden group-hover:inline animate__animated animate__flash">Shop Now ⇨</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second Category */}
                <div className="space-y-[21px]">
                    {demoProducts.slice(1, 3).map((product) => (
                        <div key={product.id} className="bg-gray-200 relative overflow-hidden group animate__animated animate__fadeInDown">
                            {/* Product Image */}
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full shadow-lg h-[240px] object-cover hover:scale-110 transition-transform"
                            />
                            {/* Button at the bottom center */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                <button className="text-black py-3 px-6 bg-white shadow-lg group-hover:bg-gray-500 group-hover:text-white transition-all">
                                    <span className="group-hover:hidden">Man Shop</span>
                                    <span className="hidden group-hover:inline animate__animated animate__flash">Shop Now ⇨</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Third Category */}
                <div className="bg-gray-200">
                    {demoProducts.slice(3, 4).map((product) => (
                        <div key={product.id} className="relative overflow-hidden group animate__animated animate__fadeInDown">
                            {/* Product Image */}
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full shadow-lg h-[500px] object-cover hover:scale-110 transition-transform"
                            />
                            {/* Button at the bottom center */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                <button className="text-black py-3 px-6 bg-white shadow-lg group-hover:bg-gray-500 group-hover:text-white transition-all">
                                    <span className="group-hover:hidden">Man Shop</span>
                                    <span className="hidden group-hover:inline animate__animated animate__flash">Shop Now ⇨</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Category;
