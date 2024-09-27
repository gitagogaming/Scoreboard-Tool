const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer'); 
const { uploadImage, createFolders, generateImageUrl, renameImage, deleteImage, fetchImages } = require('../controllers/cloudinary');


// we current do front end uploads with cloudinary widget so we dont need this route currently
// 0 or never.. because then the cost would be on server if we host this on the web.

// router.post('/api/uploadImage', async (req, res) => {
//     const { file, folder } = req.body;
  
//     if (!file) {
//       return res.status(400).json({ error: 'No file provided' });
//     }
  
//     try {
//       const publicId = await uploadImage(file, folder);
//       res.json({ publicId });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });


  router.post('/api/createFolders', async (req, res) => {
    const { folderNames } = req.body;
    try {
      const message = await createFolders(folderNames);
      res.json({ message });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.get('/api/generateImageUrl', (req, res) => {
    const { publicId, transformations } = req.query;
    try {
      const url = generateImageUrl(publicId, JSON.parse(transformations));
      res.json({ url });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.post('/api/renameImage', async (req, res) => {
    const { currentPublicId, newPublicId, newDisplayName } = req.body;
    try {
      const message = await renameImage(currentPublicId, newPublicId, newDisplayName);
      res.json({ message });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.delete('/api/deleteImage', async (req, res) => {
    const { publicId } = req.body;
    try {
      const message = await deleteImage(publicId);
      res.json({ message });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.get('/api/fetchImages', async (req, res) => {
    const { folderName } = req.query;
    try {
      const resources = await fetchImages(folderName);
      res.json(resources);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


module.exports = router;










// Using the default file picker, we have to use file.buffer to get the file data
// router.post('/api/uploadImage', upload.single('teamLogo'), async (req, res) => {
//     const file = req.file;
//     const cloudFolder = req.body.folder;
  
//     console.log("file", file);
//     console.log("Cloud Folder:", cloudFolder);
  
//     if (!file) {
//       return res.status(400).json({ error: 'No file provided' });
//     }
  
//     try {
//       const publicId = await uploadImage(file.buffer, cloudFolder);
//       res.json({ publicId });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });