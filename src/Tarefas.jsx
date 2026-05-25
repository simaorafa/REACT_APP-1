import React, { useState } from 'react';

function Tarefas() {

    const [formData, setFormData] = useState({
        id: "",
        titulo: '',
        data: '',
        descricao: '',
    });

    const [tarefas, setTarefas] = useState([]);

    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);

    // Esta função é chamada quando o formulário é submetido
    function handleSubmit(e) {
        e.preventDefault(); // impede o recarregamento da página
        setDadosSubmetidos(formData); // guarda os dados preenchidos
        const novaTarefa = {
            id: Date.now(),
            titulo: formData.titulo,
            data: formData.data,
            descricao: formData.descricao
        };
        setTarefas([...tarefas, novaTarefa]);
    }
    // Limpa o formulário e os dados apresentados
    function limparFormulario() {
        setFormData({ id: "", titulo: '', data: '', descricao: '' });
        setDadosSubmetidos(null);

    }

    function novaTarefa() {
        const novaTarefa = {
            id: Date.now(),
            titulo: "Euzinho",
            data: "2024-02-10",
            descricao: "ui ui ui"
        };
        setFormData(novaTarefa);
        setTarefas([...tarefas, novaTarefa]);
        setDadosSubmetidos(null);
    }

    function eliminaTarefa(id) {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    }

       function limparTarefas(id) {
        setTarefas([]);
    }

    return (
        <div className=" mt-4 row">

            <div className="col-6">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>Titulo</label>
                        <input type="text" className="form-control" value={formData.titulo} onChange={(e) =>

                            setFormData({ ...formData, titulo: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label>Data</label>
                        <input type="date" className="form-control" value={formData.data} onChange={(e) =>

                            setFormData({ ...formData, data: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label>Descrição</label>
                        <input type="text" className="form-control" value={formData.descricao} onChange={(e) =>

                            setFormData({ ...formData, descricao: e.target.value })} />
                    </div>
                    {/* Botões de ação */}
                    <button className="btn btn-success mr-2">Enviar</button>

                    <button type="button" className="btn btn-outline-secondary"
                        onClick={limparFormulario}>Limpar</button>

                    <button type="button" className="btn btn-outline-secondary"
                        onClick={novaTarefa}>Nova Tarefa</button>

                    <button type="button" className="btn btn-success mr-2y"
                        onClick={() => limparTarefas(formData.id)}>limpar tarefas</button>

                </form>
            </div>

            <div className="col-6">
                {dadosSubmetidos && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Dados Recebidos</h5>
                            <p><strong>Titulo:</strong> {dadosSubmetidos.titulo}</p>
                            <p><strong>Data:</strong> {dadosSubmetidos.data}</p>
                            <p><strong>Descrição:</strong> {dadosSubmetidos.descricao}</p>
                        <button type="button" className="btn btn-outline-secondary"
                        onClick={() => eliminaTarefa(formData.id)}>Eliminar</button>
                        </div>
                    </div>
                )}

                <ul className="list-group mt-4">
                    {tarefas.map((tarefa) => (
                        <li key={tarefa.id} className="list-group-item">
                            <p>{tarefa.titulo}</p>
                            <p>{tarefa.data}</p>
                            <p>{tarefa.descricao}</p>
                     <button type="button" className="btn btn-outline-secondary"
                        onClick={() => eliminaTarefa(formData.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>

            </div>
        </div>

    );
}
export default Tarefas;