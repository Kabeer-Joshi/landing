import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { logos } from '@/data/data';
import { Box, Flex, Heading, VStack } from '@chakra-ui/react';
import Image from 'next/image';

const InfiniteCarousel = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 6,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 6,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2,
		},
	};

	return (
		<VStack pb={10}>
			<Heading
				fontSize={{ base: '2xl', md: '4xl' }}
				color={'brand.100'}
				textAlign="center"
				mb={8}>
				Our Schools
			</Heading>
			<Flex justify={'center'} align={'center'}>
				{logos.map((logo, index) => (
					<Box key={index} p={4}>
						<Image
							alt="logo"
							src={logo}
							style={{
								marginLeft: 'auto',
								marginRight: 'auto',
								display: 'flex',
								justifyContent: 'center',
							}}
						/>
					</Box>
				))}
			</Flex>
			{/* <Carousel
        pauseOnHover={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        customTransition="transform 2000ms linear"
        transitionDuration={2000}
        arrows={false}
        style={{ transition: 'transform 1s linear' }}
      >
        {logos.map((logo, index) => (
          <Box key={index} p={4}>

            <img
              src={logo}
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'flex',
                justifyContent: 'center',
              }}
            />
          </Box>
        ))}
      </Carousel> */}
		</VStack>
	);
};

export default InfiniteCarousel;
