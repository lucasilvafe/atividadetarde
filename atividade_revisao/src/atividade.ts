class Projeto
{
    constructor
        (
            protected nome: string,
            protected descricao: string,
            protected tecnologia: string,
            protected data_inicio: Date,
            protected data_termino: Date,
            protected status_andamento: boolean,
            protected status_concluido: boolean,
            protected desenvolvedor_responsavel: string
            
        ) { }
       
}
const projeto1 = new Projeto('Projeto Pequeno', 'Atualização de software de segurança de Microondas', 'MicroWave10', new Date('11-11-2000'), new Date('11-11-2017'), false, false,'Responsavel: Lucas')
const projeto2 = new Projeto('Projeto Grande', 'Criação de software de segurança de Microondas', 'MicroWave11', new Date('11-11-2020'), new Date('11-11-2026'), false, false,'Responsavel: Eduanea')
console.log(projeto1)
//console.log(projeto2)
console.log(projeto1)
class Tarefa
{
    constructor
    (
        protected nome_tarefa: string,
        protected descricao: string,
        protected desenvolvedor_responsavel: string,
        protected prazo: Date,
        protected status_pendente: Date,
        protected status_execucao: Date,
        protected status_concluida: Date
    ) { }
}
class Equipe extends Projeto
{
    constructor
    (
        protected lider:string
        
    ) {
        super()
    }
}

class Funcionario
{
    constructor
    (

    ) { }
}

class Desenvolvedor
{
    constructor
    (

    ) { }
}