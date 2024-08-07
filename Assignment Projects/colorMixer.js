function colorMixer(color1, color2) {
    let mixedColor;
  
    switch (color1.toLowerCase() + color2.toLowerCase()) {
      case "redblue":
      case "bluered":
        mixedColor = "purple";
        break;
      case "redyellow":
      case "yellowred":
        mixedColor = "orange";
        break;
      case "blueyellow":
      case "yellowblue":
        mixedColor = "green";
        break;
      default:
        mixedColor = "Invalid color combination";
    }
  
    console.log(mixedColor);
  }
  

  