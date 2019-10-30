import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Link, { schema } from './model'

const router = new Router()
const { link, name } = schema.tree

/**
 * @api {post} /links Create link
 * @apiName CreateLink
 * @apiGroup Link
 * @apiParam link Link's link.
 * @apiParam name Link's name.
 * @apiSuccess {Object} link Link's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Link not found.
 */
router.post('/',
  body({ link, name }),
  create)

/**
 * @api {get} /links Retrieve links
 * @apiName RetrieveLinks
 * @apiGroup Link
 * @apiUse listParams
 * @apiSuccess {Object[]} links List of links.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /links/:id Retrieve link
 * @apiName RetrieveLink
 * @apiGroup Link
 * @apiSuccess {Object} link Link's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Link not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /links/:id Update link
 * @apiName UpdateLink
 * @apiGroup Link
 * @apiParam link Link's link.
 * @apiParam name Link's name.
 * @apiSuccess {Object} link Link's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Link not found.
 */
router.put('/:id',
  body({ link, name }),
  update)

/**
 * @api {delete} /links/:id Delete link
 * @apiName DeleteLink
 * @apiGroup Link
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Link not found.
 */
router.delete('/:id',
  destroy)

export default router
