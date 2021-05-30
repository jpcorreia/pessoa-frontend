import {useState} from "react";
import "./style.css"

function Pessoa() {

    const [form, setForm] = useState({})

    const [pessoas, setPessoas] = useState([
        {nome: "Rafael", telefone: "9999999"},
        {nome: "Vitor", telefone: "9999998"},
        {nome: "Will", telefone: "9999997"},
        {nome: "Diego", telefone: "9999996"},
    ]);

    function adicionarPessoa() {

        // Cria uma nova lista para ser atualizada.
        const novaLista = [...pessoas];

        // Adicionando nova pessoa na lista
        novaLista.push(form);

        // Atualiza Lista de Pessoas
        setPessoas(novaLista);

        setForm({nome: '', telefone: ''});
    }

    function mudarValor(event) {

        const campo = event.target.name;

        setForm({...form, [campo]: event.target.value})
    }

    return (
        <div className={'conteudo'}>

            <h4>Lista Pessoa</h4>

            <table>

                <tr>

                    <th>Nome</th>
                    <th>Telefone</th>

                </tr>

                {pessoas.map(pessoa => (

                    <tr>

                        <td>{pessoa.nome}</td>
                        <td>{pessoa.telefone}</td>

                    </tr>

                ))}

            </table>

            <hr/>

            <input type={'text'} placeholder={'nome'} value={form.nome} name={'nome'} onChange={mudarValor}/>

            <input type={'text'} placeholder={'telefone'} value={form.telefone} name={'telefone'} onChange={mudarValor}/>

            <input type={'button'} value={'Adicionar'} className={'botaoAdicionar'} onClick={adicionarPessoa}/>

            <input type={'button'} value={'Remover'} className={'botaoRemover'}/>

        </div>
    );
}

export default Pessoa;