<template>
    <header>
        <Header />

        <CadastrosServicos />

        <NovaMedicao v-if="newMed" />

        <b-jumbotron v-else>
            <template #header>Gestão de Obras</template>

            <template #lead>
                Bem vindo(a) ao sistema de gestão de obras, aqui você pode realizar seus cadastros, medições das obras e obter seus relatórios
            </template>

            <hr class="my-4">

            <p>
                O que gostaria de fazer?
            </p>

            <b-button variant="primary" @click="newMed = !false" class="mx-2">Nova Medição</b-button>
            <b-button variant="success" href="#" class="mx-2">Meus Relatórios</b-button>
        </b-jumbotron>

        

        <Footer />
    </header>
</template>

<script>
import Header from '../tamplete/Header.vue'
import NovaMedicao from './NovaMedicao.vue'
import CadastrosServicos from './CadastrosServicos.vue'
import Footer from '../tamplete/Footer.vue'

export default {
    name: 'Home',
    components: { Header, Footer, NovaMedicao, CadastrosServicos },
    data() {
        return {
            newMed: false
        }
    }

}
</script>

<style>

</style>