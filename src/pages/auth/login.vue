<!-- LoginForm.vue -->
<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 class="mt-6 text-3xl font-semibold text-center text-gray-900">
        Login
      </h2>
      <form @submit.prevent="login" class="mt-8 space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700"
            >Username</label
          >
          <div class="mt-1">
            <InputText
              id="username"
              v-model="username"
              class="w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <div class="mt-1">
            <Password
              id="password"
              v-model="password"
              :pt="{
                input: {
                  root: {
                    class: 'w-full',
                  },
                },
              }"
              class="w-full border-gray-300 rounded-md shadow-sm"
              toggleMask
              :feedback="false"
            />
          </div>
        </div>
        <div>
          <Button
            label="Login"
            icon="pi pi-sign-in"
            type="submit"
            class="w-full py-2 rounded-md"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";

export default {
  components: {
    InputText,
    Password,
    Button,
  },
  setup() {
    const username = ref("");
    const password = ref("");

    const login = () => {
      // Handle login logic here
      console.log("Username:", username.value);
      console.log("Password:", password.value);
    };

    return {
      username,
      password,
      login,
    };
  },
};
</script>
