import * as express from 'express';
import * as fs from 'fs-extra';
import * as path from 'path';

const router = express.Router();

router.get('/version', (_request, response)  => {
    const branchFilePath = path.join(__dirname, '../../', '.git/HEAD');
    const branch = fs.readFileSync(branchFilePath, 'utf8').replace('ref: refs/heads/', '').trim();
    console.log(branch)
    // const fileTEXT = fs.readFileSync(path.join(__dirname, '../../', '.git/HEAD'));
    //const branch = fileTEXT.toString().replace('ref: refs/heads/', '').replace(/^\s+|\s+$/g, '');
    const version = process.env.npm_package_version;
    const environment = process.env.NODE_ENV;

    response.status(200).send({
        version, branch, environment
    });
});


export default router;
