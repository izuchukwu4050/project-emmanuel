
let labels = [1,2,3,6,9,8,7,4];
let clockWiseMirror = [];
const antiClockWiseMirror = [];
const allOtherBtns = document.querySelectorAll(".submit");
const btnFive = document.querySelector('.anti');


const clockWise = () => {
	labels.forEach((label,index,array) => {
        if(index > 0)
        clockWiseMirror[index] = array[index - 1];
        else
        clockWiseMirror[index] = array[7];
        })
        labels = [...clockWiseMirror];
}
const antiClockWise = () => {
        labels.forEach((label,index,array)=> {
        if(index < 7)
        antiClockWiseMirror[index] = array[index + 1];
        else
        antiClockWiseMirror[index] = array[0];
        })
        labels = [...antiClockWiseMirror];
}



const startApp = () => {
 let [first,second,third,fourth,sixth,seventh,eighth,ninth] = allOtherBtns;
 allOtherBtns.forEach((el,index)=>{
        el.addEventListener('click',(e)=> {
                antiClockWise();
                first.textContent = labels[0];
                second.textContent = labels[1];
                third.textContent = labels[2];
                fourth.textContent = labels[7];
                sixth.textContent = labels[3];
                seventh.textContent = labels[6];
                eighth.textContent = labels[5];
                ninth.textContent = labels[4];
                e.preventDefault();
        })
 })
 btnFive.addEventListener('click', (e) => {
        clockWise();
        first.textContent = labels[0];
        second.textContent = labels[1];
        third.textContent = labels[2];
        fourth.textContent = labels[7];
        sixth.textContent = labels[3];
        seventh.textContent = labels[6];
        eighth.textContent = labels[5];
        ninth.textContent = labels[4];
        e.preventDefault();
 })
 }
startApp();