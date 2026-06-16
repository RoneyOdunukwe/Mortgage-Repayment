'use strict';

const theForm = document.getElementById("theform");
const firstInput = document.getElementById("mortgageamountp");
const errorFirstInput = document.querySelector(".error1st");
const numberFirstInput = document.querySelector(".number1st");
const realdiv = document.querySelector(".realdiv");
const nairaBG = document.querySelector(".nairabg");
const errorSound = new Audio("error.mp3");

const SecondInput = document.querySelector(".yearsbginput");
const fakediv2child1 = document.querySelector(".fakediv2child1");
const errorSecondInput = document.querySelector(".error2nd");
const numberSecondInput = document.querySelector(".number2nd");
const yearsBG = document.querySelector(".yearsbg");

const ThirdInput = document.querySelector(".percentagebginput");
const fakediv2child2 = document.querySelector(".fakediv2child2");
const errorThirdInput = document.querySelector(".error3rd");
const numberThirdInput = document.querySelector(".number3rd");
const percentageBG = document.querySelector(".percentagebg")

const errorFourth = document.querySelector(".error4th");
const resetBtn = document.querySelector(".reset");

const repaymentsresults = document.querySelector(".repaymentsresults");
const resultshownhere = document.querySelector(".resultshownhere");

const Repayment = document.getElementById("repayoption");
const interestOpt = document.getElementById("interestoption");
const submitbtn = document.querySelector(".submitbtn");

const monthlyrepay = document.querySelector('.yourmonthlymoney');
const totalrepay = document.querySelector('.totalnaira');

function calculateRepayments(e) {
    e.preventDefault();
    function removeError() {
        realdiv.classList.remove('error');
    }
    function removeError2nd() {
        fakediv2child1.classList.remove("error");
    }

    function removeError3rd() {
        fakediv2child2.classList.remove("error");
    }
    // amount
    if (firstInput.value == "") {
        errorSound.play();
        setTimeout(100);
        realdiv.classList.add("error");
        setTimeout(removeError, 400);
        errorFirstInput.classList.add("error");
        numberFirstInput.classList.remove("error");
        nairaBG.classList.add("error");
    }
    else if (isNaN(firstInput.value)) {
        errorSound.play();
        setTimeout(100);
        errorFirstInput.classList.remove("error");
        realdiv.classList.add("error");
        setTimeout(removeError, 400);
        numberFirstInput.classList.add("error");
        nairaBG.classList.add("error");
    }
    // term or years
    else if (SecondInput.value == ""){
        errorSound.play();
        setTimeout(100);
        fakediv2child1.classList.add("error");
        setTimeout(removeError2nd, 400);
        errorSecondInput.classList.add("error");
        numberSecondInput.classList.remove("error");
        yearsBG.classList.add("error");
    }
    else if (isNaN(SecondInput.value)) {
        errorSound.play();
        setTimeout(100);
        errorSecondInput.classList.remove("error");
        fakediv2child1.classList.add("error");
        setTimeout(removeError2nd, 400);
        numberSecondInput.classList.add("error");
        yearsBG.classList.add("error");
    }
    // interest rate
    else if (ThirdInput.value == ""){
        errorSound.play();
        setTimeout(100);
        fakediv2child2.classList.add("error");
        setTimeout(removeError3rd, 400);
        errorThirdInput.classList.add("error");
        numberThirdInput.classList.remove("error");
    }
    else if(isNaN(ThirdInput.value)){
        errorSound.play();
        setTimeout(100);
        errorThirdInput.classList.remove("error");
        fakediv2child2.classList.add("error");
        setTimeout(removeError3rd, 400);
        numberThirdInput.classList.add("error");
    }
    else if(Repayment.checked == false && interestOpt.checked == false){
        errorSound.play();
        setTimeout(100);
        errorFourth.classList.add("error");
    }
    else if(Repayment.checked == true || interestOpt.checked == true){
        errorFourth.classList.remove("error");
        resultshownhere.classList.remove("active");
        repaymentsresults.classList.add("active");
        let MA = Number(firstInput.value);
        let MT = Number(SecondInput.value);
        let IR = Number(ThirdInput.value) / 100;
        let monthlyMIR = IR / 12;
        let months = MT * 12;
        let TotalAmount = MA * (1 + IR / 12)**(12 * MT);
        if (Repayment.checked == true) {
            document.querySelector(".yourmonthlyrepayments").textContent = "Your monthly Repayments";
            document.querySelector(".totalyougopay").textContent = "Total you'll repay over the term"
            totalrepay.textContent = "₦" + Number(TotalAmount.toFixed(3));
            monthlyrepay.textContent = "₦" + Number((Number(TotalAmount.toFixed(3)) / (12 * MT)).toFixed(3));
        }
        else if (interestOpt.checked == true) {
            document.querySelector(".yourmonthlyrepayments").textContent = "Your monthly interest to be paid";
            document.querySelector(".totalyougopay").textContent = "Your total interest to be paid"
            totalrepay.textContent = "₦" + Number((TotalAmount - MA).toFixed(3));
            monthlyrepay.textContent = "₦" + Number((Number((TotalAmount - MA).toFixed(3)) / (12 * MT)).toFixed(3));
        }

        
    }

    // else if() {
    //     // All inputs are valid, perform calculation
    //     resultshownhere.classList.remove("active");
    //     repaymentsresults.classList.remove("active");
    //     console.log("fat");
        
    //     let P = parseFloat(firstInput.value);
    //     let Y = parseFloat(SecondInput.value);
    //     let annualRate = parseFloat(ThirdInput.value) / 100;
    //     let monthlyRate = annualRate / 12;
    //     let months = Y * 12;
    //     let monthlyPayment, totalPayment;


    //     if (Repayment.checked) {
    //         if (monthlyRate === 0) {
    //             monthlyPayment = P / months;
    //             totalPayment = P;
    //         } else {
    //             monthlyPayment = P * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    //             totalPayment = monthlyPayment * months;
    //         }
    //         document.querySelector('.yourmonthlyrepayments').textContent = 'Your Monthly Repayments';
    //         document.querySelector('.totalyougopay').textContent = 'Total you\'ll repay over the term';
    //     } else {
    //         // Interest only
    //         monthlyPayment = P * monthlyRate;
    //         totalPayment = (monthlyPayment * months) + P;
    //         document.querySelector('.yourmonthlyrepayments').textContent = 'Your Monthly Interest';
    //         document.querySelector('.totalyougopay').textContent = 'Total you\'ll repay over the term';
    //     }

    //     document.querySelector('.yourmonthlymoney').textContent = '₦' + monthlyPayment.toFixed(2);
    //     document.querySelector('.totalnaira').textContent = '₦' + totalPayment.toFixed(2);

    //     // Show results
    //     document.querySelector('.resultshownhere').style.display = 'none';
    //     document.querySelector('.repaymentsresults').style.display = 'flex';
    // }
}

theForm.addEventListener("submit", calculateRepayments);

    function changesubmitbtn () {
    if (Repayment.checked == true) {
        submitbtn.innerHTML = '<img src="./images/icon-calculator.svg" alt=""> Calculate Repayments'
    }
    else if (interestOpt.checked == true) {
        submitbtn.innerHTML = '<img src="./images/icon-calculator.svg" alt=""> Calculate Interest Only'
    }
    }
    Repayment.addEventListener("click", changesubmitbtn);
    interestOpt.addEventListener("click", changesubmitbtn);

function removeErrors1st() {
    
    if (!isNaN(firstInput.value)) {
        errorFirstInput.classList.remove("error");
        numberFirstInput.classList.remove("error");
        nairaBG.classList.remove("error");
    }
    else if(isNaN(firstInput.value)) {
        numberFirstInput.classList.add("error");
        errorFirstInput.classList.remove("error");
        nairaBG.classList.add("error");
    }
    // else if(firstInput.value == ""){
    //     numberFirstInput.classList.remove("error");
    //     errorFirstInput.classList.add("error");
    // }
}
firstInput.addEventListener("input", removeErrors1st);

function removeErrors2nd() {
    if(!isNaN(SecondInput.value)) {
        errorSecondInput.classList.remove("error");
        numberSecondInput.classList.remove("error");
        yearsBG.classList.remove("error");
    }
    else if(isNaN(SecondInput.value)) {
        numberSecondInput.classList.add("error");
        errorSecondInput.classList.remove("error");
        yearsBG.classList.add("error");
    }
}

SecondInput.addEventListener("input", removeErrors2nd)

function removeErrors3rd() {
    if(!isNaN(ThirdInput.value)){
    errorThirdInput.classList.remove("error");
    numberThirdInput.classList.remove("error");
    percentageBG.classList.remove("error");
    }
    else if(isNaN(ThirdInput.value)){
        numberThirdInput.classList.add("error");
        errorThirdInput.classList.remove("error");
        percentageBG.classList.add("error")
    }
}


ThirdInput.addEventListener("input", removeErrors3rd);

function resetResults() {
    resultshownhere.classList.add("active");
    repaymentsresults.classList.remove("active");
    document.querySelector('.yourmonthlymoney').textContent = '₦0.00';
    document.querySelector('.totalnaira').textContent = '₦0.00';
    removeErrors1st();
    removeErrors2nd();
    removeErrors3rd();
}

resetBtn.addEventListener("click", resetResults);

