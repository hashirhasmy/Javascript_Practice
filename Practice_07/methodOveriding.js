class Bank{
    roi(){
        return 50;
    }
}

class BOC extends Bank{
    roi(){
        return 100.75;
    }
}

class People extends Bank{
    roi(){
        return "dollars";
    }
}

people = new People();
console.log(people.roi());

boc = new BOC();
console.log(boc.roi());

bank = new Bank();
console.log(bank.roi());
