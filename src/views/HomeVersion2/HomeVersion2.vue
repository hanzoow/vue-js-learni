<script setup>
import NavBar from '../../components/NavBar.vue'
import AnimatedIntroHome from '../../components/AnimatedIntroHome.vue'
import ActivitiesFilterHome from '@/components/ActivitiesFilterHome.vue'
</script>

<template>
  <main>
    <q-img
      src="https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.webp?b=1&s=170667a&w=0&k=20&c=PL6F9_KtlUx4E6pl9ryJxR3kLSv-l6aiHAi1DLw84vk="
      style="width: 100vw; height: fit-content"
      class="bigdiv img"
      fit="stretch"
    >
      <div style="width: 100%">
        <NavBar />
        <AnimatedIntroHome />
        <div style="justify-content: center" class="row center justify-content-center">
          <q-card
            style="
              gap: 20px;
              background: rgba(21, 47, 0, 0.4);
              border-radius: 125px;
              border: 1px solid var(--primary-color1);
              padding: 8px 20px;
              width: fit-content;
            "
            :bordered="true"
          >
            <q-card-section class="card-call" horizontal>
              <q-icon name="phone" color="teal" size="28px" />
              <q-item-section>
                <q-item-label>To More Inquiry </q-item-label>
                <a :href="`tel:+990-737 621 432`" clickable>+990-737 621 432</a>
              </q-item-section>
            </q-card-section>
          </q-card>
          <div style="gap: 20px; background: transparent; padding: 8px 20px; width: fit-content">
            <q-card-section horizontal>
              <q-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xwcwbTEnCXzVoyvQT4PLhty-xJw9VM8BcsLZc4WetQ&s"
                style="aspect-ratio: 1; width: 45px; border-radius: 50px; margin-right: 12px"
                fit="stretch"
              />
              <q-item-section>
                <q-item-label>Tripadvisor</q-item-label>
                <div class="horizontal center">
                  <q-rating model-value="5" color="blue" readonly size="1em" />
                  <span>5.0/5.0</span>
                </div>
              </q-item-section>
            </q-card-section>
          </div>
        </div>
        <ActivitiesFilterHome />
      </div>
    </q-img>
  </main>
</template>

<style>
.bigdiv img {
  position: absolute;
  flex-direction: column;
}
.card-call {
  width: fit-content;
  align-items: center;
}
</style>
