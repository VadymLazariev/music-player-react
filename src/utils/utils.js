export function formatTime(seconds) {

  const secondInHour = 3600;
  const minutesInHour = 60;

  const hh = Math.floor(seconds / secondInHour);
  const mm = Math.floor((seconds - (hh * secondInHour)) / minutesInHour);
  const ss = seconds - (hh * secondInHour) - (mm * minutesInHour);

  if(ss < 10){
    return `${mm}:0${ss}`;
  }else if(mm < 10){
    return `0${mm}:${ss}`;
  }else if(mm < 10 && ss < 10){
    return `0${mm}:0${ss}`;
  }
  return `${mm}:${ss}`;
}

export function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

