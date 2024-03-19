//Classe Projeto
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
        console.log('---------------Projeto----------------')
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
        console.log('--------------Tarefa-----------------')
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
    constructor
        (
            nome: string,
            descricao: string,
            tecnologia: string,
            data_inicio: Date,
            data_termino: Date,
            status_concluido: boolean,
            desenvolvedor_responsavel: string,
            protected nome_equipe: string,
            protected lider_equipe: string,
            protected memboros: string[]
        ) { super(nome, descricao, tecnologia, data_inicio, data_termino, status_concluido, desenvolvedor_responsavel) }
        mostrarDadosEquipe()
        {
            console.log('--------------Equipe-----------------')
            console.log(`Nome da equipe: ${this.nome_equipe}`);
            console.log(`Lider: ${this.lider_equipe}`);
            console.log(`Membros: ${this.memboros}`);
        }
}
const equipe1 = new Equipe
    (
        '',
        '',
        '',
        new Date('07-03-2000'),
        new Date('09-03-2023'),
        true,
        '',
        'Equipe01',
        'Luzia Valentina',
        ['Amanda Gomes','Isabelly Letícia']
    )

    equipe1.mostrarDadosEquipe()
class Funcionario {
    constructor
        (
            protected nome: string,
            protected cpf: string,
            protected data_nascimento: Date,
            protected endereco: any[],
            protected cargo: string,
            protected genero?: string
        ) { }
        mostrarDadosFuncionario()
        {
            console.log('----------Funcionario-----------')
            console.log(`Funcionario: ${this.nome}`)
            console.log(`CPF: ${this.cpf}`)
            console.log(`Data de nascimento: ${this.data_nascimento.toLocaleDateString('pt-br')}`)
            console.log(`Endereço: ${this.endereco}`)
            console.log(`Cargo: ${this.cargo}`)
        }
}

const funcionario01 = new Funcionario
    (
        'Allana Nair Teixeira',
        '99659189451',
        new Date('07-02-2003'),
        ['Rua dos bobos',10],
        'Atendente'
    )
funcionario01.mostrarDadosFuncionario()

class Desenvolvedor extends Funcionario {
    constructor
        (
            nome: string,
            cpf: string,
            data_nascimento: Date,
            endereco: any[],
            cargo: string,
            protected linguagem: string[]

        ) { super(nome, cpf, data_nascimento, endereco, cargo) }
        mostrarDadosDesenvolvedor()
        {
            console.log('----------Desenvolvedor-----------')
            console.log(`Funcionario: ${this.nome}`)
            console.log(`CPF: ${this.cpf}`)
            console.log(`Data de nascimento: ${this.data_nascimento.toLocaleDateString('pt-br')}`)
            console.log(`Endereço: ${this.endereco}`)
            console.log(`Cargo: ${this.cargo}`)
            console.log(`Linguagem: ${this.linguagem}`)
        }
}