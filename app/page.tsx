'use client';
import HomeAccordian from '@/components/Accordian/HomeAccordian';
import DiscoverSection from './DiscoverSection';
import HeadingSection from './HeadingSection';
import InformationSection from './InformationSection';
import SubInformationSection from './SubInformationSection';
import UsersInfo from './UsersInfo';
import Faq from './Faq';
const Home = () => {
	return (
		<>
			<HeadingSection />
			<SubInformationSection />
			<InformationSection />
			<DiscoverSection />
			<HomeAccordian />
			<UsersInfo />
			<Faq />
		</>
	);
};

export default Home;
