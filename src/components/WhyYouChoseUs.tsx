import Card from "./Cards";
import pulse from "../../public/pulse.png";
import quality from "../../public/quality.png";
import reliable from "../../public/signal.png";
import timely from "../../public/timely.png";



const WhatWeDo = () => {
    return (
        <>
            <main className="min-h-screen flex flex-col justify-center items-center text-center m-6 ">
            <div>
                    <p className="mt-5 text-5xl text-center font-sans leading-[1.15] text-[#f5f5f5] sm:text-6xl">
                        Why You Choose Us?
                    </p>
                </div>
                <div className="text-[#7b7b7b] mt-5 text-lg text-center sm:text-xl max-w-2xl">
                    <p>
                        Our services are defined by quality and commitment.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center lg:m-10 my-10 gap-4">
                    <div className="flex justify-center items-center">
                        <Card
                            title="Reliablity"
                            content="Our main goal is to create products that do not fail. We still strive to 
                            create the most quality products that will not fail in the future."
                            borderColor="cyan"
                            Icon={reliable}
                            iconAlt="reliable"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4">
                        <Card
                            title="Timely Work"
                            content="We always prepare the Project Development schedule to ensure that the project 
                            is delivered on time and with all specifications met."
                            borderColor="red"
                            Icon={timely}
                            iconAlt=""
                        />

                        <Card
                            title="Quality Finish"
                            content="We believe that Quality is critical to delivering a product on time and at 
                            the appropriate level of quality."
                            borderColor="orange"
                            Icon={quality}
                            iconAlt=""
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <Card
                            title="Best Support"
                            content="A Support Team that is known for being one of the most experienced, polite, and trustworthy 
                            in the business is looking after you. Real people are available to help you with any problem, at any time 24/7."
                            borderColor="blue"
                            Icon={pulse}
                            iconAlt=""
                        />
                    </div>
                </div>
            </main>
        </>
    )
}

export default WhatWeDo