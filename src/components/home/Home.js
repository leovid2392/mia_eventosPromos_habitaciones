import React, { useState, useEffect } from "react";

// import logo_miaBySelina from "../../assets/logo_mia_by_selina.png";
import logo_miaBySelina from "../../assets/logo2.jpg";

import data from "../../data";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

function Home({ showHome, setShowHome }) {
	const [events, setEvents] = useState(data);
	const [index, setIndex] = useState(0);
	const [english, setEnglish] = useState(false)

	useEffect(() => {
		const lastIndex = events.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, events]);

	useEffect(() => {
		let slider = setTimeout(() => {
			setIndex(index + 1);
		}, 4000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);
	const handleLanguage = () => {
		if(english) {
			setEnglish(false)
		} else {
			setEnglish(true)
		}
	}

	const handlePrevBtn = () => {
		setIndex(index - 1);
	};

	const handleNextBtn = () => {
		setIndex(index + 1);
	};

	return (
		<div className='App'>
			<header className='home_header'>
				<figure className='home_logoContainer'>
					<img
						className='home_logo'
						src={logo_miaBySelina}
						alt='mia by selina'
					/>
				</figure>
				<button className='languageBtn' onClick={handleLanguage}>
					{english? `español`: `english`}
				</button>
			</header>
			<section className='slider'>
				{events.map((event, eventIndex) => {
					const { id, url, title, image } = event;
					let position = "nextSlide";

					if (eventIndex === index) {
						position = "activeSlide";
					}
					if (
						eventIndex === index - 1 ||
						(index === 0 && eventIndex === events.length - 1)
					) {
						position = "lastSlide";
					}

					return (
						<article className={position} key={id}>
								<a href={url} target='_blank'>
									<button className='slider_butBtn'>
										<h5>
											{english? `Buy tickets`: `Compra tus boletos`}
										</h5>
									</button>
								</a>
							<figure className='slider_imgContainer'>
								<a className='slider_link' href={url} target='_blank'>
									<img className='slider_img' src={image} alt={title} />
									{/* <div className='slider_buyText'>
										<h5>click me to buy</h5>
									</div> */}
								</a>
							</figure>

							
							{/* <div className='slider_buyText'>
								<button className='slider_prevBtn' onClick={handlePrevBtn}>
									<FaChevronLeft />
								</button>
								<a href={url} target='_blank'>
									<button className='slider_butBtn'>
										<h5>COMPRAR</h5>

									</button>

								</a>
								<button className='slider_nextBtn' onClick={handleNextBtn}>
									<FaChevronRight />
								</button>
							</div> */}
						</article>
					);
				})}
				<button className='slider_prevBtn' onClick={handlePrevBtn}>
					<FaChevronLeft />
				</button>
				<button className='slider_nextBtn' onClick={handleNextBtn}>
					<FaChevronRight />
				</button>
			</section>
			<section>
				
				<button className='home_menuBtn'>
				
					{english? `Events`: `Eventos`}
				</button>

			</section>
		</div>
	);
}

export default Home;
