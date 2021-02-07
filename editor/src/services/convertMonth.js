const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']


export const convertMonth = date => {
  
  const year = date.slice(0, 4)
  const day = date.slice(8, 10)
  let month

  switch (date.slice(5, 7)) {
    case '01':
      month = months[0]
      break;
      case '02':
        month = months[1]
      break;
      case '03':
        month = months[2]
      break;
      case '04':
        month = months[3]
      break;
      case '05':
        month = months[4]
      break;
      case '06':
        month = months[5]
      break;
      case '07':
        month = months[6]
      break;
      case '08':
        month = months[7]
      break;
      case '09':
        month = months[8]
      break;
      case '10':
        month = months[9]
      break;
      case '11':
        month = months[10]
      break;
      case '12':
        month = months[11]
      break;
    default:
      month = 'El mes no es válido'
      break;
  }

  return {
    day,
    month,
    year
  }
}

