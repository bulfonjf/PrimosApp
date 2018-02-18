<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">PrimosApp</v-card-title>
        <v-card-text>
          <p>Registra tus gastos, deudas y prestamos.</p>
          <p>Invia a otras personas y comparte tus compras.</p>
          <p>Registra servicios y gastos periodicos.</p>
          <p>Pregunta a tu compañerX por alguna compra!</p>
          <p>Gracias por usar esta app!</p>
          <div class="text-xs-right">
            <em><small>&mdash; Juan Bulfon</small></em>
          </div>
          <hr class="my-3">
          Hecho con <a href="https://nuxtjs.org/" target="_blank">Nuxt</a>
          <br>
          <a href="https://github.com/bulfonjf/PrimosApp" target="_blank">GitHub</a>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat nuxt to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  
}
</script>
