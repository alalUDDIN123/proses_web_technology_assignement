const inputs = [
    {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Enter your username",
        errorMessage:
            "Username should be 3 - 20 characters and shouldn't include any special characters",
        label: "Username",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
    },
    {
        id: 2,
        name: "mobile",
        type: "string",
        placeholder: "Enter your Mobile Number",
        errorMessage: "Mobile Number must be 10 digits",
        pattern: "^[0-9]{10}$",
        label: "Mobile Number",
        required: true,
    },
    {
        id: 3,
        name: "email",
        type: "email",
        placeholder: "Enter your email address",
        errorMessage: "Invalid email",
        pattern: "^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$",
        label: "Email",
        required: true,
    },
    {
        id: 4,
        name: "address",
        type: "text",
        placeholder: "Enter your Address",
        errorMessage: "",
        label: "Address",
        required: true,
    },
    {
        id: 5,
        name: "profilepic",
        type: "text",
        placeholder: "Enter link",
        errorMessage: "",
        label: "Profile Pic (optional)",
    },
];


export default inputs