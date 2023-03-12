<template>
  <div class="modal modal-lg fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header pb-0">
          <div class="w-100">
            <div class="d-inline">
              <div class="d-flex w-100" style="height: 1px">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="justify-content-center w-100 d-flex">
                <h4>
                  <i>
                    <strong>
                      GERAR SENHA SEGURA
                    </strong>
                  </i>
                </h4>
              </div>
              <div class="mt-2">
                <div class="d-flex justify-content-center">
                  <form class="p-2 w-75" enctype="multipart/form-data">
                    <div class="row mb-3">
                      <div class="col mb-6">
                        <label for="validationDefault01"><i>Adicione o email ou chave :</i> </label>
                        <input type="text" class="form-control input w-100" style="text-align: center;" placeholder="exemplo@exemplo.com" required />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col mb-6">
                        <label for="validationDefault01"><i>Adicione uma senha: </i> </label>
                        <input type="text" class="form-control input w-100" style="text-align: center;" placeholder="Admin@123" required />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <BaseCyberButtonVue :msg_button="'Fechar'" :tag_button="'25'" data-bs-dismiss="modal" slot-scope=""/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCyberButtonVue from '../BaseButtons/BaseCyberButton.vue'

export default {
  components: {
    BaseCyberButtonVue
  },
  props: {
    teamData: Object
  }
}
</script>

<style scoped lang="scss">
.wrap{
  flex-wrap: wrap;
  flex-direction: row;
  max-height: 20vh;
  overflow: auto;
  button{
    text-align: center;
  }
}
.modal-header{
  border: 1px solid white;
}
.modal-footer{
  border: 1px solid white;
}
</style>
