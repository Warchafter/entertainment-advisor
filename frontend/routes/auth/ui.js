const express = require('express');
const fetch = (...args) =>
    import('node-fetch').then(({default: fetch}) => fetch(...args));


const router = express.Router();

router.get('api/users/setDefaultTheme', async (req, res) => {
    const { access } = req.cookies;
    console.log("body: ", req.body);
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

        res.status(apiResponse.status).json(data);
    } catch(err) {
        return res.status(500).json({
            error: 'Something went wrong when trying to verify login status',
        });
    };
});

module.exports = router;