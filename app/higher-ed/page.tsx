'use client';

import AppFeatureList from '../../components/AppFeatureList/AppFeatureList';
//import InfiniteCarousel from "../Home/InfiniteCarousel";

//import DemoPicturesCarousal from "../../components/DemoPicturesCarousal/DemoPicturesCarousal";
import HEdBanner from '../../components/HEdBanner/HEdBanner';
import HigherEdMidSection from './HigherEdMidSection';
const HigherEducation = () => {
	return (
		<>
			<HEdBanner />
			<HigherEdMidSection />
			<AppFeatureList />
		</>
	);
};

export default HigherEducation;
