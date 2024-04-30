import {
    Heading,
    Flex,
    Image,
    Highlight,
    Text,
    Icon,
    Stack,
    Button,
} from "@chakra-ui/react";
import { higherEdBannerData } from "../../data/data";
import { BsCheck } from "react-icons/bs";

const HEdBanner = () => {
    const { title, subTitle, image, points } = higherEdBannerData;
    return (
        <Flex
            background={"blue.50"}
            minH={"md"}
            direction={{ base: "column", lg: "row-reverse" }}
            justify={"center"}
            align={"center"}
            gap={8}
            py={16}
            px={{ base: 6, lg: 24 }}
            w={"full"}
        >
            <Flex
                flex={1}
                direction={"column"}
                justify={"start"}
                align={"start"}
                gap={12}
                w={"full"}
            >
                <Heading fontSize={{ base: "3xl", md: "5xl" }}>
                    <Highlight
                        query={"Goreeva"}
                        styles={{
                            color: "brand.100",
                        }}
                    >
                        {title}
                    </Highlight>
                </Heading>
                <Heading color={"gray.600"} fontSize={{ base: "md", md: "xl" }}>
                    {subTitle}
                </Heading>

                {/* REPETATIVE CODE */}

                <Flex
                    direction={{ base: "column", lg: "row" }}
                    w={"full"}
                    justify={"start"}
                    align={"start"}
                    gap={8}
                >
                    <Flex
                        direction={"column"}
                        w={"full"}
                        gap={8}
                        justify={"start"}
                        align={"start"}
                    >
                        <Stack
                            justifyContent={"flex-start"}
                            direction={"row"}
                            gap={3}
                        >
                            {" "}
                            <Icon
                                color={"brand.100"}
                                as={BsCheck}
                                boxSize={7}
                            />
                            <Text
                                whiteSpace={"nowrap"}
                                color={"gray.600"}
                                fontSize={{ base: "md", md: "xl" }}
                            >
                                {points[0]}
                            </Text>
                        </Stack>
                        <Stack
                            justifyContent={"flex-start"}
                            direction={"row"}
                            gap={3}
                        >
                            {" "}
                            <Icon
                                color={"brand.100"}
                                as={BsCheck}
                                boxSize={7}
                            />
                            <Text
                                color={"gray.600"}
                                fontSize={{ base: "md", md: "xl" }}
                            >
                                {points[1]}
                            </Text>
                        </Stack>
                    </Flex>
                    <Flex
                        w={"full"}
                        direction={"column"}
                        gap={8}
                        justify={"start"}
                        align={"start"}
                    >
                        <Stack
                            justifyContent={"flex-start"}
                            direction={"row"}
                            gap={3}
                        >
                            {" "}
                            <Icon
                                color={"brand.100"}
                                as={BsCheck}
                                boxSize={7}
                            />
                            <Text
                                color={"gray.600"}
                                fontSize={{ base: "md", md: "xl" }}
                            >
                                {points[2]}
                            </Text>
                        </Stack>
                        <Stack
                            justifyContent={"flex-start"}
                            direction={"row"}
                            gap={3}
                        >
                            {" "}
                            <Icon
                                color={"brand.100"}
                                as={BsCheck}
                                boxSize={7}
                            />
                            <Text
                                color={"gray.600"}
                                fontSize={{ base: "md", md: "xl" }}
                            >
                                {points[3]}
                            </Text>
                        </Stack>
                    </Flex>
                </Flex>

                <Button background={"brand.100"} color={"white"}>
                    All Services
                </Button>
            </Flex>
            <Flex px={5} justify={"center"} align={"center"} flex={1}>
                <Image
                    border={"1px solid"}
                    borderColor={"brand.100"}
                    src={image}
                    rounded={"2xl"}
                    w={500}
                ></Image>
            </Flex>
        </Flex>
    );
};

export default HEdBanner;
