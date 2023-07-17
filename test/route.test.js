const request = require('supertest')

let server

describe('Routage TEST', () => {

    beforeEach(() => {
        server = require('../server')
    })
    afterEach(() => {
        server.close()
    })

    describe('GET ON /', () => {
        it('Should return 200 status', async () => {
            const responce = await request(server).get('/')
            expect(responce.status).toBe(200)
        })

        it('Should return 501 status', async () => {
            const responce = await request(server).get('/prout')
            expect(responce.status).toBe(501)
        })

    })
})