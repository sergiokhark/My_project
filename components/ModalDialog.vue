<template>
  <v-dialog v-model="dialog" :max-width="dialogWidth">
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ formTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <slot></slot>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn v-if="showCancel" color="blue darken-1" text @click="$emit('close')"> Cancel </v-btn>
        <v-btn v-if="created" color="blue darken-1" text @click="$emit('create')"> Create </v-btn>
        <v-btn v-else color="blue darken-1" text @click="$emit('save')"> {{ btnName }} </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    formTitle: {
      type: String,
      default: ''
    },
    created: {
      type: Boolean,
      default: false
    },
    btnName: {
      type: String,
      default: 'Save'
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    dialogWidth: {
      type: String,
      default: '700px'
    }
  }
}
          
</script>