<script setup></script>

<template>
  <footer class="bg-forbodylight dark:bg-gray-900 transition-all duration-300">
    <div class="mx-auto border-t-2 border-gray-300 w-[95%] p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between md:items-center">
        <div class="mb-6 md:mb-0">
          <router-link to="/#home" href="#home" class="flex items-center gap-1">
            <img src="/Logo.png" alt="" class="md:w-20 md:h-20 w-12 h-12" />
            <span class="text-primary text-xl md:text-3xl flex items-center">Willy Candra </span>
          </router-link>
        </div>
        <div class="flex items-stretch justify-between w-72">
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-300 transition-all duration-300"
            >
              Navigasi
            </h2>
            <ul class="text-gray-500 font-medium">
              <li class="mb-4">
                <router-link
                  to="/#home"
                  class="hover:text-primary hover:underline transition-all duration-300"
                  >Beranda</router-link
                >
              </li>
              <li class="mb-4">
                <router-link
                  to="/#about"
                  class="hover:text-primary hover:underline transition-all duration-300"
                  >Tentang Saya</router-link
                >
              </li>
              <li>
                <router-link
                  to="/#project"
                  class="hover:text-primary hover:underline transition-all duration-300"
                  >Project</router-link
                >
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-300 transition-all duration-300"
            >
              Hubungi
            </h2>
            <ul class="text-gray-500 font-medium">
              <li class="mb-4">
                <a
                  href="https://github.com/CalvinCandra"
                  class="hover:text-primary hover:underline transition-all duration-300"
                  >Github</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="www.linkedin.com/in/willycandra"
                  target="_blank"
                  class="hover:text-primary hover:underline transition-all duration-300"
                  >Likendin</a
                >
              </li>
              <li>
                <a
                  href="www.linkedin.com/in/willycandra"
                  target="_blank"
                  class="hover:text-primary hover:underline transition-all duration-300"
                  >Instagram</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-300 sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span
          class="text-sm text-gray-500 sm:text-center dark:text-gray-300 transition-all duration-300"
          >© 2025 <a href="#" class="hover:underline">Willy Calvin Candra Lay</a>. All Rights
          Reserved.
        </span>
      </div>
    </div>
  </footer>
</template>
