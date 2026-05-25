import React, { useState } from 'react';

function Notas() {

    const Receberinfo = () => ({
        nomedoaluno: "",
        disciplina: "",
        notadostestes: '',
        percentagemdostestes: '',
        notadostrabalhos: '',
        percentagemdostrabalhos: '',
        notadasatitudes: '',
        percentagemdostrabalhos: '',

    });

    const [tarefas, setTarefas] = useState([]);

    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);

    function handleSubmit(e) {
        e.preventDefault(); 
        setDadosSubmetidos(formData); 
        const novaTarefa = {
            id: Date.now(),
            nomedoaluno: formData.nomedoaluno,
            notadostestes: formData.notadostestes,
            percentagemdostestes: formData.percentagemdostestes,
            data: formData.data,
            descricao: formData.descricao
        };
        setTarefas([...tarefas, novaTarefa]);
    }

    function calcular() {

    }

    return (
        <div className=" mt-4 row">

            <div className="col-6">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>Nome do aluno</label>
                        <input type="text" className="form-control" value={formData.nomedoaluno} onChange={(e) =>
                            setFormData({ ...formData, nomedoaluno: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label>Nota dos testes</label>
                        <input type="number" className="form-control" value={formData.notadostestes} onChange={(e) =>

                            setFormData({ ...formData, notadostestes: parseFloat(e.target.value) || 0 })} required />
                    </div>
                    <div className="form-group">
                        <label>Percentagem dos testes</label>
                        <input type="number" className="form-control" value={formData.percentagemdostestes} onChange={(e) =>

                            setFormData({ ...formData, percentagemdostestes: parseFloat(e.target.value) || 0 })} required />
                    </div>
                    <div className="form-group">
                        <label>Percentagem dos trabalhos</label>
                        <input type="number" className="form-control" value={formData.percentagemdostrabalhos} onChange={(e) =>

                            setFormData({ ...formData, percentagemdostrabalhos: parseFloat(e.target.value) || 0 })} required />
                    </div>
                    <div className="form-group">
                        <label>Nota dos trabalhos</label>
                        <input type="number" className="form-control" value={formData.notadostrabalhos} onChange={(e) =>

                            setFormData({ ...formData, notadostrabalhos: parseFloat(e.target.value) || 0 })} required />
                    </div>
                    <div className="form-group">
                        <label>Nota das atitudes</label>
                        <input type="number" className="form-control" value={formData.notadasatitudes} onChange={(e) =>

                            setFormData({ ...formData, notadasatitudes: parseFloat(e.target.value) || 0 })} required />
                    </div>

                    <button type="button" class="btn btn-outline-dark">calcular</button>
                    onClick={calcular}

                </form>
            </div>

            <div className="col-6">
                {dadosSubmetidos && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Dados Recebidos</h5>
                            <p><strong>Nome do aluno:</strong> {dadosSubmetidos.nomedoaluno}</p>
                            <p><strong>Nota dos testes:</strong> {dadosSubmetidos.notadostestes}</p>
                            <p><strong>Percentagem dos testes:</strong> {dadosSubmetidos.percentagemdostestes}</p>
                            <p><strong>Percentagem dos trabalhos:</strong> {dadosSubmetidos.percentagemdostrabalhos}</p>
                            <p><strong>Nota dos trabalhos:</strong> {dadosSubmetidos.notadostrabalhos}</p>
                            <p><strong>Nota das atitudes:</strong> {dadosSubmetidos.notadasatitudes}</p>
                            <button type="button" className="btn btn-outline-secondary"
                                onClick={() => eliminaTarefa(formData.id)}>Eliminar</button>
                        </div>
                    </div>
                )}

                <ul className="list-group mt-4">
                    {tarefas.map((notas) => (
                        <li key={notas.id} className="list-item">
                            <p>{notas.nomedoaluno}</p>
                            <p>{notas.notadostestes}</p>
                            <p>{notas.percentagemdostestes}</p>
                            <p>{notas.percentagemdostrabalhos}</p>
                            <p>{notas.notadostrabalhos}</p>
                            <p>{notas.notadasatitudes}</p>
                            <button type="button" className="btn btn-outline-dark"
                                onClick={() => calcular(notas.id)}>Calcular</button>
                        </li>
                    ))}
                </ul>

            </div>
        </div>

    );
}
export default Notas;