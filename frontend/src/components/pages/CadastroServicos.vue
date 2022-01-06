<template>
    <div>
        <ul v-for="s in servs" :key="s.id">
            <li >{{ s.title }}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'CadastrosServicos',
    data() {
        return {
            servs: []
        }
    },
    methods: {
        loadTable() {
            axios.get('http://localhost:3000/servicos').then(data => {
                console.log(data)
            })
        }
    },
    created() {
        this.loadTable()
    }
}
</script>

<style>

</style>