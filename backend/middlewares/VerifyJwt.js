import jwt from 'jsonwebtoken';

export const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if authorization header is present
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: "No access token or invalid format" });
    }

    // Extract the token from the header
    const token = authHeader.split(' ')[1];

    // Verify token
    jwt.verify(token, process.env.SECRET_ACCESS_KEY, (err, decoded) => {
        if (err) {
            console.log(err); // Optional: Log error details for debugging
            return res.status(403).json({ error: "Access token is invalid" });
        }

        // Attach the user ID to the request object
        req.user = decoded.id;

        // Continue to the next middleware
        next();
    });
};
