console.log('time to start the timer!');

let minutes=0;
let seconds=0;
//just wanted to make interval to make setInterval easier
let interval = (func,secs)=> timer = setInterval(func,secs);

//create my class
class Tymer {
  //start funct
  constructor(){
    this.currentTime = document.querySelector('p');
    this.startTimer = document.getElementById('start');
    this.stopTimer = document.getElementById('stop');
    this.resetTimer = document.getElementById('reset');
  }
  //start function
  startTimerFunc() {
    //adds listener on click also function will call ir self since its wrapped in ()
    this.startTimer.addEventListener('click', () =>
      interval(
        (this.startTimer = () => {
          if (seconds < 59) {
            seconds++;
          } else {
            minutes++;
            seconds = 0;
          }
          seconds < 10
            ? (this.currentTime.innerHTML = `${minutes}:0${seconds}`)
            : (this.currentTime.innerHTML = `${minutes}:${seconds}`);
        }),
        1000
      )
    );
  }
  //stop timer func
  stopTimerFunc() {
    //adds listener that uses clearInterval
    this.stopTimer.addEventListener('click', () => window.clearInterval(timer));
  }
  //reset timer
  resetTimerFunc = () => {
    //adds listener
    this.resetTimer.addEventListener('click', () => {
      //clear interval than makes top variables back to 0
      window.clearInterval(timer);
      minutes = 0;
      seconds = 0;
      return (this.currentTime.innerHTML = `${minutes}:0${seconds}`);
    });
  };
}

let myTimer = new Tymer()
myTimer.startTimerFunc()
myTimer.stopTimerFunc()
myTimer.resetTimerFunc()
