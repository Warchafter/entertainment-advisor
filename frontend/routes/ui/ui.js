const express = require('express');
const fetch = (...args) =>
    import('node-fetch').then(({default: fetch}) => fetch(...args));


const router = express.Router();

router.put('/api/users/setDefaultTheme', async (req, res) => {
    const { access } = req.cookies;
    const {id, theme_picked} = req.body;

    const body = JSON.stringify({theme_picked});

    try {
        const apiResponse = await fetch(`${process.env.API_URL}/api/users/users/${id}/set_theme/`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${access}`
            },
            body,
        });

        const data = await apiResponse.json();

        if (apiRes.status === 200) {
            res.setHeader('Set-Cookie', [
                cookie.serialize('access', data.access, {
                    httpOnly: true,
                    maxAge: 60 * 30,
                    path: '/api/',
                    sameSite: 'strict',
                    secure: process.env.NODE_ENV === 'production'
                }),
                cookie.serialize('refresh', data.refresh, {
                    httpOnly: true,
                    maxAge: 60 * 60 * 24,
                    path: '/api/',
                    sameSite: 'strict',
                    secure: process.env.NODE_ENV === 'production'
                })
            ]);

            return res.status(200).json({ success: 'Theme set successfully'});
        } else {
            return res.status(apiResponse.status).json(data);
        }

        res.status(apiResponse.status).json(data);
    } catch(err) {
        return res.status(500).json({
            error: 'Something went wrong when trying to verify login status',
        });
    };
});

module.exports = router;