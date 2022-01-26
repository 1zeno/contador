const dateInput = document.getElementById("dateInput");
const resultDiv = document.getElementById("test");

const submit = () => {
    const dateNow = new Date().getTime();
    const dateSelected = new Date(dateInput.value).getTime()
    const diff = dateSelected - dateNow;

    const miliseconds = (diff / 1000);
    const seconds = (miliseconds % 60);
    console.log("segundos: ",seconds)
    
    const minutes = ((miliseconds/60) % 60);
    console.log("minutos: ",minutes)
    const hours = (((miliseconds/(60*60))) % 24);
    console.log("hours: ", Math.round(hours));
    resultDiv.innerHTML = `${Math.trunc(hours)}:${Math.trunc(minutes)}:${Math.trunc(seconds)}`;
    setTimeout(()=>submit(), 1000);
}
