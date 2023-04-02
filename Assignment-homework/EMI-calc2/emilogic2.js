const details={
    p:0,//principle
    r:0,//rate of interest
    t:0,//time in year 
    Total_Month(){
        return this.t*12;
    },
    Rate_of_Interest(){
        return this.r/100;

    },
    EMI_Per_Month(){
        return (this.p*this.Rate_of_Interest()*this.t+this.p)/this.Total_Month();

    },
    Total_Interest(){
        return this.p*this.Rate_of_Interest();

    },
    Total_Payable_Amount(){
        return this.p+this.Total_Interest();

    }
}
export default details;