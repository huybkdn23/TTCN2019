import { Link } from '.'

let link

beforeEach(async () => {
  link = await Link.create({ link: 'test', name: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = link.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(link.id)
    expect(view.link).toBe(link.link)
    expect(view.name).toBe(link.name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = link.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(link.id)
    expect(view.link).toBe(link.link)
    expect(view.name).toBe(link.name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
