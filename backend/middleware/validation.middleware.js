//validating the input field

const validator = (request, response, next) => {
    const { username, mobile, email, address, profilepic } = request.body;

    if (!username || !mobile || !email || !address || !profilepic) {
        return response.status(500).json({ error: "All fields are required" })
    }

    if (mobile.length !== 10) {
        return response.status(500).json({ error: "Mobile number should be 10 digits" })
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        return response.status(500).json({ error: "Invalid email format." });
    }

    next();
}

module.exports = validator;