import './load-env.js';
import chalk from 'chalk';

import app from './src/app.js';

const PORT = process.env.PORT;

app.listen(PORT, err => {

    if(err) {
        //Nous avons une erreur, on pourrait faire du code plus brillant.
        process.exit(1);
    }

    console.log(chalk.blue(`Server listening on port ${PORT}`));
});