const details={
    p:0,//principle
    r:0,//rate of interest
    t:0,//time in year 
    calmonth(){
        return this.t*12;
    },
    calRindigit(){
        return this.r/100;

    },
    emicalc(){
       return (this.p*this.calRindigit()*this.t+this.p)/this.calmonth();

    },
    interestcalc(){
        return this.p*this.calRindigit();

    },
    totalamountcalc(){
        return this.p+this.interestcalc();

    }
}