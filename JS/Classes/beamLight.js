export class Energy{
    constructor(){
        this.velocity;
        this.width;
        this.height;
    }

    create(height, width){
        this.width = width;
        this.height = height;

       let energy = document.createElement('div')
    
       energy.id = "Energy"
       energy.style.height = this.height + "px"
       energy.style.width = this.width + "px"
      
    }



}
