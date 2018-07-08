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