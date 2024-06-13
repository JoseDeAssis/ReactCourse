import { useState } from 'react'
import DropdownList from "../DropdownList"
import Field from "../Field"
import Button from "../Button"
import "./Form.css"
import { v4 as uuidv4 } from "uuid";

export const Form = (props) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('ATLANTA REIGN')
    const [nomeTime, setNomeTime] = useState('');
    const [timeCorPrimária, setTimeCorPrimária] = useState('');
    const [timeCorSecundaria, setTimeCorSecundaria] = useState('');
    const [timeCorTerciaria, setTimeCorTerciaria] = useState('');

    function save(e) {
        e.preventDefault();
        props.registeredPlayer({
            id: uuidv4(),
            favorite: false,
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
                <Field 
                    required={ true } 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={ nome }
                    updatedValue={ value => setNome(value)} />
                <Field 
                    required={ true } 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={ cargo }
                    updatedValue={ value => setCargo(value)} />
                <Field 
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
            <form onSubmit={ (event) => {
                event.preventDefault();
                props.createTeam({ 
                    name: nomeTime, 
                    primaryColor: timeCorPrimária,
                    secondaryColor: timeCorSecundaria,
                    tertiaryColor: timeCorTerciaria    
                })
            }}>
                <h2>Preencha os dados para criar o card do novo time:</h2>
                <Field 
                    required
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={ nomeTime }
                    updatedValue={ value => setNomeTime(value)} />
                <Field 
                    required 
                    type='color'
                    label="Cor primária" 
                    placeholder="Digite a cor primária do time"
                    value={ timeCorPrimária }
                    updatedValue={ value => setTimeCorPrimária(value)} />
                <Field 
                    required 
                    type='color'
                    label="Cor secundária" 
                    placeholder="Digite a cor secundária do time"
                    value={ timeCorSecundaria }
                    updatedValue={ value => setTimeCorSecundaria(value)} />
                <Field 
                    required 
                    type='color'
                    label="Cor terciária" 
                    placeholder="Digite a cor terciária do time"
                    value={ timeCorTerciaria }
                    updatedValue={ value => setTimeCorTerciaria(value)} />
                <Button>Criar Novo Time</Button>
            </form>
        </section>
    )
}