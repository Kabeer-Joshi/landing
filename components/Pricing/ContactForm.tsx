import { useCallback, useState } from "react";
import { init, send } from "@emailjs/browser";
import {
	Box,
	Heading,
	Button,
	VStack,
	Wrap,
	WrapItem,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Textarea,
	Select,
	useToast,
	FormErrorMessage,
} from "@chakra-ui/react";

import { BsPerson } from "react-icons/bs";
import { debounce } from "lodash";
import validator from "validator";
import { MdOutlineCabin, MdOutlineEmail, MdPhone } from "react-icons/md";

const PUBLIC_KEY = "zihhAyOhEKtFGRJAO";
init(PUBLIC_KEY);

const SERVICE_ID = "service_99bsm7g";
const TEMPLATE_ID = "template_2ze0s59";

const Form = () => {
	const toast = useToast();

	const [submitting, setSubmitting] = useState(false);

	// State for form inputs
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		organizationType: "",
		organizationName: "",
		needDescription: "",
		message: "",
	});
	// State for form errors
	const [formErrors, setFormErrors] = useState({
		name: "",
		email: "",
		phone: "",
		organizationType: "",
		organizationName: "",
		needDescription: "",
		message: "",
	});

	const resetForm = () => {
		setFormData({
			name: "",
			email: "",
			phone: "",
			organizationType: "",
			organizationName: "",
			needDescription: "",
			message: "",
		});
		setFormErrors({
			name: "",
			email: "",
			phone: "",
			organizationType: "",
			organizationName: "",
			needDescription: "",
			message: "",
		});
	};

	const validateSingleField = (name, value) => {
		switch (name) {
			case "name":
				if (!validator.isLength(value, { min: 1 })) {
					return "Name is required.";
				}
				break;
			case "email":
				if (!validator.isEmail(value)) {
					return "Email is not valid.";
				}
				break;
			case "phone":
				if (!validator.isMobilePhone(value)) {
					return "Phone number is not valid.";
				}
				break;
			case "organizationType":
				if (!validator.isLength(value, { min: 1 })) {
					return "Organization type is required.";
				}
				break;
			case "needDescription":
				if (!validator.isLength(value, { min: 1 })) {
					return "Description is required.";
				}
				break;
			case "organizationName":
				if (!validator.isLength(value, { min: 1 })) {
					return "Organization name is required.";
				}
				break;
			case "message":
				if (!validator.isLength(value, { min: 1 })) {
					return "Message is required.";
				}
				break;
			default:
				return "";
		}
		return "";
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
		debouncedValidation(name, value);
	};

	const debouncedValidation = useCallback(
		debounce((name, value) => {
			let error = validateSingleField(name, value);
			setFormErrors((prevErrors) => ({
				...prevErrors,
				[name]: error,
			}));
		}, 400),
		[]
	);

	const validateForm = () => {
		let isValid = true;
		let errors = {};

		for (let field in formData) {
			let error = validateSingleField(field, formData[field]);
			if (error) {
				errors[field] = error;
				isValid = false;
			}
		}

		setFormErrors(errors);
		return isValid;
	};

	const sentToDataBase = async (formData) => {
		const response = await fetch(
			"https://manageapi.goreeva.com/api/add-inquires/",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json", // Set the content type to JSON
				},

				body: JSON.stringify({
					name: formData.name,
					orgType: formData.organizationType,
					email: formData.email,
					phone: formData.phone,
					need: formData.needDescription,
					mesage: formData.message,
					orgName: formData.organizationName,
				}),
			}
		);

		const data = await response.json();
		console.log(data);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("submitting");
		if (validateForm()) {
			setSubmitting(true);
			try {
				const response = await send(SERVICE_ID, TEMPLATE_ID, formData);

				console.log("Response", response);

				if (response.status === 200) {
					sentToDataBase(formData);
					resetForm();
					toast({
						title: "Message Sent to Goreeva",
						description: "We've received your message.",
						status: "success",
						duration: 2000,
						isClosable: true,
						position: "top",
					});
				} else {
					toast({
						title: "Submission Failed",
						description: "Something went wrong. Please try again later.",
						status: "error",
						duration: 2000,
						isClosable: true,
						position: "top",
					});
				}
			} catch (error) {
				toast({
					title: "Submission Failed",
					description: "Something went wrong. Please try again later.",
					status: "error",
					duration: 2000,
					isClosable: true,
					position: "top",
				});
			}
		}
		setSubmitting(false);
	};

	console.log("form");

	return (
		<>
			<Box
				bg="white"
				borderRadius="md"
				border="1px solid #E0F0FF"
				color="#0B0E3F"
				m={{ base: 4, md: 4, lg: 4 }}
				p={{ base: 4, md: 6, lg: 8 }}
			>
				<Heading
					fontSize={{ base: "2xl", md: "2xl" }}
					color={"brand.100"}
					mb={5}
				>
					Contact Us
				</Heading>
				<VStack spacing={4}>
					{/* Your Name Field */}
					<FormControl id="name" isRequired isInvalid={formErrors.name}>
						<FormLabel fontSize="md">Your Name</FormLabel>
						<InputGroup>
							<InputLeftElement pointerEvents="none" fontSize="md">
								<BsPerson color="gray.800" />
							</InputLeftElement>
							<Input
								type="text"
								size="md"
								h="40px"
								fontSize="md"
								name="name"
								value={formData.name}
								onChange={handleChange}
								_focus={{
									borderColor: "brand.100",
								}}
							/>
						</InputGroup>
						<FormErrorMessage>{formErrors.name}</FormErrorMessage>
					</FormControl>
					{/* Email Field */}
					<FormControl id="email" isRequired isInvalid={formErrors.email}>
						<FormLabel fontSize="md">Email</FormLabel>
						<InputGroup alignItems={"center"}>
							<InputLeftElement pointerEvents="none" fontSize="md">
								<MdOutlineEmail color="gray.800" />
							</InputLeftElement>
							<Input
								type="email"
								size="md"
								h="40px"
								fontSize="md"
								name="email"
								value={formData.email}
								onChange={handleChange}
								_focus={{
									borderColor: "brand.100",
								}}
							/>
						</InputGroup>
						<FormErrorMessage>{formErrors.email}</FormErrorMessage>
					</FormControl>

					{/* Phone and Organization Type Fields */}
					<Wrap spacing={6} w="100%">
						<WrapItem flex="1">
							<FormControl id="phone" isRequired isInvalid={formErrors.phone}>
								<FormLabel fontSize="md">Phone Number</FormLabel>
								<InputGroup>
									<InputLeftElement pointerEvents="none" fontSize="md">
										<MdPhone color="gray.800" />
									</InputLeftElement>
									<Input
										type="tel"
										size="md"
										h="40px"
										fontSize="md"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										_focus={{
											borderColor: "brand.100",
										}}
									/>
								</InputGroup>
								<FormErrorMessage>{formErrors.phone}</FormErrorMessage>
							</FormControl>
						</WrapItem>
						<WrapItem flex="1">
							<FormControl
								id="organizationType"
								isRequired
								isInvalid={formErrors.organizationType}
							>
								<FormLabel fontSize="md">Organization Type</FormLabel>
								<Select
									size="md"
									h="40px"
									fontSize="md"
									name="organizationType"
									value={formData.organizationType}
									onChange={handleChange}
								>
									<option value="">Select</option>
									<option value="higherEd">Higher Ed (College)</option>
									<option value="k12">K12 (Schools)</option>
								</Select>
								<FormErrorMessage>
									{formErrors.organizationType}
								</FormErrorMessage>
							</FormControl>
						</WrapItem>
					</Wrap>

					{/* Description of Need Field */}
					<FormControl
						id="needDescription"
						isRequired
						isInvalid={formErrors.needDescription}
					>
						<FormLabel fontSize="md">
							What is the best description of your need?
						</FormLabel>
						<Select
							size="md"
							h="40px"
							fontSize="md"
							name="needDescription"
							value={formData.needDescription}
							onChange={handleChange}
						>
							<option value="">Select</option>
							<option value="training">Training</option>
							<option value="inquiry">Inquiry</option>
							<option value="sales">Sales contact</option>
						</Select>
						<FormErrorMessage>{formErrors.needDescription}</FormErrorMessage>
					</FormControl>

					{/* Organization Name Field */}
					<FormControl
						id="organizationName"
						isRequired
						isInvalid={formErrors.organizationName}
					>
						<FormLabel fontSize="md">Organization Name</FormLabel>
						<InputGroup alignItems={"center"}>
							<InputLeftElement pointerEvents="none" fontSize="md">
								<MdOutlineCabin color="gray.800" />
							</InputLeftElement>
							<Input
								type="text"
								size="md"
								h="40px"
								fontSize="md"
								name="organizationName"
								value={formData.organizationName}
								onChange={handleChange}
								_focus={{
									borderColor: "brand.100",   
								}}
							/>
						</InputGroup>
						<FormErrorMessage>{formErrors.organizationName}</FormErrorMessage>
					</FormControl>

					{/* Message Field */}
					<FormControl id="message" isRequired isInvalid={formErrors.message}>
						<FormLabel fontSize="md">Message</FormLabel>
						<Textarea
							size="md"
							h="100px"
							fontSize="md"
							name="message"
							value={formData.message}
							onChange={handleChange}
							_focus={{
								borderColor: "brand.100",
							}}
							placeholder="Your message here..."
						/>
						<FormErrorMessage>{formErrors.message}</FormErrorMessage>
					</FormControl>
					{/* Submit Button */}
					<Button
						type="submit"
						onClick={(e) => {
							handleSubmit(e);
						}}
						mt={2}
						borderRadius="full"
						variant="solid"
						bg="brand.100"
						color="white"
						_hover={{ opacity: 0.7 }}
						h="40px"
						w="150px"
						fontSize="md"
						isLoading={submitting}
					>
						{submitting ? "Submitting..." : "Submit"}
					</Button>
				</VStack>
			</Box>
		</>
	);
};

export default Form;
