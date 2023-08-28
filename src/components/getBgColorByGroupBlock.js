const bgColor = (props) => {

    switch(props.groupBlock){
      case 'Неметалл':
        return '#76ED69';
      case 'Щелочной металл':
        return '#EB984E';
      case 'Щелочноземельный металл':
        return '#F4D03F';
      case 'Полупроводник':
        return '#EC7063';
      case 'Металл':
        return '#73C6B6';
      case 'Полуметалл':
        return '#85C1E9';
      case 'Галлоген':
        return '#17A589';
      case 'Инертный газ':
        return '#A569BD';
      case 'Лантанид':
        return '#40E0D0';
      case 'Актинид' :
        return'#CCCCFF';
    }
  }
export default bgColor;
