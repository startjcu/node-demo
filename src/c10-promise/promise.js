function fn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let n = parseInt(Math.random() * 9)
            resolve(n)
        }, 3000);
    })
}

fn().then((n) => { console.log(n) }, () => { })