let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

let isShowingResult = false;

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '=':
                if(!display.innerText)break;
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error";
                } finally {
                    isShowingResult = true;
                }
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText == 'Error'? '' : display.innerText.slice(0, -1);
                }
                break;
            default:
                //if ('+-*/.)'.includes(e.target.innerText) && (isShowingResult || display.innerText === '' || /[\+\-\*\/]$/.test(display.innerText))) break;

                //if (isShowingResult) {
                //    isShowingResult = false;
                //    display.innerText = '';
                //}
                display.innerText += e.target.innerText;
        }
    });
});