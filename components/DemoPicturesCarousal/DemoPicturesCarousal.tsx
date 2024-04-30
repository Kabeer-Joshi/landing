import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CommonCarousalData } from "../../data/data";
import { Box, Flex, Heading, Image, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const CustomLeftArrow = ({ onClick, ...rest }) => {
    return (
        <IconButton
            as={ChevronLeftIcon}
            onClick={onClick}
            position="absolute"
            left="0"
            top="50%"
            transform="translateY(-50%)"
            zIndex="10"
            bg="gray.200"
            aria-label="Previous slide"
            {...rest}
        />
    );
};

const CustomRightArrow = ({ onClick, ...rest }) => {
    return (
        <IconButton
            as={ChevronRightIcon}
            onClick={onClick}
            position="absolute"
            right="0"
            top="50%"
            transform="translateY(-50%)"
            zIndex="10"
            bg="gray.200"
            aria-label="Next slide"
            {...rest}
        />
    );
};

const DemoPicturesCarousal = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <Heading
                mb={8}
                mt={24}
                fontSize={{ base: "2xl", md: "4xl" }}
                color={"brand.100"}
                textAlign="center"
            >
                Demo View
            </Heading>
            <Carousel
                swipeable={true}
                draggable={true}
                pauseOnHover={true}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                customTransition="transform 1000ms linear"
                transitionDuration={2000}
                arrows={false}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                style={{ transition: "transform 1s linear" }}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
            >
                {CommonCarousalData.map((logo, index) => (
                    <Flex
                        alignItems={"center"}
                        justify={"center"}
                        textAlign={"center"}
                        key={index}
                        p={10}
                        onContextMenu={(e) => e.preventDefault()}
                        onDoubleClick={(e) => e.preventDefault()}
                        userSelect={"none"}
                        h={"100%"}
                    >
                        <Image
                            shadow={"xl"}
                            rounded={"lg"}
                            src={logo}
                            alt={`Logo ${index + 1}`}
                            transition={"all 0.5s ease-out"}
                            width={{ base: 600, md: 800, lg: 800, xl: 800 }}
                            _hover={{
                                transform: "scale(1.1)",
                                cursor: "grab",
                                transition: "all 0.5s ease-out",
                            }}
                            border={"1px solid #E2E8F0"}
                        />
                    </Flex>
                ))}
            </Carousel>
        </>
    );
};

export default DemoPicturesCarousal;
