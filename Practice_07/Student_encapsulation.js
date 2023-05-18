class student{

        constructor(name, marks){
            
        }

        getName(){
             return this.name  ;     
        }

        setName(name){
            this.name=name;
        }

        getMark(){
            return this.marks  ;  
        }

        setMark(marks){
            this.marks=marks;
        }
}

        let c = new student()
        c.setName("Hashir")
        console.log(c.getName())