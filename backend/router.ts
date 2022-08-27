import * as express from 'express';
import * as fs from 'fs-extra';
import * as path from 'path';

const router = express.Router();

router.get('/version', (_request, response)  => {
    const branch = fs.readFileSync( path.join(__dirname, '../../', '.git/HEAD'), 'utf8').replace('ref: refs/heads/', '').trim();
    const version = process.env.npm_package_version;
    const environment = process.env.NODE_ENV;

    response.status(200).send({
        version, branch, environment
    });
});


export default router;
