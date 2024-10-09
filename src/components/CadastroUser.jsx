import './CadastroUser.css';

function CadastroUser(){
    let nome = "Soe";
    let profissao = "Dev dos bom"

    async function salvar(){
        let dados = await fetch("http://localhost:8000/h2-console/api/produtos/salvar");
    
        let resposta = await dados.json();

        if (resposta.ok){
                console.log(resposta)
                return
        }
        console.log(resposta)
    }



    return(
        <div id="formulario">
            <form>
                {nome}, {profissao}<br/>
                <h2>Cadastre-se</h2>
                <label htmlFor='nome'>Nome</label>
                <input type='text' name='nome' id='nome'/>

                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email'/>

                <label htmlFor='cnpj'>Cnpj</label>
                <input type='cnpj' name='cnpj' id='cnpj'/>

                <label htmlFor='Password'>Password</label>
                <input type='password' name='Password' id='Password'/>

                <input onClick={salvar} type='button' value="Cadastra-se"/>
            </form>
        </div>
    );

}

export default CadastroUser;