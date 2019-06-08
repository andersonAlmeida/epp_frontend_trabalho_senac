module.exports = function () {
    return Vue.component('todo-item', {
        template: `
        <div class="container-fluid">
            <div class="row d-flex align-items-md-stretch">
                <!-- Conteudo cabecalho -->
                <h2>Atração {{ $route.params.id }}</h2>
            </div>
        </div>
        `,
        data() {
            return {
                loading: false,
                post: null,
                error: null
            }
        },
        created() {
            // fetch the data when the view is created and the data is
            // already being observed
            this.fetchData()
        },
        watch: {
            // call again the method if the route changes
            '$route': 'fetchData'
        },
        methods: {
            fetchData() {
                this.error = this.post = null
                this.loading = true

                var header = new Headers({
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiMyIsIm5vbWUiOiJMaWVnZSJ9.4jUUC433DkickpiPnTWKQLFD8kFv1e5s9Nn9XhngmSM'
                });
                // replace `getPost` with your data fetching util / API wrapper
                fetch("//localhost:8080/cms/atracao/" + this.$route.params.id,
                    {
                        method: 'GET',
                        headers: header
                    }).then(function (res) {                        
                        return res.json();
                    });
            }
        }
    });
}();