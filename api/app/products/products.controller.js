import Product from './product'
import { Router } from 'express'
import { green, blue } from './../../helpers/chalk.helper'
import { ErrorHandler } from '../../helpers/error.helper'

export function productsController(product) {
  const router = new Router()

  router.post('/', create)
  router.get('/', getAll)
  router.get('/:_id', getOne)
  router.put('/:_id', update)
  router.delete('/:_id', remove)

  async function create(req, res, next) {
    try {
      blue('products > controller > create')
      const newEntry = req.body
      const result = await product.create(newEntry)
      return res.send(result)
    } catch (error) {
      next(error)
    }
  }

  async function getAll(req, res, next) {
    try {
      blue('products > controller > getAll')
      const query = req.query || {}
      const result = await product.find(query).sort({updatedAt: -1})
      return res.send(result)
    } catch (error) {
      next(error)
    }
  }

  async function getOne(req, res, next) {
    try {
      blue('products > controller > getOne')
      const { _id } = req.params
      const result = await product.findById(_id)
      return res.send(result)
    } catch (error) {
      next(error)
    }
  }

  async function update(req, res, next) {
    try {
      blue('products > controller > update')
      const changedEntry = req.body
      const { _id } = req.params
      const result = await product.update({ _id }, changedEntry)
      return res.send(result)
    } catch (error) {
      next(error)
    }
  }

  async function remove(req, res, next) {
    try {
      blue('products > controller > remove')
      const { _id } = req.params
      const result = await product.remove(_id)
      return res.send(result)
    } catch (error) {
      next(error)
    }
  }

  return router
}

export const products = new Router().use('/products', productsController(Product))
