import React, {Component} from 'react';

class Button extends Component{

   acaoBotao= () =>{
       let {buttonText, acao} = this.props;
       acao(buttonText);
   }

   render(){
       let {buttonText, acao} = this.props
       return(
              <button onClick={this.acaoBotao}>{buttonText}</button>
       )
   }
}

export default Button;