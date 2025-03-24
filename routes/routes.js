import express from "express";

import * as moviesControls from '../controller/controllers.js'

const router = express.Router()

router.get('/movies', moviesControls.getAllMovies)

router.get('movies/:id', moviesControls.getMovieById)
 
router.post('/movies', moviesControls.createMovie) 

router.put('/movies/:id', moviesControls.updateMovie)

router.delete('/movies/:id', moviesControls.deleteMovie)

export default router
