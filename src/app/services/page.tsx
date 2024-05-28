import Image from "next/image"

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
    {
        image: "/plumbing.jpeg",
        alt: "Plumbing Works",
        title: "Plumbing Works",
        description: "From new installations to repairs, our licensed plumbers provide residential and commercial services. We use high quality materials and adhere to all codes to complete any project professionally and ensure problem-free systems. You can rely on our experienced plumbers to keep your plumbing running smoothly."
    },
    {
        image: "/electrical.jpg",
        alt: "Electrical Works",
        title: "Electrical Works",
        description: "We are your full-service electrical contractor for all residential and commercial needs. Our licensed electricians expertly install and service wiring systems, panels and fixtures to code. You can trust our experienced team to complete any electrical project with reliability, safety and precision."
    },
    {
        image: "/gypsum.jpg",
        alt: "Gypsum Partitions",
        title: "Gypsum Partitions",
        description: "Whether for homes or businesses, we expertly install gypsum board partitions and walls. Our team neatly cuts and fits sheets, applying compound for smooth joins. You can rely on our precision and attention to detail for partitions that meet building specifications and transform your space."
    },
    {
        image: "/glass.jpg",
        alt: "Glass Works",
        title: "Glass Works",
        description: "We expertly install sleek glass partitions for offices, as well as enclosures for meeting rooms or therapy spaces. Our team also fits premium folding/sliding glass doors for elegance, security and views. Trust our precise glass work to transform commercial and residential spaces."
    },
    {
        image: "/ac.jpeg",
        alt: "AC Ducts Maintenance and Cleaning",
        title: "AC Ducts Maintenance and Cleaning",
        description: "Keep your AC system performing efficiently year-round with our duct cleaning and maintenance services. We thoroughly clean and sanitize ducts, ensuring optimal airflow. Regular maintenance performed by our experts helps reduce energy costs and prevent unnecessary repairs down the road."
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
                {description}
            </p>
        </div>
    </div>
);

export default function Home() {
    return (
        <section className="w-full flex-center flex-col mb-5">
            <br />
            <br />
            <br />
            <div className="flex flex-col mb-5 items-center justify-center">
                <div>
                    <p className="mt-5 text-5xl text-center font-sans leading-[1.15] text-[#f5f5f5] sm:text-6xl">
                        Our Services
                    </p>
                </div>
                <div className="text-[#7b7b7b] mt-5 text-lg text-center sm:text-xl max-w-2xl">
                    <p>
                        We are doing our very best to provide you with the best possible service.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <ServiceItem key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    )
}
