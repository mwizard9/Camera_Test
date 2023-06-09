const express = require('express');
const router = express.Router();
const Device = require('../models/Result');

// Fetch all results
router.get('/results', async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

// Post devices with ratings
router.post('/devices', async (req, res) => {
  try {
    const { name, standardRating, portraitRating } = req.body;

    const device = new Device({
      name,
      standard: standardRating ,
      portrait: portraitRating 
    });

    await device.save();
    res.json(device);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

// Post rating for a specific device in the standard mode
router.post('/devices/:deviceId/standard', async (req, res) => {
  try {
    const { deviceId } = req.params;
    const { rating } = req.body;

    const device = await Device.findById(deviceId);
    device.standard.eloRating = rating;
    await device.save();

    res.json({ message: 'Elo rating updated for the standard mode of the device' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

// Post rating for a specific device in the portrait mode
router.post('/devices/:deviceId/portrait', async (req, res) => {
  try {
    const { deviceId } = req.params;
    const { rating } = req.body;

    const device = await Device.findById(deviceId);
    device.portrait.eloRating = rating;
    await device.save();

    res.json({ message: 'Elo rating updated for the portrait mode of the device' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;