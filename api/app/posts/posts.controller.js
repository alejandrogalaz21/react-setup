import Post from './post'
import { Router } from 'express'
import { green, blue } from './../../helpers/chalk.helper'
import { ErrorHandler } from '../../helpers/error.helper'

export function postsController(post) {
  const router = new Router()

  router.post('/', create)
  router.get('/', getAll)
  router.get('/:_id', getOne)
  router.put('/:_id', update)
  router.delete('/:_id', remove)

  async function create(req, res, next) {
    try {
      blue('posts > controller > create')
      const newEntry = req.body
      const result = await post.create(newEntry)
      return res.send(result)
    } catch (error) {
      next(error)
    }
  }

  async function getAll(req, res, next) {
    try {
      blue('posts > controller > getAll')
      const query = req.query || {}
      const result = await post.find(query).sort({updatedAt: -1})
      return res.send(result)
    } catch (error) {
      next(error)
    }
  }

  async function getOne(req, res, next) {
    try {
      blue('posts > controller > getOne')
      const { _id } = req.params
      const result = await post.findById(_id)
      return res.send(result)
    } catch (error) {
      next(error)
    }
  }

  async function update(req, res, next) {
    try {
      blue('posts > controller > update')
      const changedEntry = req.body
      const { _id } = req.params
      const result = await post.update({ _id }, changedEntry)
      return res.send(result)
    } catch (error) {
      next(error)
    }
  }

  async function remove(req, res, next) {
    try {
      blue('posts > controller > remove')
      const { _id } = req.params
      const result = await post.remove(_id)
      return res.send(result)
    } catch (error) {
      next(error)
    }
  }

  return router
}

export const posts = new Router().use('/posts', postsController(Post))
