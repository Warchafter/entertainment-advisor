const express = require('express');
const fetch = (...args) =>
    import('node-fetch').then(({default: fetch}) => fetch(...args));


const router = express.Router();

router.get('/api/users/refresh', async (req, res) => {
    const { refresh } = req.cookies;

    const body = JSON.stringify({
        token: refresh
    });

    try {
        const apiResponse = await fetch(`${process.env.API_URL}/api/auth/jwt/refresh/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body,
        });

        const data = await apiResponse.json();

        if (apiResponse.status === 200) {
            res.setHeader('Set-Cookie', [
                cookie.serialize('access', data.access, {
                    httpOnly: true,
                    maxAge: 60 * 30,
                    path: '/api/',
                    sameSite: 'strict',
                    secure: process.env.NODE_ENV === 'production'
                })
            ]);

            return res.status(200).json({ success: 'Access tokes has been successfully refreshed'});
        } else {
            return res.status(apiResponse)
        }

    } catch (err) {
        return res.status(500).json({
            error: 'Something went wrong when trying to refresh the access token',
        });
    };
});

module.exports = router;