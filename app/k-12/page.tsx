import { useRef } from 'react';
import K12Banner from '../../components/K12Banner/K12Banner';
//import DemoPictures from "../../components/DemoPicture/DemoPictures";
import AppFeatureList from '../../components/AppFeatureList/AppFeatureList';
import InfiniteCarousel from '../InfiniteCarousel';
import K12MidSection from './K12MidSection';

//import DemoPicturesCarousal from "../../components/DemoPicturesCarousal/DemoPicturesCarousal";

const K12Page = () => {
	const appFeatureListRef = useRef(null);

	const scrollToFeatures = () => {
		if (appFeatureListRef.current) {
			const topPosition = appFeatureListRef.current.getBoundingClientRect().top;
			window.scrollTo({
				top: topPosition,
				behavior: 'smooth',
			});
		}
	};
	return (
		<>
			<K12Banner scrollToFeatures={scrollToFeatures} />
			<K12MidSection />
			<div ref={appFeatureListRef}>
				<AppFeatureList />
			</div>
			<InfiniteCarousel />
		</>
	);
};

export default K12Page;
