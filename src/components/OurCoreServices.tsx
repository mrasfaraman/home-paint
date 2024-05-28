import Image from "next/image"
import Link from "next/link"

const services = [
    {
        image: "/interior.jpg",
        alt: "Interior Painting",
        title: "Interior Painting",
        description: "We offer professional interior painting for residential and commercial spaces. Whether you need one room refreshed or a full home renovation, our experienced painters will prepare surfaces and apply high-quality paints and coatings with precision. You can trust us to transform the look of your interior with flawless finishes."
    },
    {
        image: "/exterior.jpg",
        alt: "Exterior Painting",
        title: "Exterior Painting",
        description: "Protect and beautify the outside of your home or business with our exterior painting services. Our team prepares all surfaces thoroughly before applying top-grade paint engineered to withstand weathering. You can rely on our attention to detail for durable, long-lasting finishes that enhance your property's appearance."
    },
    {
        image: "/doorpolish.jpg",
        alt: "Door Polish",
        title: "Door Polish",
        description: "Give your doors a gleaming refresh with our polishing services. Whether made of wood, metal or fiber, we'll scrub away dirt and deeply condition surfaces. You'll love how our professional techniques transforms tired doors into stunning features that attract admiration."
    },
    {
        image: "/tileflooring.jpg",
        alt: "Tile Flooring",
        title: "Tile Flooring",
        description: "Whether you need backsplashes, bathrooms or large commercial floors, our team of tile experts can complete any flooring project. Our licensed tilers skillfully cut and lay each tile, ensuring flush seams. You can transform any interior floor space through our precision installation services."
    },
];

const ServiceItem = ({ image, alt, title, description }: any) => (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden 
        hover:shadow-xl hover:shadow-black/30 rounded-lg hover:-translate-y-3
        transition-all duration-500 transform-gpu">
        <div className="h-96 w-80">
            <Image
                className="h-full w-full object-cover transition-transform duration-500 
          group-hover:rotate-3 group-hover:scale-125"
                src={image}
                alt={alt}
                width={1000}
                height={1000}
            />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black 
        group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-start justify-center 
        px-9 text-left transition-all duration-500 group-hover:translate-y-0">
            <div className="flex items-center mb-2 group-hover:opacity-100">
                <h1 className="font-['Calibri'] text-2xl text-white ml-2">
                    {title}
                </h1>
            </div>
            <p className="mb-3 pt-2 text-base text-left text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {description}page
            </p>
        </div>
    </div>
);





const OurCoreServices = () => {
    return (
        <>
            <div className="flex mb-5 items-center justify-center">
                <div>
                    <h2 className="mt-5 text-5xl text-center font-sans lg:mb-20 lg:font-bold leading-[1.15] text-[#f5f5f5] sm:text-6xl">
                        Our Core Services
                    </h2>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <ServiceItem key={index} {...service} />
                    ))}
                </div>
            </div>
            <div className="flex mb-5 sm:mt-5 md:mt-5 items-center justify-center lg:mt-20">
                <Link href="/services">
                    <button className="relative border-2 border-[#fcb040] bg-transparent py-2.5 px-5 font-medium uppercase 
                    text-[#fcb040] transition-all before:absolute before:left-0 before:top-0 before:-z-10 before:h-full 
                    before:w-full before:origin-top-left before:scale-x-0 before:bg-[#fcb040] before:transition-transform 
                    before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 
                    rounded-lg duration-500 transform hover:-translate-y-1">
                        View More &rarr;
                    </button>
                </Link>
            </div>
        </>
    )
}

export default OurCoreServices
