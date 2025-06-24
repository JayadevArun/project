const axios = require('axios');
const HttpError = require('../models/http-error');

const API_KEY = process.env.GOOGLE_API_KEY;

async function getCoordsForAddress(address) {
    // return {
    //     "lat" : 37.4267861,
    //     "lng" : -122.0806032
    //  };

    let response;
    try {
        response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`);
    } catch (error) {
        throw new HttpError('Failed to fetch location from Google Maps API.', 500);
    }

    const data = response.data;

    if (!data || data.status === 'ZERO_RESULTS') {
        const error = new HttpError('Could not find location for the specified address.', 422);
        throw error;
    }

    if (data.status === 'REQUEST_DENIED') {
        const error = new HttpError('Request denied. Check your API key and permissions.', 403);
        throw error;
    }

    if (!data.results || data.results.length === 0) {
        const error = new HttpError('Could not find location for the specified address.', 422);
        throw error;
    }

    const coordinates = data.results[0].geometry.location;

    return coordinates;
}

module.exports = getCoordsForAddress;
