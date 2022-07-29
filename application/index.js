let resp = document.getElementById("resp_ht")
let range = document.getElementById('rangeValue')
let inputSlider = document.getElementById('range-lenght')
let radio_1 = document.getElementById('flexRadioDefault1')
let radio_2 = document.getElementById('flexRadioDefault2')
let radio_3 = document.getElementById('flexRadioDefault3')
var check_1 = document.getElementById('gridCheck1')
var check_2 = document.getElementById('gridCheck2')
var check_3 = document.getElementById('gridCheck3')

let win = true


// function rangeSlide(value) {
//     range.innerHTML = value;
// }

inputSlider.oninput = (() => {
    let value = inputSlider.value;
    range.textContent = value;
})


// radio_1 = false


function copiarTexto() {
    let textoCopiado = resp;
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("a Senha é: " + textoCopiado.value);
}





function onChange() {
    check_1.disabled = true
    check_1.checked = true

    check_2.disabled = true
    check_2.checked = false

    check_3.disabled = true
    check_3.checked = false



    inputSlider.oninput = (() => {
        let value = inputSlider.value;
        range.textContent = value;

        resp.innerHTML = ' '

        senha(value)

        function senha(password) {

            let char = 'abcdefghijklmenopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
            let number = 2
            console.log("possibilidades de senhas: ")

            for (var i = 1; i < number; i++) {
                var random_string = '';
                for (var c = 0; c < password; c++) {

                    random_string += char.charAt(Math.floor(Math.random() * char.length))

                }

                resp.innerHTML += `${random_string}` 
                console.log(resp)
            }


        }




    })


}
onChange()


function onChange2() {

    check_1.disabled = true
    check_1.checked = true

    check_2.disabled = true
    check_2.checked = true

    check_3.disabled = true
    check_3.checked = false


    inputSlider.oninput = (() => {
        let value = inputSlider.value;
        range.textContent = value;

        resp.innerHTML = ' '

        senha(value)

        function senha(password) {

            let char = 'abcdefghijklmenopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'
            let number = 2
            console.log("possibilidades de senhas: ")

            for (var i = 1; i < number; i++) {
                var random_string = '';
                for (var c = 0; c < password; c++) {

                    random_string += char.charAt(Math.floor(Math.random() * char.length))

                }

                 resp.innerHTML +=`${random_string}`
                console.log(resp)
            }


        }




    })


}
onChange2()


function onChange3() {

    check_1.disabled = true
    check_1.checked = true

    check_2.disabled = true
    check_2.checked = true

    check_3.disabled = true
    check_3.checked = true



    inputSlider.oninput = (() => {
        let value = inputSlider.value;
        range.textContent = value;

        resp.innerHTML = ' '

        senha(value)

        function senha(password) {

            let char = 'abcdefghijklmenopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.,;*&%$#@!'
            let number = 2
            console.log("possibilidades de senhas: ")

            for (var i = 1; i < number; i++) {
                var random_string = '';
                for (var c = 0; c < password; c++) {

                    random_string += char.charAt(Math.floor(Math.random() * char.length))

                }

                resp.innerHTML += ` ${random_string}` 
                console.log(resp)
            }


        }




    })



}
onChange3()


//  function copiarTexto() {
//         let textoCopiado = resp;
//         textoCopiado.select();
//         textoCopiado.setSelectionRange(0, 99999)
//         document.execCommand("copy");
//         alert("O texto é: " + textoCopiado.value);
//     }















// function rangeSlide(value) {
//     range.innerHTML = value;
// }

// let called = ((password) =>{



//     senha(1)
//     function senha(){



//     }
// })