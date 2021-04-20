function validar() {
    if (confereCampo('nome') == true) {
        document.getElementById('ErrorNome').innerHTML = "Digite um nome";
    } else {
        if (verificaTamNome('nome') == true) {
            document.getElementById('ErrorNome').innerHTML = "Tamanho do nome excedido. Limite máximo de 50 caracteres."
        }
        else {
            document.getElementById('ErrorNome').innerHTML = "";
        }
    }
    if (confereCampo('cep') == true) {
        document.getElementById('ErrorCep').innerHTML = "Digite um CEP";
    } else {
        if (verificaCep('cep') == true) {
            document.getElementById('ErrorCep').innerHTML = "Erro na digitação. Por favor digite na formatação do Placeholder";
        } else {
            document.getElementById('ErrorCep').innerHTML = "";
        }
    }
    if (confereCampo('nasc') == true) {
        document.getElementById('ErrorNasc').innerHTML = "Digite uma data"
    } else {
        if (verificaNasc('nasc') == true) {
            document.getElementById('ErrorNasc').innerHTML = "Digite uma data válida"
        }
        else {
            document.getElementById('ErrorNasc').innerHTML = ""
        }
    }
    if (confereCampo('cpf') == true) {
        document.getElementById('ErrorCpf').innerHTML = "Digite um CPF"
    } else {
        if (verificaCpf('cpf') == true) {
            document.getElementById('ErrorCpf').innerHTML = "Digite um CPF válido"
        } else {
            document.getElementById('ErrorCpf').innerHTML = ""
        }
    }

    // if(confereCampo('cnpf') == true) {
    //     document.getElementById('ErrorCnpj').innerHTML = "Digite um CNPJ"
    // }else {
    //     if(verificaCnpj('cnpj') == true) {
    //         document.getElementById('ErrorCnpj').innerHTML = "Digite um CNPJ válido"
    //     } else {
    //         document.getElementById('ErrorCnpj').innerHTML = ""
    //     }
    // }
    if (confereCampo('email') == true) {
        document.getElementById('ErrorEmail').innerHTML = "Digite um e-mail"
    } else {
        if (verificaEmail('email') == true) {
            document.getElementById('ErrorEmail').innerHTML = "Digite um EMAIL válido"
        } else {
            document.getElementById('ErrorEmail').innerHTML = ""
        }
    }
    confereCampo('telefoneTipos')
}
function confereCampo(id) {
    if (id != 'telefoneTipos') {
        let campo = document.getElementById(id).value;
        if (campo == '') {
            return true
        }
        return false
    } else {
        let select = document.getElementById(id)
        let valorCampo = select.options[select.selectedIndex].value
        if (valorCampo == 'nenhum') {
            let errtel = document.getElementById('ErrorTelefone').innerHTML = ''
            let errcel = document.getElementById('ErrorCelular').innerHTML = ''
            let tel = document.getElementById('telefone').value = ''
            let cel = document.getElementById('celular').value = ''
            return
        } else if (valorCampo == 'celular') {
            document.getElementById('telefone').value = ''
            document.getElementById('ErrorTelefone').innerHTML = ''
            let campo = document.getElementById('celular').value
            campo = campo.replace(/[^a-zA-Z0-9]/g, '')
            if (campo == '') {
                return document.getElementById('ErrorCelular').innerHTML = 'Digite um número'
            }
            else if (campo.length != 11) {
                return document.getElementById('ErrorCelular').innerHTML = 'Digite um número de celular válido'
            }
            return document.getElementById('ErrorCelular').innerHTML = ''
        } else if (valorCampo == 'telefone') {
            document.getElementById('celular').value = ''
            document.getElementById('ErrorCelular').innerHTML = ''
            let campo = document.getElementById('telefone').value
            campo = campo.replace(/[^a-zA-Z0-9]/g, '')
            if (campo == '') {
                return document.getElementById('ErrorTelefone').innerHTML = 'Digite um número'
            }
            else if (campo.length != 10) {
                return document.getElementById('ErrorTelefone').innerHTML = 'Digite um número de telefone válido'
            }
            return document.getElementById('ErrorTelefone').innerHTML = ''
        }
    }
}
function verificaTamNome(id) {
    let campo = document.getElementById(id).value;
    if (campo.length < 51) {
        return false;
    }
    return true
}
function verificaCep(id) {
    let campo = document.getElementById(id).value;
    if (campo.length == 10 && campo[2] == '.' && campo[6] == '-') {
        return false;
    }
    return true;
}
function verificaNasc(id) {
    let campo = document.getElementById(id).value;
    campo = campo.replace(/[^a-zA-Z0-9]/g, '')
    let dia = campo.substr(0, 2)
    let mes = campo.substr(2, 2)
    let ano = campo.substr(4)
    if (dia > 0 && dia < 32) {
        if (mes > 0 && mes < 13) {
            if (ano > 1904 && ano < 2022) {
                return false
            }
            else { return true }
        } else { return true }
    }
    else { return true }
}
function verificaCpf(id) {
    let cpf = document.getElementById(id).value
    cpf = cpf.replace(/[^\d]+/g, '');
    let add = 0;
    let digitoVer = 0;
    for (let i = 0; i < 9; i++) {
        add += parseInt(cpf[i]) * (10 - i);
    }
    let restoDivisao = add % 11
    if (restoDivisao < 2) {
        digitoVer = 0
    } else {
        digitoVer = 11 - restoDivisao
    }

    if (cpf[9] != digitoVer) {
        return true
    }
    add = 0
    for (let i = 0; i < 9; i++) {
        add += parseInt(cpf[i]) * (11 - i)
    }
    add += digitoVer * 2;
    restoDivisao = 0
    restoDivisao = add % 11
    if (restoDivisao < 2) {
        digitoVer = 0
    } else {
        digitoVer = 11 - restoDivisao
    }

    if (cpf[10] != digitoVer) {
        return true
    }
    return false;
}
// function verificaCnpj(id) {
//     let campo = document.getElementById(id).value;
// }
function verificaEmail(id) {
    let campo = document.getElementById(id).value;
    if (campo.length > 60) {
        return true
    }
    if (campo.includes('@') && campo.includes('.com')) {
        return false
    }
    return true;
}