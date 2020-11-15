const strToHax = async () => {
    try {
        document.getElementById('button').style.display = 'none';
        document.getElementById('loader').style.display = 'block';
        document.getElementById('area__output').style.display = 'none';

        const area__input = document.getElementById('area__input').value;
        // alert(convertFunction(area__input));
        if (area__input.trim().length < 1) {
            alert('Please enter string');
        } else {
            const area__output = await convertFunction(area__input);
            document.getElementById('area__output').style.display = 'block';
            document.getElementById('area__output').value = area__output;
        }
    } catch (error) {
        alert(error);
    } finally {
        document.getElementById('button').style.display = 'block';
        document.getElementById('loader').style.display = 'none';
    }
}

const convertFunction = (str) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                var arr = [];
                for (var i = 0, l = str.length; i < l; i++) {
                    var hex = Number(str.charCodeAt(i)).toString(16);
                    arr.push(` ${hex}`);
                }
                resolve(arr.join(''));
            }, 1500);
        } catch (error) {
            reject(error);
        }
    });
}