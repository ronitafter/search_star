<template>
  <v-toolbar color="orange accent-1">
   <v-app-bar-nav-icon class="hidden-sm-and-down"></v-app-bar-nav-icon>
   <v-toolbar-title class="text-h6 mr-6 hidden-sm-and-down">
      Search Star
   </v-toolbar-title>
	<v-container grid-list-md text-xs-center>
   	<v-layout row wrap>
      	<v-flex xs12 align-end>
				<v-text-field
      			label="Search your favotite Star Wars ..."
         		prepend-inner-icon="mdi-magnify"
				:type="type"
				:value="internalValue"
				v-debounce:200ms="updateValue">
				</v-text-field>
			</v-flex>
		</v-layout>
	</v-container>
  </v-toolbar>
</template>
<script lang="ts" src="./searchBar.ts" />
