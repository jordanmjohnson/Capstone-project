class weeklyprogress {
  constructor(currweek, prevweek){
  //return last weeks results 
  //use this weeks results
  this.currweek = 14; 
  this.prevweek = 6;
  alert ("you have ran 7 less miles this week");
}
  getCurrweek(){
     return ( this.currweek + " miles " + " have been ran this week " );
  }

  getPrevweek(){
    return ( this.prevweek + " miles " + " were ran last week ");
  };

function compare() {
 if (this.currweek < this.prevweek);
 //add difference of miles
    alert( "You have done this much less" );
  else
    alert( "You have done this much more " );
 //add difference of miles
}
}
