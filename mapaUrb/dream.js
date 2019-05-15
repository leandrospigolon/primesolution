class buttonsController{

  constructor(){

    this.run();

  }

  run(){
    var buttons = document.querySelectorAll('#botoes > a');

    buttons[0].addEventListener('click',e=>{

      document.querySelector('.maps').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63212.19676041778!2d-34.938309712428186!3d-8.023428531175929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1szonas+recife!5e0!3m2!1spt-BR!2sbr!4v1557924064834!5m2!1spt-BR!2sbr" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>`;

    });
    buttons[1].addEventListener('click',e=>{

      document.querySelector('.maps').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63210.96939986638!2d-34.92786378247175!3d-8.031316998457356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zw4FyZWEgZGUgUHJlc2VydmHDp8OjbyByZWNpZmU!5e0!3m2!1spt-BR!2sbr!4v1557923675402!5m2!1spt-BR!2sbr" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>`;

    });
    buttons[2].addEventListener('click',e=>{

      document.querySelector('.maps').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d126421.01958564187!2d-34.98594293140198!3d-8.034268995528974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spontos+de+coleta+seletiva!5e0!3m2!1spt-BR!2sbr!4v1557923286267!5m2!1spt-BR!2sbr" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>`;

    });

  }


}
var teste = new buttonsController();
