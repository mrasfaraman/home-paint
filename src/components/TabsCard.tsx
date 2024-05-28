'use client';
import React from 'react'

const TabsCard = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex flex-wrap pr-10">
                <div className="w-full">
                    <p className="mt-5 text-3xl text-left font-sans leading-[0.85] text-[#f5f5f5] sm:text-4xl">
                        Our vision is to become the world&apos;s leading idea-realization company.
                    </p>

                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-[#fcb040] border-b-4 border-[#fcb040]"
                                        : "text-[#7b7b7b] bg-[#111111]/30")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Software House
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-[#fcb040] border-b-4 border-[#fcb040]"
                                        : "text-[#7b7b7b] bg-[#111111]/30")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Marketing Agency
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 3
                                        ? "text-[#fcb040] border-b-4 border-[#fcb040]"
                                        : "text-[#7b7b7b] bg-[#111111]/30")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                E-Commerce
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-[#111111]/30 w-full mb-6 shadow-lg rounded text-[#f5f5f5]">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <p className="font-sans">
                                        <p className="italic ">
                                            Oeovo Technologies continues to grow ever day thanks to the confidence our clients have in us. We cover many industries such as Cloud Data Center, Software Development, financial, business services, consumer products.
                                        </p>
                                        <br />
                                        <p className="font-bold text-[#7b7b7b]">
                                            <span className="text-[#fcb040] mr-2">&#10003;</span>
                                            EXPERIENCE
                                        </p>
                                        With having more than 10 years of experience we handle and develop everything from scratch to something wonderful and that helps you in your business.
                                        <br />
                                        <br />
                                        <p className="font-bold text-[#7b7b7b]">
                                            <span className="text-[#fcb040] mr-2">&#10003;</span>
                                            CREATIVE SERVICE</p>
                                        Oeovo Technologies does not provide just the traditional services but we want our customers to experience something creative and out of the box.
                                        <br />
                                        <br />
                                        <p className="font-bold text-[#7b7b7b]">
                                            <span className="text-[#fcb040] mr-2">&#10003;</span>
                                            We Make it Possible</p>
                                        We are a companay that offers design and build services for you from initial sketches to thefinal construction.
                                    </p>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <p className="font-sans">
                                        <p className="italic ">
                                            We Believe We Are Enablers of People&apos;s Dreams.
                                        </p>
                                        <br />
                                        <p className="font-bold text-[#7b7b7b]">
                                            <span className="text-[#fcb040] mr-2">&#10003;</span>
                                            Relax and let us do it for you!
                                        </p>
                                        We&apos;re an award-winning digital marketing agency in Multan that can help you with your SEO, PPC and SMM ambitions. And how you may ask by creating awesome digital marketing strategies that are fully aligned with your business objectives!
                                        <br />
                                        <br />
                                        <p className="font-bold text-[#7b7b7b]">
                                            <span className="text-[#fcb040] mr-2">&#10003;</span>
                                            Save money!</p>
                                        By working with Oeovo Technologies, one of the leading digital agencies in Multan, you&apos;re sure to get the optimal results you&apos;ve been looking for with the help of our experienced team of digital marketers!
                                        <br />
                                        <br />
                                        <p className="font-bold text-[#7b7b7b]">
                                            <span className="text-[#fcb040] mr-2">&#10003;</span>
                                            Fast results!</p>
                                        As one of the fastest growing digital marketing agencies in Lahore, we are confident in the solutions we offer to our partners.
                                    </p>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <p className="font-sans">
                                        <p className="italic ">
                                            Oeovo Technologies is founded and run by Hamza Nawaz, an ecommerce veteran with experience working at Amazon.com and eBay.
                                        </p>
                                        <br />
                                        <p className="font-bold text-[#7b7b7b]">
                                            <span className="text-[#fcb040] mr-2">&#10003;</span>
                                            THE BUYER AND SELLER EXPERIENCE
                                        </p>
                                        It&apos;s all about the experiences and not the products. We delivers high end buyer and seller practices. Here at Oeovo Technologies our teams work very hard to provide an experience that is second to none.
                                        <br />
                                        <br />
                                        <p className="font-bold text-[#7b7b7b]">
                                            <span className="text-[#fcb040] mr-2">&#10003;</span>
                                            OMNI-CHANNEL EXPERIENCE
                                        </p>
                                        Omni-Channel Engine is a cloud based middleware that simplifies ecommerce through inventory management, order management and make use of business intelligence to maximize sales and profits.
                                        <br />
                                        <br />
                                        <p className="font-bold text-[#7b7b7b]">
                                            <span className="text-[#fcb040] mr-2">&#10003;</span>
                                            MULTI-CHANNEL MARKETING</p>
                                        There are many channels a business can take advantage of in order to reach potential customers. We helps the brands to grow their businesses by integrating traditional and emerging channels.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TabsCard