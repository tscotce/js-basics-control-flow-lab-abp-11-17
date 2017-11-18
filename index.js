function scuberGreetingForFeet (distance) {
  if (distance <= 400){
    return 'This one is on me!'
  }
  else if (distance > 2000 && distance < 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else if (distance > 2500){
    return 'No can do.'
  }
}
function ternaryCheckCity (city) {
  // if (city === 'NYC'){
  //   return 'Ok, sounds good.'
  // }
  // else if (city !== 'NYC'){
  //   return 'No go.'
  // }
  return (city === 'NYC') ? 'Ok, sounds good.' : 'No go.'
}
function switchOnCharmFromTip (tip) {
  // if (tip === 'generous') {
  //   return 'Thank you so much.'
  // }
  // else if (tip === 'not as generous') {
  //   return 'Thank you.'
  // }
  // else if (tip !== 'generous' && tip !== 'not as generous'){
  //   return 'Bye.'}
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    case 'thanks for everything':
      return 'Bye.'
  }
}
