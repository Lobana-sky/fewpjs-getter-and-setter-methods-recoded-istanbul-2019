// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius=radius;
  }
  
  get diameter(){
    return this.radius*2;
  } 
  get circumference(){
    return Math.PI* this.radius*2;
  } 
  get area(){
    return Math.PI* this.radius*this.radius;
  }
  
  
  
  set diameter(dia){
    this.radius=dia/2;
  } 
  set circumference(cir){
    
    this.radius=cir/(Math.PI*2);
  } 
  set area(ara){
    this.radius=Math.sqrt(ara/Math.PI);
    
  }
  
}