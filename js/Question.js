class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Digite Seu Nome Aqui....");
    this.input2 = createInput("Digite o Nº da Opção Correta...");
    this.button = createButton('Enviar');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("Meu Questionário");
    this.title.position(width/2 - 120, 0);

    this.question.html("Pergunta:- O que é que está no meio do começo, no começo do meio, e no final do fim? " );

    this.question.position(95, 80);
    this.option1.html("1: A letra E " );
    this.option1.position(110, 110);
    this.option2.html("2: A letra M" );
    this.option2.position(210, 110);
    this.option3.html("3: A letra I" );
    this.option3.position(310, 110);
    this.option4.html("4: A letra O" );
    this.option4.position(410, 110);

    this.input1.position(180, 230);
    this.input2.position(480, 230);
    this.button.position(390, 230);

    this.button.mousePressed(()=>{

       this.message.html("Obrigado, Sua Resposta Foi Enviada");
       this.message.position(350);

    });
  }
}
