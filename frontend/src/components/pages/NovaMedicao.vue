<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-3" label="Serviço" label-for="input-3">
            <b-form-select
            id="input-3"
            v-model="form.servico"
            :options="servicos"
            required
            ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-2" label="Quantidade:" label-for="input-2">
            <b-form-input
            id="input-2"
            v-model="form.quantidade"
            placeholder="Quantidade"
            required
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
            >
            </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary" class="mx-2">Adicionar</b-button>
        <b-button type="reset" variant="danger" class="mx-2">Cancelar</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'NovaMedicao',
        data() {
        return {
            form: {
            quantidade: '',
            food: null,
            servico: null,
            checked: []
            },
            foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
            servicos: [{ text: 'Selecione um serviço', value: null }, 'Reboco', 'Chapisco', 'Revestimento Ceramico', 'Alvenaria'],
            show: true,
        }
        },
        methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            this.form.food = null
            this.form.checked = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
            this.show = true
            })
        }
        }
    }
</script>

<style>

</style>