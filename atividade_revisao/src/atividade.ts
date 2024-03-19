class Projeto {
    constructor
        (
            protected nome: string,
            protected descricao: string,
            protected tecnologia: string,
            protected data_inicio: Date,
            protected data_termino: Date,
            protected status_concluido: boolean,
            protected desenvolvedor_responsavel: string

        ) { }
    mostrarDadosProjeto() {
        console.log('-------------------------------')
        console.log(`Nome do projeto: ${this.nome}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Tecnologia: ${this.tecnologia}`);
        console.log(`Data de inicio: ${this.data_inicio.toLocaleDateString('pt-br')}`);
        console.log(`Data de termino: ${this.data_termino.toLocaleDateString('pt-br')}`);
        console.log(`Responsavel: ${this.desenvolvedor_responsavel}`);
        console.log(`Projeto concluido: ${this.status_concluido}`)
    }
}

const projeto1 = new Projeto
    (
        'Projeto Pequeno',
        'Atualização de software de segurança de Microondas',
        'MicroWave10',
        new Date('11-11-2000'),
        new Date('11-11-2017'),
        true,
        'Lucas'
    )

projeto1.mostrarDadosProjeto()

const projeto2 = new Projeto
    (
        'Projeto Grande',
        'Criação de software de segurança de Microondas',
        'MicroWave11',
        new Date('5-19-2005'),
        new Date('2-8-2026'),
        false,
        'Eduanea'
    )
    projeto2.mostrarDadosProjeto()

class Tarefa {
    constructor
        (
            protected nome_tarefa: string,
            protected descricao: string,
            protected desenvolvedor_responsavel: string,
            protected prazo: Date,
            protected status_pendente: boolean,
            protected status_execucao: boolean,
            protected status_concluido: boolean
        ) { }
        mostrarDadosTarefa() {
            console.log('-------------------------------')
            console.log(`Nome da tarefa: ${this.nome_tarefa}`);
            console.log(`Descrição: ${this.descricao}`);
            console.log(`Desenvolvedor responsavel: ${this.desenvolvedor_responsavel}`);
            console.log(`Prazo: ${this.prazo.toLocaleDateString('pt-br')}`);
            console.log(`Pendente: ${this.status_pendente}`);
            console.log(`Execução: ${this.status_execucao}`);
            console.log(`Concluido: ${this.status_concluido}`)
        }
}

const tarefa01 = new Tarefa
    (
        'Preparar o âmbiente',
        'Fazer todas as configurações necessárias para executar o código jajava',
        'Ednaldo Pereira',
        new Date('05-05-2025'),
        true,
        true,
        false
    )
    tarefa01.mostrarDadosTarefa()
class Equipe extends Projeto {

}

class Funcionario {
    constructor
        (

    ) { }
}

class Desenvolvedor {
    constructor
        (

    ) { }
}