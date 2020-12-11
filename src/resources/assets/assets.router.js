import { Router } from 'express'
import assetControllers from './assets.controllers'

const router = Router()

router.route('/').get(assetControllers.getAll).post(assetControllers.createOne)

router
  .route('/:id')
  .get(assetControllers.getOne)
  .put(assetControllers.updateOne)
  .delete(assetControllers.removeOne)

export default router
