import * as request from 'supertest'
import * as express from 'express';

import router from "../router";

const app = express();
app.use('/', router)

describe('Test routes', () => {
    jest.mock('fs', () => ({
        ...jest.requireActual('fs'),
        readFileSync: jest.fn().mockReturnValue('ref: refs/heads/feature/testing')
    }));

    test("version route returns the appropriate data", async () => {
        const response = await request(app).get("/version");
        console.log(response)
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual("works");
    });
});

