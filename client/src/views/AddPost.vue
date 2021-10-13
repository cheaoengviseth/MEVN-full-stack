<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>Add New Post</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
                        <v-text-field label="Title" v-model="posts.title" prepend-icon="mdi-note" :rules="rules"></v-text-field>
                        <v-text-field label="Category" v-model="posts.category" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>
                        <v-textarea label="content" v-model="posts.content" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>
                        <v-file-input @change="selectFile" :rules="rules" show-size counter multiple label="Select Image"></v-file-input>

                        <v-btn type="submit" class="mt-3" color="primary">ADD POST</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from "../api";
export default {
  data() {
      return {
          rules: [(value)=>!!value || "This field is required!"],
          posts: {
              title: "",
              category: "",
              content: "",
              image: "",
          },
          image: "",
      };
  },
  methods: {
      selectFile(file){
          this.image = file[0];
      },
      async submitForm(){
          const formData = new FormData();
          formData.append('image',this.image);
          formData.append('title', this.posts.title);
          formData.append('category', this.posts.category);
          formData.append('content', this.posts.content);
          
          if(this.$refs.form.validate()){
              const response = await API.addPost(formData);
              this.$router.push({name: 'home', params: {message: response.message}});
          }
      },
  },
  
};
</script>
