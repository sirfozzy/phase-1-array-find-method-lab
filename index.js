// code your solution here
function superbowlWin(win) {
    let year = win.year;
    if (win.result === "W") {
      return year;
    } else {
      return undefined;
    }
  }
  
  const finder = record.find(superbowlWin);