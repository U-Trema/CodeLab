<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import { generateCaptcha, renderEmail } from "~/utils/text.utils.ts";

const mail = useMail();
const isTitleVisible = ref(false);
const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
});
const security = reactive({
  captchaValue: '',
  captcha: ''
});
const errors = reactive({
  email: '',
  captcha: '',
});

onMounted(() => {
  generateNewCaptcha();

  setTimeout(() => {
    isTitleVisible.value = true;
  }, 1000);
});

const generateNewCaptcha = (event?: Event) => {
  event?.preventDefault();
  Object.assign(security, { captchaValue: generateCaptcha(), captcha: '' });
  Object.assign(errors, { ...errors, captcha: '' });
}

const validateForm = () => {
  errors.email = !validateEmail(form.email) ? 'L\'adresse e-mail n\'est pas valide.' : '';
  errors.captcha = security.captchaValue !== security.captcha ? 'Le code captcha est incorrect.' : '';

  return Object.values(errors).every(error => error === '');
}

const submitForm = () => {
  if (validateForm()) {
    mail.send({
      from: 'UTREMA CodeLab',
      subject: 'UTREMA Demande de Contact',
      text: `You have a message from your Website Contact Form Name: ${ form.name }`,
      html: renderEmail(form),
    })
  }
}

const validateEmail = (email: string) => {
  const EMAIL_REGEXP = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return EMAIL_REGEXP.test(email);
}
</script>


<template>
  <main class="container">
    <h1 :class="{ active: isTitleVisible }">Nous contacter</h1>
    <form @submit.prevent="submitForm">
      <Input v-model="form.name" type="text" name="name" placeholder="Nom / Prénom" label="Nom / Prénom"
             maxlength="50"/>
      <Input v-model="form.email" type="email" name="email" placeholder="E-mail" label="E-mail" maxlength="50"
             :error="errors.email"/>
      <Input v-model="form.phone" type="text" name="phone" placeholder="Téléphone" label="Téléphone" maxlength="25"/>
      <Textarea v-model="form.message" cols="30" rows="5" name="message"
                placeholder="Merci de détailler le plus possible votre besoin afin de faciliter nos futurs échanges."
                label="Message"
      />
      <div class="captcha-bloc">
        <Input v-model="security.captcha" class="captcha-input" type="text" name="captcha" autocomplete="off"
               :label="`Recopier ${security.captchaValue}`" :placeholder="security.captchaValue" :error="errors.captcha"
        />
        <Button @click="generateNewCaptcha" class="captcha-btn" variant="convex">Générer un nouveau code</Button>
      </div>
      <div class="btn">
        <Button type="submit">Envoyer</Button>
      </div>
      <div class="direct-email">
        <span>Vous n'aimez pas les formulaires ?</span>
        <span>Envoyer directement un email à <a href="mailto:salaun.cedric@gmail.com">Cédric</a></span>
      </div>
    </form>
  </main>
</template>

<style scoped lang="scss">
main.container {
  @include flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  gap: $spacing-3;

  h1 {
    font-size: $font-xtra-xtra-large;
    font-weight: bold;
    letter-spacing: -0.05em;
    margin-bottom: $spacing-2;
    text-align: center;
    //transition: $xtra-long-transition-all;
    width: max-content;

    &.active {
      --tw-text-opacity: 1;
      box-shadow: var(--shadow-line);
      color: var(--text-base);
      font-weight: 700;
    }
  }

  form {
    margin: 0 auto;
    width: 75%;
  }

  form ::placeholder {
    color: $unselected;
  }

  .btn {
    margin: 0 auto;
    width: 40%;
  }

  div.captcha-bloc {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: $spacing-5;

    div.captcha-input {
      flex: 2;
    }
    button.captcha-btn {
      flex: 1;
    }
  }

  div.direct-email {
    margin: $spacing-5 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: left;
    span {
      margin: $spacing-1;
    }
    a {
      color: var(--primary);
    }
  }
}

@media screen and (max-width: 768px) {
  main.container {
    gap: $spacing-5;
    form {
      width: 100%;
    }
  }
}
</style>
