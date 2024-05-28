'use client';
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import "react-slideshow-image/dist/styles.css";


const Hero = () => {
	const slides = [
		{
			url: 'https://www.bergerpaints.com/blog/wp-content/uploads/2021/02/Dream-home.png',
		},
		{
			url: 'https://www.bergerpaints.com/colour-magazine/Upload/Posting/Image/colour-story-bnr-august21.jpg',
		},
		{
			url: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
		{
			url: 'https://thepropainters.com/wp-content/uploads/2021/12/dis-cephe-boya-1536x1024.jpg',
		},
		{
			url: 'https://images.pexels.com/photos/8961401/pexels-photo-8961401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex: any) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div className='max-w-full h-[780px] w-full m-auto py-16 relative group'>
			<div
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				className='w-full h-full bg-center bg-cover duration-500'
			></div>
			{/* Left Arrow */}
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<BsChevronCompactLeft onClick={prevSlide} size={30} />
			</div>
			{/* Right Arrow */}
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
				<BsChevronCompactRight onClick={nextSlide} size={30} />
			</div>
			<div className='flex top-4 justify-center py-2'>
				{slides.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
						className='text-2xl cursor-pointer'
					>
						<RxDotFilled />
					</div>
				))}
			</div>
		</div>


	)
}

export default Hero