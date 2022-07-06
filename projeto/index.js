// Aplicacao geral do site

// configuração geral do relógio
setInterval(function relogio(){
    let elementoId = document.getElementById('hora_resultado')
    let horaLocal = new Date().toLocaleTimeString('pt-br')
    elementoId.innerHTML = horaLocal
}, 0);

// Configuração do dia e semana
function daySem(){
    let elementoDiaDaSemana = new Date()
    let dia_semanal = elementoDiaDaSemana.getDay()
    let daySemana = new Date()
    let day = daySemana.getDay()
    let elementoId = document.getElementById('dia_semana')
            switch (day) {
                case 0:
                    elementoId.innerHTML = `DIa: ${dia_semanal}, Domingo`
                    break;
                case 1:
                    elementoId.innerHTML = `Dia: ${dia_semanal}, Segunda-Feira`
                    break;
                case 2:
                    elementoId.innerHTML = `Dia: ${dia_semanal}, Terça-Feira`
                    break;
                case 3: 
                    elementoId.innerHTML = `Dia: ${dia_semanal}, Quarta-feira`
                    break;
                case 4:
                    elementoId.innerHTML = `Dia: ${dia_semanal}, Quinta-Feira`
                    break;
                case 5:
                    elementoId.innerHTML = `Dia: ${dia_semanal}, Sexta-Feira`
                    break;
                case 6:
                    elementoId.innerHTML = `Dia: ${dia_semanal} Sábado`
                    break;
                case 7: 
                    elementoId.innerHTML = `Dia: ${dia_semanal}, Domingo`
                    break;
                default: 
                    elementoId.innerHTML = 'Não encontrado'
    }
}
daySem()