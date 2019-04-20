function Snake(besarUlar){
		this.x;
		this.y;
		this.panjangTubuhSaatIni = 15;
		this.speed;
		this.tubuhSnake = [{x:this.x,y:this.y}];
		this.besarUlar = besarUlar;
		this.jarakAntaraTubuhUlar = 2;
		
		this.move = function(sudut){
			this.x += Math.cos(sudut*Math.PI/180)*this.jarakAntaraTubuhUlar;
			this.y += Math.sin(sudut*Math.PI/180)*this.jarakAntaraTubuhUlar;
		}
		
		this.setSpeed = function(speed){
			this.speed = speed;
		}
		
		this.getSpeed = function(){
			return this.speed;
		}
		
		this.getBesarUlar = function(){
			return this.besarUlar;
		}
		
		this.getTubuhSnake = function(){
			return this.tubuhSnake;
		}
		
		this.getPanjangTubuh = function(){
			return this.panjangTubuhSaatIni;
		}
		
		this.getX = function(){
			return this.x;
		}
		
		this.getY = function(){
			return this.y;
		}
}