"use strict";

$('#reviews').slick({

});



var testBtn = document.querySelector(".btnTest"),
    weight = document.getElementById('weight'),
    height = document.getElementById('height'),
    age = document.getElementById('age'),
    heightVal = document.getElementById('height').value,
    weightVal = document.getElementById('weight').value,
    ageVal = document.getElementById('age').value,
    test = document.getElementById('test')

weight.onkeyup = function () {

    var weight = document.getElementById('weight'),
        weightVal = document.getElementById('weight').value

    if ((weightVal > 30) && (weightVal < 130)) {
        weight.classList.add('inputCorrect')
        weight.classList.remove('inputNeutral')
        weight.classList.remove('inputWrong')
    } else {
        weight.classList.add('inputWrong')
        weight.classList.remove('inputNeutral')
        weight.classList.remove('inputCorrect')
    }
}

height.onkeyup = function () {

    var height = document.getElementById('height'),
        heightVal = document.getElementById('height').value

    if ((heightVal > 60) && (heightVal < 220)) {
        height.classList.add('inputCorrect')
        height.classList.remove('inputNeutral')
        height.classList.remove('inputWrong')
    } else {
        height.classList.add('inputWrong')
        height.classList.remove('inputNeutral')
        height.classList.remove('inputCorrect')
    }
}

age.onkeyup = function () {

    var age = document.getElementById('age'),
        ageVal = document.getElementById('age').value


    if ((ageVal >= 18) && (ageVal < 100)) {
        age.classList.add('inputCorrect')
        age.classList.remove('inputNeutral')
        age.classList.remove('inputWrong')
    } else {
        age.classList.add('inputWrong')
        age.classList.remove('inputNeutral')
        age.classList.remove('inputCorrect')
    }
}

function calculating() {
    document.getElementById("test").style.transform = 'rotateY(180deg)'
    document.querySelector(".test2").style.transform = 'rotateY(360deg)'
    setTimeout(function () {
        document.querySelector(".test2").style.zIndex = '11'
        document.querySelector(".test3").style.zIndex = '10'
    }, 100)
    setTimeout(function () {
        document.querySelector(".test3").style.display = 'block'
        document.querySelector(".testBg").style.display = 'block'
    }, 1000)
}

function results() {
    document.querySelector(".test2").style.transform = 'rotateY(540deg)'
    document.querySelector(".test3").style.transform = 'rotateY(360deg)'
    setTimeout(function () {
        document.querySelector(".test3").style.zIndex = '12'
    }, 100)
}

testBtn.onclick = function () {
    var height = document.getElementById('height'),
        weight = document.getElementById('weight'),
        age = document.getElementById('age'),
        heightVal = height.value,
        weightVal = weight.value,
        ageVal = age.value

    if ((weightVal > 30) & (weightVal < 130) & (heightVal > 60) && (heightVal < 220) & (ageVal >= 18) && (ageVal < 100)) {
        calculating()
        var heightV = document.getElementById('height').value,
            weightV = document.getElementById('weight').value,
            bmi = weightV / (heightV * heightV) * 10000,
            bmiFixed = bmi.toFixed(2),
            p = 0,
            bmiResults = document.getElementById('bmi').innerHTML = 0



        console.log(bmi)

        function barrr() {
            var bar = document.querySelector('.testBar').offsetWidth,
                x = bmiFixed,
                barResult = x * 2,
                y = document.querySelector('.barPoint').style.left = barResult + '%'

            bmiCounter()

            function bmiCounter() {

                let y = 0
                const delay = t => new Promise(res => setTimeout(res, t))

                const f = async () => {
                    while (y < bmiFixed) {
                        y++
                        console.log(y)
                        document.getElementById('bmi').innerHTML = y
                        await delay(20)
                    }
                }

                f()
            }
            if ((bmiFixed < 16) && (bmiFixed < 25)) {
                document.querySelector('.ifUnderWeight').classList.remove('none')
                document.getElementById('bmi').style.color = 'red'
                document.getElementById('diagnos').innerHTML = 'poco peso'
            }
            if ((bmiFixed > 16) && (bmiFixed < 25)) {
                document.querySelector('.ifNormal').classList.remove('none')
                document.getElementById('bmi').style.color = 'green'
                document.getElementById('diagnos').innerHTML = 'peso saludable'
            }

            if ((bmiFixed > 25) && (bmiFixed < 27)) {
                document.querySelector('.inOverWeight').classList.remove('none')
                document.getElementById('bmi').style.color = 'orange'
                document.getElementById('diagnos').innerHTML = 'exceso de peso'
            }
            if (bmiFixed > 27) {
                document.querySelector('.inOverWeight').classList.remove('none')
                document.getElementById('bmi').style.color = 'red'
                document.getElementById('diagnos').innerHTML = 'exceso de peso'
            }

        }

        setTimeout(results, 7000)
        setTimeout(barrr, 8000)



    }

    if ((weightVal > 30) && (weightVal < 130)) {
        weight.classList.add('inputCorrect')
        weight.classList.remove('inputNeutral')
        weight.classList.remove('inputWrong')
    } else {
        weight.classList.add('inputWrong')
        weight.classList.remove('inputNeutral')
        weight.classList.remove('inputCorrect')
    }

    if ((heightVal > 60) && (heightVal < 220)) {
        height.classList.add('inputCorrect')
        height.classList.remove('inputNeutral')
        height.classList.remove('inputWrong')
    } else {
        height.classList.add('inputWrong')
        height.classList.remove('inputNeutral')
        height.classList.remove('inputCorrect')
    }

    if ((ageVal >= 18) && (ageVal < 100)) {
        age.classList.add('inputCorrect')
        age.classList.remove('inputNeutral')
        age.classList.remove('inputWrong')
    } else {
        age.classList.add('inputWrong')
        age.classList.remove('inputNeutral')
        age.classList.remove('inputCorrect')
    }
}

$(document).ready(function () {
    var min = document.querySelector(".minut"),
        minOn = sessionStorage.getItem("minute"),
        sec = document.querySelector(".second"),
        secondsOn = sessionStorage.getItem("seconds")
    if (((sessionStorage.getItem("seconds")) && (sessionStorage.getItem("minute"))) === null) {
        document.querySelector(".second").innerHTML = "12"
        document.querySelector(".minut").innerHTML = "10"
        sessionStorage.setItem("minute", min.innerHTML)
    } else {
        var secInner = document.querySelector(".second").innerHTML = secondsOn
        var minInner = document.querySelector(".minut").innerHTML = minOn
    }

    function timmer() {
        var seconds = sec.innerHTML--,
            secondsStorage = sessionStorage.setItem("seconds", sec.innerHTML),
            minutesStorage = sessionStorage.setItem("minute", min.innerHTML)
        min.innerHTML = sessionStorage.getItem("minute")
        if (sec.innerHTML == 0) {
            var www = min.innerHTML--
            sec.innerHTML = 59
        }
        if (((min.innerHTML == 0) && (sec.innerHTML == 1))) {
            sessionStorage.setItem("minute", "17")
            document.querySelector(".minut").innerHTML = "17"
            document.querySelector(".second").innerHTML = "59"
        }
        if (min.innerHTML <= 9) {
            var x = 0
            min.innerHTML = "0" + min.innerHTML--
        }
        if (sec.innerHTML <= 9) {
            var x = 0
            sec.innerHTML = "0" + sec.innerHTML--
        }
    }

    setInterval(timmer, 1000)

    function check() {
        if (isNaN(sessionStorage.getItem("seconds"))) {
            sessionStorage.setItem("seconds", "12")
            document.querySelector(".second").innerHTML = "12"
            setTimeout(timer, 2e3)
        }
        if (isNaN(sessionStorage.getItem("minute"))) {
            sessionStorage.setItem("minute", "12")
            document.querySelector(".minut").innerHTML = "10"
            setTimeout(timer, 2e3)
        }
    }
    setInterval(check, 1e3)
});