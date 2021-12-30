<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand href="#">Gestão</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#" >Nova Medição</b-nav-item>
                    <b-nav-item href="#" >Cadastros</b-nav-item>
                    <b-nav-item href="#" >Relatórios</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input
                        size="sm"
                        class="mr-sm-2"
                        placeholder="Buscar..."
                        ></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Ir</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown text="Configurações" right>
                        <b-dropdown-item href="#">Perfil</b-dropdown-item>
                        <b-dropdown-item href="#">Sair</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>