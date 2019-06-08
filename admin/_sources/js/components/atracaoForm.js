module.exports = function() {
    return Vue.component('todo-item', {
        template: `
        <div class="container-fluid">
            <div class="row d-flex align-items-md-stretch">
                <!-- Conteudo cabecalho -->
                <h2>Nova Atração</h2>
            </div>
        </div>
        `
    });
}();