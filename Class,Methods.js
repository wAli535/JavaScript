
class Status{
    constructor(name,id,icon){
        this.name=name;
        this.id=id;
        this.icon=icon;
    }
    summary(){
        return `Name : ${this.name},Id : ${this.id},Icon : ${this.icon}`
    }
}

class Catagory{
    constructor(id,name,image){
        this.id=id;
        this.name=name;
        this.image=image;
    }
    summary2(){
        return `Id : ${this.id}, Name: ${this.name},Image : ${this.image}`
    }
}

class Bakery{
        static id = "1";
        static product = "Lays";
        static price = "100";
    }


    