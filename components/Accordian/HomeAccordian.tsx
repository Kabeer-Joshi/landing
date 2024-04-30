import { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Box,
    Flex,
    Image,
} from "@chakra-ui/react";

import { accordionData, accordianImages } from "../../data/data";

const Temp = ({ setActiveImage }) => {
    return (
        <Accordion
            defaultIndex={[0]}
            w={"full"}
            allowToggle
            onChange={setActiveImage}
        >
            {accordionData.map((item, index) => (
                <AccordionItem
                    borderTop={index !== 0 ? "1px solid" : "none"}
                    borderTopColor={"brand.100"}
                    borderBottom={
                        index === accordionData.length - 1
                            ? "1px solid"
                            : "none"
                    }
                    borderBottomColor={"brand.100"}
                    key={index}
                >
                    <h2>
                        <AccordionButton
                            fontSize={{ base: "lg", md: "2xl" }}
                            p={5}
                        >
                            <Box as="span" flex="1" textAlign="left">
                                {item.title}
                            </Box>
                            <AccordionIcon color={"brand.100"} />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize={{ base: "md", md: "lg" }}>
                        {item.content}
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

const HomeAccordian = () => {
    const [activeImage, setActiveImage] = useState(0);

    if (activeImage === -1) {
        setActiveImage(() => 0);
    }
    return (
        <Flex
            direction={{ base: "column", md: "row", lg: "row", xl: "row" }}
            w={"full"}
            my={24}
            px={{ base: 4 }}
            gap={5}
        >
            <Image
                src={accordianImages[activeImage]}
                w={{ base: 500, md: 600 }}
                mb={{ base: 4, md: 0 }}
            />

            <Flex justify={"center"} align={"center"} flex={1} width={"full"}>
                <Temp setActiveImage={setActiveImage} />
            </Flex>
        </Flex>
    );
};

export default HomeAccordian;
