function exempleSetTimeout() {
    console.log('Début');
    setTimeout(() => {
        console.log('Milieu');
    },1500);
    console.log('Fin');
}

function exempleCallbackA() {
    console.log('1'); //0
    setTimeout(() => {
        console.log('2'); //1000
        setTimeout(() => {
            console.log('3'); //2000
            setTimeout(() => {
                console.log('4'); //2500
            }, 500);
            console.log('5'); //2000
        }, 1000);
        console.log('6'); //1000
    }, 1000);

    console.log('7'); //0

    setTimeout(() => {
        console.log('8') //1500
    }, 1500);

    console.log('9'); //0
}

function exemplePromise() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('une seconde a passé'), 1000);
    });

    promise.then(o => {
        console.log(o);
        console.log('promise terminé')
    });
}

async function exempleAwait() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('une seconde a passé'), 1000);
    });

    let result = await promise;
    console.log(result);
    console.log('await terminé');
}


exemplePromise();