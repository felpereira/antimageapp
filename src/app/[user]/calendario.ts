export enum DiaDaSemana {
    Segunda = 0,
    Terça = 1,
    Quarta = 2,
    Quinta = 3,
    Sexta = 4,
    Sabado = 5,
    Domingo = 6
}

export enum MesesDoAno {
    Janeiro,
    Fevereiro,
    Março,
    Abril,
    Maio,
    Junho,
    Julho,
    Agosto,
    Setembro,
    Outubro,
    Novembro,
    Dezembro
}

export const obterDescricaoDiaDaSemana = (
    diaDaSemana: DiaDaSemana,
    completo: boolean = false
): string => {
    switch (diaDaSemana) {
        case DiaDaSemana.Domingo:
            return 'Dom';
        case DiaDaSemana.Segunda:
            return completo ? 'Segunda-feira' : 'Seg';
        case DiaDaSemana.Terça:
            return completo ? 'Terça-feira' : 'Ter';
        case DiaDaSemana.Quarta:
            return completo ? 'Quarta-feira' : 'Qua';
        case DiaDaSemana.Quinta:
            return completo ? 'Quinta-feira' : 'Qui';
        case DiaDaSemana.Sexta:
            return completo ? 'Sexta-feira' : 'Sex';
        case DiaDaSemana.Sabado:
            return 'Sáb';
        default:
            return '';
    }
};

export const obterDescricaoMes = (mes: MesesDoAno): string => {
    switch (mes) {
        case MesesDoAno.Janeiro:
            return 'Janeiro';
        case MesesDoAno.Fevereiro:
            return 'Fevereiro';
        case MesesDoAno.Março:
            return 'Março';
        case MesesDoAno.Abril:
            return 'Abril';
        case MesesDoAno.Maio:
            return 'Maio';
        case MesesDoAno.Junho:
            return 'Junho';
        case MesesDoAno.Julho:
            return 'Julho';
        case MesesDoAno.Agosto:
            return 'Agosto';
        case MesesDoAno.Setembro:
            return 'Setembro';
        case MesesDoAno.Outubro:
            return 'Outubro';
        case MesesDoAno.Novembro:
            return 'Novembro';
        case MesesDoAno.Dezembro:
            return 'Dezembro';
        default:
            return '';
    }
};
