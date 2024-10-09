import './CadastroUser.css';

function CadastroUser(){

    let nome = "Soe";
    let profissao = "Dev dos bom"

    function soma(){
        return 2+5;
    }

    function operation(n1, n2){
        return n1*n2;
    }

    const multi = (n3, n4) => n3 * n4 

    const sum = (x , y) => x + y

    return(
        <div id="formulario">
            <form>
                {nome}, {profissao}<br/>
                Soma = {soma()}<br/>
                Operação = {operation(7, 4)}<br/>
                multiplicacao = {multi(10,5)}<br/>
                somando = {sum(10, 50)}
                <h2>Cadastre-se</h2>
                <label htmlFor='nome'>Nome</label>
                <input type='text' name='nome' id='nome'/>

                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email'/>

                <label htmlFor='cnpj'>Cnpj</label>
                <input type='cnpj' name='cnpj' id='cnpj'/>

                <label htmlFor='Password'>Password</label>
                <input type='password' name='Password' id='Password'/>

                <input type='button' value="Cadastra-se"/>
            </form>
        </div>
    )

}

export default CadastroUser;