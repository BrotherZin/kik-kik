<template>
  <b-modal id="mdfyPop"
			  ref="modal"
		      title="QnA 수정"
		      @show="resetModal"
		      @hidden="resetModal"
		      @ok="handleOk">
		    <form ref="form" @submit.stop.prevent="handleSubmit" >
		    	<div class="modal-body" >
			        
                    <b-form-group	
			        		:state="nameState"
			          		label="질문입력"
			           		label-for="name-input"
			          		invalid-feedback="질문을 입력하세요.">
			        	<b-form-input id="name-input"
			           		   		  v-model="qna.sj"
			            			  :state="nameState" required>
			        	</b-form-input>
			        </b-form-group>
                    
			        <b-form-group	
			        		:state="nameState"
			          		label="답변입력란"
			           		label-for="name-input"
			          		invalid-feedback="답변을 입력하세요.">
			        	<b-form-input id="name-input"
			           		 v-model="qna.cn"
			            	 :state="nameState" required>
			       		</b-form-input>
			        </b-form-group>
			    </div>
	        </form>
		</b-modal>
</template>

<script>
export default {
    methods: {        
        // Modal PopUp Event
        resetModal() {
          this.name = ''
          this.nameState = null
        },
        handleOk(bvModalEvt) {
          // Prevent modal from closing
          bvModalEvt.preventDefault()
          // Trigger submit handler
          this.handleSubmit()
        },
        checkFormValidity() {
          const valid = this.$refs.form.checkValidity()
          this.nameState = valid
          return valid
        },
        handleSubmit() {
          // Exit when the form isn't valid
          if (!this.checkFormValidity()) {
            return
          }
          // Push the name to submitted names
          this.submittedNames.push(this.name)
          // Hide the modal manually
          /* this.$nextTick(() => {
            // this.$bvModal.hide('addQna')
          }) */                    
        }       
        
    }
}
</script>

<style>
#mdfyPop___BV_modal_content_ { margin-top: 100px; }
</style>