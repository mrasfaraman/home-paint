import Image from "next/image"
//Electrical Works
import electrical1 from "../../../public/electrical1.jpg"
import electrical2 from "../../../public/electrical2.jpeg"
import electrical3 from "../../../public/electrical3.jpeg"
import electrical4 from "../../../public/electrical4.jpg"
import electrical5 from "../../../public/electrical5.jpeg"
//AC Ducts maintenance and cleaning services
import ac1 from "../../../public/AC Duct 1.jpg"
import ac2 from "../../../public/AC Duct 2.jpg"
import ac3 from "../../../public/AC Duct 3.jpg"
import ac4 from "../../../public/AC Duct 4.jpg"
import ac5 from "../../../public/AC Duct 5.jpg"
import ac6 from "../../../public/AC Duct 6.jpg"
import ac7 from "../../../public/AC Duct 7.jpg"
//Door Polish & Spray Painting
import doorPolish1 from "../../../public/Door Polish 1.webp"
import doorPolish2 from "../../../public/Door Polish 2.jpg"
import doorPolish3 from "../../../public/Door Polish 3.jpg"
import doorPolish4 from "../../../public/Door Polish 4.jpg"
import doorPolish5 from "../../../public/Door Polish 5.jpg"
import doorPolish6 from "../../../public/Door Polish 6.jpg"
import doorPolish7 from "../../../public/Door Polish 7.jpg"
import doorPolish8 from "../../../public/Door Polish 8.jpeg"
import doorPolish9 from "../../../public/Door Polish 9.jpeg"
import doorPolish10 from "../../../public/Door Polish 10.jpg"
//Glass Works
import glass1 from "../../../public/Glass1.jpeg"
import glass2 from "../../../public/Glass2.jpeg"
import glass3 from "../../../public/Glass3.jpeg"
import glass4 from "../../../public/Glass4.jpeg"
import glass5 from "../../../public/Glass5.jpeg"
import glass6 from "../../../public/Glass6.jpeg"
import glass7 from "../../../public/Glass7.jpeg"
import glass8 from "../../../public/Glass8.jpeg"
import glass9 from "../../../public/Glass9.jpeg"
//Interior & Exterior Painting
import painting1 from "../../../public/painting1.jpeg"
import painting2 from "../../../public/painting2.jpeg"
import painting3 from "../../../public/painting3.jpeg"
import painting4 from "../../../public/painting4.jpeg"
import painting5 from "../../../public/painting5.jpeg"
import painting6 from "../../../public/painting6.jpeg"
import painting7 from "../../../public/painting7.jpeg"
import painting8 from "../../../public/painting8.jpeg"
import painting9 from "../../../public/painting9.jpeg"
import painting10 from "../../../public/painting10.jpeg"
import painting12 from "../../../public/painting11.jpeg"
import painting13 from "../../../public/painting12.jpeg"
import painting14 from "../../../public/painting13.jpeg"
import painting15 from "../../../public/painting14.jpeg"
import painting11 from "../../../public/painting15.jpeg"





const articleData = [
    {
        image: "/electrical1.jpg",
        title: 'Maintaining A Beautiful Home With Kids',
    },
    {
        image: electrical2,
        title: 'Know When To Prime Before You Paint',
    },
    {
        image: electrical3,
        title: 'House Painting',
    },
    {
        image: electrical4,
        title: 'House Painting',
    },
    {
        image: electrical5,
        title: 'House Painting',
    },
    {
        image: ac1,
        title: 'House Painting',
    },
    {
        image: ac2,
        title: 'House Painting',
    },
    {
        image: ac3,
        title: 'House Painting',
    },
    {
        image: ac4,
        title: 'House Painting',
    },
    {
        image: ac5,
        title: 'House Painting',

    },
    {
        image: ac6,
        title: 'House Painting',
    },
    {
        image: ac7,
        title: 'House Painting',
    },
    {
        image: doorPolish1,
        title: 'House Painting',
    },
    {
        image: doorPolish2,
        title: 'House Painting',
    },
    {
        image: doorPolish3,
        title: 'House Painting',
    },
    {
        image: doorPolish4,
        title: 'House Painting',
    },
    {
        image: doorPolish5,
        title: 'House Painting',
    },
    {
        image: doorPolish6,
        title: 'House Painting',
    },
    {
        image: doorPolish7,
        title: 'House Painting',
    },
    {
        image: doorPolish8,
        title: 'House Painting',
    },
    {
        image: doorPolish9,
        title: 'House Painting',
    },
    {
        image: doorPolish10,
        title: 'House Painting',
    },
    {
        image: glass1,
        title: 'House Painting',
    },
    {
        image: glass2,
        title: 'House Painting',
    },
    {
        image: glass3,
        title: 'House Painting',
    },
    {
        image: glass4,
        title: 'House Painting',
    },
    {
        image: glass5,
        title: 'House Painting',
    },
    {
        image: glass6,
        title: 'House Painting',
    },
    {
        image: glass7,
        title: 'House Painting',
    },
    {
        image: glass8,
        title: 'House Painting',
    },
    {
        image: glass9,
        title: 'House Painting',
    },
    {
        image: painting1,
        title: 'House Painting',
    },
    {
        image: painting2,
        title: 'House Painting',
    },
    {
        image: painting3,
        title: 'House Painting',
    },
    {
        image: painting4,
        title: 'House Painting',
    },
    {
        image: painting5,
        title: 'House Painting',
    },
    {
        image: painting6,
        title: 'House Painting',
    },
    {
        image: painting7,
        title: 'House Painting',
    },
    {
        image: painting8,
        title: 'House Painting',
    },
    {
        image: painting9,
        title: 'House Painting',
    },
    {
        image: painting10,
        title: 'House Painting',
    }, {
        image: painting11,
        title: 'House Painting',
    },
    {
        image: painting12,
        title: 'House Painting',
    },
    {
        image: painting13,
        title: 'House Painting',
    },
    {
        image: painting14,
        title: 'House Painting',
    },
    {
        image: painting15,
        title: 'House Painting',
    },
    {
        image: painting2,
        title: 'House Painting',
    },

];

const GalleryCard = ({ image, title}: any) => (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden 
                       hover:shadow-xl hover:shadow-black/30 rounded-lg hover:-translate-y-3
                       transition-all duration-500 transform-gpu">
        <div className="h-96 w-80">
            <Image
                className="h-full w-full object-cover transition-transform duration-500 
                         group-hover:rotate-3 group-hover:scale-125"
                src={image}
                width={1000}
                height={1000}
                alt={title}
            />
        </div>
    </div>
);



export default function Home() {
    return (
        <>
            <br />
            <br />
            <div className="flex min-h-screen items-center justify-center mt-12 mb-4">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {articleData.map((gallery, index) => (
                       <GalleryCard key={index} {...gallery} />
                    ))}
                </div>
            </div>
        </>
    )
}