import { USER_REVIEWS } from "@/config/constant";
import Image from "next/image";

export const ReviewCards = () => {

    return (
        <div className="container my-24 px-6 mx-auto">
            <section className="mb-32 text-[#f5f5f5] text-center">
                <h2 className="mb-12 text-5xl text-center font-sans leading-[1.15] sm:text-6xl">Testimonials</h2>
                <div className="grid md:grid-cols-3 gap-6 xl:gap-x-12 px-12 py-5" >
                    {USER_REVIEWS.map((testimonial, index) => (
                        <div className="mb-6 lg:mb-0" key={index} >
                            <div className="relative block bg-[#111111]/30 rounded-lg shadow-lg elevated-shadow
                            transition duration-500 ease-in-out hover:-translate-y-1 hover:cursor-pointer mb-10">
                                <div className="p-6">
                                    <h5 className="text-lg font-bold mb-2 text-[#f5f5f5]">{testimonial.name}</h5>
                                    <h6 className="font-medium text-[#fcb040] mb-4">{testimonial.location}</h6>
                                    <p className="text-base text-[#7b7b7b]">{testimonial.review}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
