import { useState } from 'react'
import DropdownList from "../DropdownList"
import TextField from "../TextField"
import Button from "../Button"
import "./Form.css"

export const Form = (props) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('ATLANTA REIGN')

    function save(e) {
        e.preventDefault();
        props.registeredPlayer({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
    }

    return (
        <section className="form">
            <form onSubmit={ save }>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <TextField 
                    required={ true } 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={ nome }
                    updatedValue={ value => setNome(value)} />
                <TextField 
                    required={ true } 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={ cargo }
                    updatedValue={ value => setCargo(value)} />
                <TextField 
                    required={ true } 
                    label="Imagem" 
                    placeholder="Digite seu endereço da imagem"
                    value={ imagem }
                    updatedValue={ value => setImagem(value) } />
                <DropdownList 
                    required={ true } 
                    label="Time" 
                    items={ props.teams }
                    value={ time }
                    updatedValue={ value => setTime(value) } />
                <Button>Criar Cargo</Button>
            </form>
        </section>
    )
}